import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import View from "../components/CURD/View/View";
import Pagination from "../components/Pagination/Pagination";

const router = createBrowserRouter([{

    path: "/",
    element: <App></App>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/curd/view",
            element: <View></View>
        },
        {
            path: "/pagination",
            element: <Pagination></Pagination>
        },
        
    ]
}]);

export default router;