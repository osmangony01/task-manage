import { createBrowserRouter } from "react-router-dom";
import TodoList from "../components/TodoList/TodoList";
import AddTodo from "../components/AddTodo/AddTodo";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <TodoList></TodoList>
            },
            {
                path: "/add-todo",
                element: <AddTodo></AddTodo>
            }
        ]
    }
]);

export default router;