import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Others/ErrorPage";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";
import Blog from "../Pages/Blog"
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import CoursesByCategory from '../Pages/Others/CoursesByCategory';
import CourseDetails from '../Pages/Others/CourseDetails'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/top-courses')
      },
      {
        path: '/home',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/top-courses')
      },
      {
        path: '/courses',
        element: <Courses />,
        loader: () => fetch('http://localhost:5000/courses')
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
      },
      {
        path: '/categories/courses/:id',
        element: <CoursesByCategory />,
        loader: ({params}) => fetch(`http://localhost:5000/category/courses/${params.id}`)
      },
      {
        path: '/category/course-details/:id',
        element: <CourseDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/category/course-details/${params.id}`)
      }
    ]
  }
])

export default routes;