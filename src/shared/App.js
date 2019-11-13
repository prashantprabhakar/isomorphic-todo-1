// new entry point
import React from "react"
import {Switch, Route} from "react-router-dom"
import Todo from "./todo/Todo"
import TodoDetail from "./todo/TodoDetails"

const App = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Todo}/>
            <Route path="/detail" component={TodoDetail} />
        </Switch>
    )
}

export default App