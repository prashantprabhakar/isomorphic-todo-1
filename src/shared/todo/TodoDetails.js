import React from "react"

class TodoDetail extends React.Component {

    render() {
        let {todo} = this.props
        return (
            <div>
                <table>
                    <tr>
                        <td> Id</td>
                        <td> {todo._id}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default TodoDetail