import React from "react"
import TodoList from "./ToDoList"
import "isomorphic-fetch";
import "../App.css";



class Todo extends React.Component {


    constructor(props) {
        super(props)
        let initialData 
        // if(props.initialData){
        //     initialData = props.initialData
        // } else {
        //     console.log("cehcl")
        //     initialData = window.__initialData__
        //     delete window.__initialData__
        // }
        if (__isBrowser__){
            console.log("I am on client", +new Date())
            initialData = window.__initialData__
            delete window.__initialData__
        } else {
            console.log("I am on server ", +new Date())
            initialData = props.staticContext.initialData
        }
        this.state = {
            todos: initialData,
            removeDuplicate: props.removeDuplicate
        }
        this.removeDuplicate = this.removeDuplicate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        Todo.getInitialData().then(initialData => this.setState({todos: initialData}))
    }

    static async getInitialData() {
        let resp = await fetch("http://localhost:3000/api/todos")
        let initialData = await resp.json()
        return initialData
    }

    async handleDelete(_id){
        let resp = await fetch("http://localhost:3000/api/del-todo",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id})
        })
        let data = await resp.json()
        this.setState({todos: data.updatedTodo})
    }

    removeDuplicate(){
        let set = new Set()
        let filtered = this.state.todos.filter(todo => {
            if(set.has(todo.title)) return false
            else {
                set.add(todo.title)
                return true
            }
        })
        this.setState({todos: filtered})
    }

    render() {
        let todos = this.state && this.state.todos
        return (
            <div>
                <button onClick={() => this.removeDuplicate()}> Remove duplicates </button>
                <TodoList todos={todos} handleDelete={(_id) => this.handleDelete(_id)} />
            </div>
        )
    }
}

export default Todo