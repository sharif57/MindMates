import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Root() {
    return (
        <div className="font-f">
            <Navbar></Navbar>
            <div className="pt-14 bg-[#f4feff]">
                <Outlet></Outlet>
            </div>
        </div>
    )
}
