import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import CourseCategory from "../../Pages/CourseCategory/CourseCategory/CourseCategory";
import CourseDetailsPage from "../../Pages/CourseDetailsPage/CourseDetailsPage";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import NotFoundPage from "../../Pages/Shared/NotFountPage/NotFoundPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				loader: () => fetch(`https://seft-study-server.vercel.app/categories`),
				element: <Home></Home>,
			},
			{
				path: "/courses",
				loader: () => fetch(`https://seft-study-server.vercel.app/courses`),
				element: (
					<PrivateRoute>
						<Courses></Courses>
					</PrivateRoute>
				),
			},
			{
				path: "/categories",
				element: <CourseCategory></CourseCategory>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/categories/:id",
				loader: ({ params }) =>
					fetch(`https://seft-study-server.vercel.app/categories/${params.id}`),
				element: (
					<PrivateRoute>
						<CourseDetailsPage></CourseDetailsPage>
					</PrivateRoute>
				),
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "*",
				element: <NotFoundPage></NotFoundPage>,
			},
		],
	},
]);
