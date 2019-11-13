import React from "react"
import TodoList from "./ToDoList"
import "isomorphic-fetch";


class Todo extends React.Component {

    constructor(props) {
        super(props)
        
    }

    static fetchInitialData () {
        return fetch("http://127.0.0.1:3000/api/news")
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    render() {
        const { todos } = this.state;
        return (
            <TodoList todos={todos} />
        )
    }
}

export default Todo