import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserList from "../curd/UserList";
import AddUser from "../curd/AddUser";
import EditUser from "../curd/EditUser";

const router = createBrowserRouter([
    {

        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <UserList></UserList>
            },
            {
                path: "/add-user",
                element: <AddUser></AddUser>
            },
            {
                path: "/edit-user/:id",
                element: <EditUser></EditUser>
            }
        ]
    }
])

export default router;