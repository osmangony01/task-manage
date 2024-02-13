import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";
import Profile from "../components/Profile/Profile";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <SignIn></SignIn>
            },
            {
                path: "/sign-up",
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path: "/profile",
        element: <Profile></Profile>
    },
    // {
    //     path: "/task-list",
    //     element: <TaskList></TaskList>
    // }
    // {
    //     path: "/file-upload",
    //     element: <FileUpload></FileUpload>
    // },
    // {
    //     path: "/upload",
    //     element: <FileUpload2></FileUpload2>
    // }
    
]);


export default router;