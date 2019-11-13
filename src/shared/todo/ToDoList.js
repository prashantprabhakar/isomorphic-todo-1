import React from "react"
import TodoItem from "./TodoItem"

class TodoList extends React.Component {

    render(){
        const {todos, handleDelete} = this.props
        return (
            <div className="todo-list">
                {
                  todos && todos.length &&  todos.map(todo => <TodoItem todo={todo} handleDelete={handleDelete}/>)
                }
                
            </div>
        )
    }
}

export default TodoList