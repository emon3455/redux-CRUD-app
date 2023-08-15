import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error></Error>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/cart",
            element: <Cart/>
        }
      ]
    },
]);

export default router;