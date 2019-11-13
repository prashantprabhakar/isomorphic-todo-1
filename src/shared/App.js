import React from "react";
import { Switch, Route } from "react-router-dom";
//import routes from "./routes";
import "./App.css";
import Todo from "./todo/Todo";
import TodoDetail from "./todo/TodoDetails";

const App = () => {
  return (
    // <Switch>
    //   {routes.map((route, i) => <Route key={i} {...route} />)}
    // </Switch>
    <Switch>
        <Route path="/" exact={true} component={Todo}/>
        <Route path="/detail" component={TodoDetail} />
    </Switch>
  );
};

export default App;