import React from "react"
import Todo from "./Todo"

class TodoItem extends React.Component {

    constructor(props){
        super(props)
        this.handleDelete = this.handleDel.bind(this)
    }

    handleDel = (id) => {
       // e.preventDefault()
        console.log("called")
        //this.props.handleDelete(id)
    }

    render() {
        let {title, _id} = this.props.todo
        let {handleDelete} = this.props
        return(
            <div>
                <li> 
                    {title} 
                    <button onClick={this.handleDel}> Del </button>
                </li> 
            </div>
        )
    }
}

export default TodoItem