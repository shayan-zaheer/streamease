import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import Profile from "./pages/Profile.jsx";
import HomePage from "./pages/HomePage.jsx";
import InitialPage from "./pages/InitialPage.jsx";
import PlayPage from "./pages/PlayPage.jsx";
import LoginForm, { loginAction } from "./components/forms/LoginForm.jsx";
import RegisterForm, { registerAction } from "./components/forms/RegisterForm.jsx";
import ForgetForm from "./components/forms/ForgetForm.jsx";
import OTPForm from "./components/forms/OTPForm.jsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/home-page",
				element: <HomePage />,
			},
			{
				path: "/favorites",
				element: <Favorites />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/play",
				element: <PlayPage />,
			},
		],
	},
	{
		path: "/",
		element: <InitialPage />,
		children: [
            {
                path: "/login",
                element: <LoginForm />,
                action: loginAction
            },
            {
                path: "/register",
                element: <RegisterForm />,
                action: registerAction
            },
            {
                path: "/forgot-password",
                element: <ForgetForm />
            },
            {
                path: "/otp",
                element: <OTPForm />
            }
        ]
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
