import React from "react"

class TodoList extends React.Component {

    render(){
        const {todos} = this.props
        return (
            <div className="todo-list">
                todos && todos.map(todo => {
                    <p> {todo}</p>
                })
            </div>
        )
    }
}

export default TodoList