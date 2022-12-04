import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseCategory from "../../Pages/CourseCategory/CourseCategory/CourseCategory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Tutorial from "../../Pages/Tutorial/Tutorial/Tutorial";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/category/:id",
				element: <CourseCategory></CourseCategory>,
			},
			{
				path: "/tutorial/:id",
				element: <Tutorial></Tutorial>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
]);
