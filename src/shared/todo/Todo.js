import React from "react"
import TodoList from "./ToDoList"
import "isomorphic-fetch";


class Todo extends React.Component {

    constructor(props) {
        super(props)
        if(props.initialData){
            let initialData = props.initialData
            this.state = {todos: initialData}
        } else {
            console.log("This never prints")
        }
    }

    handleDelete = (id) => {
        console.log({id})
        // let resp = fetch({
        //     method: 'POST',
        //     body: {id}
        // })
        //console.log({resp})
    }

    render() {
        let todos = this.state && this.state.todos
        return (
            <TodoList todos={todos} handleDelete={this.handleDelete} />
        )
    }
}

export default Todo