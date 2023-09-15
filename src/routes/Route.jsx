import { createBrowserRouter } from "react-router-dom";
import TodoList from "../components/TodoList/TodoList";
import AddTodo from "../components/AddTodo/AddTodo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TodoList></TodoList>
    },
    {
        path: "/add-todo",
        element: <AddTodo></AddTodo>
    }
]);

export default router;