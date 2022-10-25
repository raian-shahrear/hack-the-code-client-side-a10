import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Others/ErrorPage";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";
import Blog from "../Pages/Blog"
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/faq',
        element: <FAQ />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      }
    ]
  }
])

export default routes;