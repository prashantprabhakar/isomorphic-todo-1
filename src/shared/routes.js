import TodoDetail from "./todo/TodoDetails";
import Todo from "./todo/Todo"

const routes = [
  {
    path: "/",
    exact: true,
    component: Todo
  },
  {
      path: "/detail/:id",
      component: TodoDetail
  }
];

export default routes;
