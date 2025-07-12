import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <ToastContainer position="bottom-right" theme="dark" />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
