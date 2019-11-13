import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import App from "../shared/App";
import Todo from "../shared/todo/Todo"

render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
  <Todo />,
  document.getElementById("root")
);
