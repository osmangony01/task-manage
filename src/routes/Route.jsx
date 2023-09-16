import { createBrowserRouter } from "react-router-dom";
import TodoList from "../components/TodoList/TodoList";
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
        ]
    }
]);

export default router;