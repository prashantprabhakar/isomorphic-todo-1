import React from "react"

class TodoItem extends React.Component {

    constructor(props){
        super(props)
        this.showDetail = this.showDetail.bind(this)
    }

    showDetail() {
        console.log("need to show detail")
    }


    render() {
        let {title, _id} = this.props.todo
        let {handleDelete} = this.props
        return(
            <div>
                <li> 
                    {title} 
                    <button className="btn-del" onClick={() => handleDelete(_id)}> Del </button>
                    <button onClick={() => this.showDetail()}> View </button>
                </li> 
            </div>
        )
    }
}

export default TodoItem