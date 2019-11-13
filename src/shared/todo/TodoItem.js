import React from "react"
import { Link } from "react-router-dom";


class TodoItem extends React.Component {

    constructor(props){
        super(props)
        // this.showDetail = this.showDetail.bind(this)
    }

    // showDetail() {
    //     console.log("need to show detail")
    //     this.props.history.push("/detail")
    // }


    render() {
        let {title, _id} = this.props.todo
        let {handleDelete} = this.props
        return(
            <div>
                <li> 
                    {title} 
                    <button className="btn-del" onClick={() => handleDelete(_id)}> Del </button>
                    <Link to="/detail">
                        <button> View </button>
                    </Link>
                </li> 
            </div>
        )
    }
}

export default TodoItem