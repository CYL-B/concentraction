/** Component that allows user to navigate to another page only if he is logged in or signed up
 * checks if token is in local storage
 * if so: redirects to child route 
 * if not => redirects to sign-up
 */
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
    const sessionStorageToken = sessionStorage.getItem("token");
    return sessionStorageToken ? <Outlet /> : <Navigate to="/sign-up" />
}
