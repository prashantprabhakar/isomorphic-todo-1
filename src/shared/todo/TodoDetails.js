import React from "react"

class TodoDetail extends React.Component {

    render() {
        let todo = {_id: "ajajka"}
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