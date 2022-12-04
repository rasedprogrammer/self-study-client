import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseCategory from "../../Pages/CourseCategory/CourseCategory/CourseCategory";
import Home from "../../Pages/Home/Home/Home";
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
		],
	},
]);
