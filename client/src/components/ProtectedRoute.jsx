import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const user = useSelector((store) => store.user);
    
    const isAuthenticated = user && (user.username || user.user_id);
    
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    
    return children;
}

export default ProtectedRoute;