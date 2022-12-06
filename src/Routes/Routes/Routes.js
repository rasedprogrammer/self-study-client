import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
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
				loader: () => fetch(`http://localhost:5000/categories`),
				element: <Home></Home>,
			},
			{
				path: "/courses",
				loader: () => fetch(`http://localhost:5000/courses`),
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
				path: "/categories/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:5000/categories/${params.id}`),
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
