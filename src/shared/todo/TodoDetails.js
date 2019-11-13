import React from "react"

class TodoDetail extends React.Component {

    constructor(props) {
        super(props)
        let initialData
        if(__isBrowser__) {
            console.log("in browser")
            initialData = window.__initialData__
        } else {
            console.log("in server")
            initialData =  props.staticContext.initialData
        }
        this.state = {todo: initialData}
    }

    // componentDidMount is not available on server; so we can use this in browser
    // in case this page in rendered from react and not by direct URL
    componentDidMount(){
        let {id} = this.props.match.params
        TodoDetail.getInitialData(id).then(todo => this.setState({todo: todo}))
    }

    static async getInitialData(id) {
        // hardcoded -- need to pass this dynamically
        id = id || "5dcb8251cf530d4db579cec1"
        let resp = await fetch(`http://localhost:3000/api/todo-detail/${id}`)
        let initialData = await resp.json()
        return initialData.todo
    }

    render() {
        let {todo} = this.state
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td> Id</td>
                            <td> {todo && todo._id}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoDetail