import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
    const user = useSelector((store) => store.user);
    
    const isAuthenticated = user && (user.username || user.user_id);
    
    if (isAuthenticated) {
        return <Navigate to="/home-page" replace />;
    }
    
    return children;
}

export default PublicRoute;