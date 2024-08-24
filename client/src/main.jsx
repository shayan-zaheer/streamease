import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Provider} from "react-redux";
import store from './store/index.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Favorites from './pages/Favorites.jsx';
import Profile from './pages/Profile.jsx';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/home-page",
                element: <HomePage />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "/profile",
                element: <Profile />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
