import React from "react"

class TodoDetail extends React.Component {

    constructor(props) {
        super(props)
        let initialData
        if(__isBrowser__) {
            initialData = window.__initialData__
        } else {
            initialData =  props.staticContext.initialData
        }
        this.state = {todo: initialData}
    }

    static async getInitialData() {
        // hardcoded -- need to pass this dynamically
        let id = "5dcb8251cf530d4db579cec1"
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
                            <td> {todo._id}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoDetail