import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Example from './test';
import HomePage from './pages/homepage/homePage';
import ListPage from "./pages/listPage/ListPage";
import {Layout,  RequireAuth } from "./pages/layout/Layout";
import SinglePage from "./pages/singlepage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import NewPostPage from "./pages/newPostPage/NewPostPage"
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";
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
          element: <ListPage/>,
          loader: listPageLoader
        },
        {
          path: "/:id",
          element: <SinglePage/>,
          loader: singlePageLoader
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/login",
          element: <Login/>
        },
      ]
    },
    {
      path: "/",
      element: <RequireAuth/>,
      children: [
        {
          path: "/profile",
          element: <ProfilePage/>,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage/>
        },
        {
          path: "/profile/newpost",
          element: <NewPostPage/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
