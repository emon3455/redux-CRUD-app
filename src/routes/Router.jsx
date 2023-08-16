import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Books from "../pages/books/Books";
import AddBooks from "../pages/addBooks/AddBooks";
import ManageBooks from "../pages/manageBooks/ManageBooks";
import UpdateBooks from "../pages/updateBooks/UpdateBooks";

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
            path: "/books",
            element: <Books/>
        },
        {
          path: "/addBook",
          element: <AddBooks/>
        },
        {
          path: "/manageBooks",
          element: <ManageBooks/>
        },
        {
          path: "/updateBooks/:id",
          element: <UpdateBooks/>
        },
        {
          path: "/login",
          element: <Login/>
        }
      ]
    },
]);

export default router;