import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import Profile from "./pages/Profile.jsx";
import HomePage from "./pages/HomePage.jsx";
import InitialPage from "./pages/InitialPage.jsx";
import PlayPage from "./pages/PlayPage.jsx";
import LoginForm from "./components/forms/LoginForm.jsx";
import { loginAction } from "./utils/loginAction.js";
import RegisterForm, { registerAction } from "./components/forms/RegisterForm.jsx";
import ForgetForm from "./components/forms/ForgetForm.jsx";
import OTPForm from "./components/forms/OTPForm.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/home-page",
				element: (
					<ProtectedRoute>
						<HomePage />
					</ProtectedRoute>
				),
			},
			{
				path: "/favorites",
				element: (
					<ProtectedRoute>
						<Favorites />
					</ProtectedRoute>
				),
			},
			{
				path: "/profile",
				element: (
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
				),
			},
			{
				path: "/play",
				element: (
					<ProtectedRoute>
						<PlayPage />
					</ProtectedRoute>
				),
			},
		],
	},
	{
		path: "/",
		element: (
			<PublicRoute>
				<InitialPage />
			</PublicRoute>
		),
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
                element: <ForgetForm />,
                // action: forgotAction
            },
            {
                path: "/otp",
                element: <OTPForm />,
                // action: otpAction
            }
        ]
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={<LoadingSpinner />} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	</StrictMode>
);
