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
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
