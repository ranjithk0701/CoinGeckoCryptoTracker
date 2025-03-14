import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
    return (
        <>
            <Navbar/> {/* this navabar is the shared ui we want to across papes */}
            <Outlet/> {/* the actual page which will be rendered along with navbar */}
        </>
    )
}
export default MainLayout;