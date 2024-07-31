import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Example from './test';
import HomePage from './pages/homepage/homePage';
import ListPage from "./pages/listPage/ListPage";
import Layout from "./pages/layout/Layout";
import SinglePage from "./pages/singlepage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Register from "./pages/register/Register";

const App = () =>{
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/profile",
          element: <ProfilePage/>
        },
        {
          path: "/register",
          element: <Register/>
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
