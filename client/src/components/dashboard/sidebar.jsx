import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    return(
        <div className="flex flex-col flex-shrink-0 w-64">
        <div className="flex flex-col flex-grow overflow-y-auto bg-white">
            <div className="flex items-center flex-shrink-0 px-4 py-2 bg-gray-800">
                <span className="text-lg font-semibold text-white">Dashboard</span>
            </div>
            <nav className="flex flex-col flex-grow mt-5 overflow-y-auto">
                <a href="#" className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 bg-gray-200">
                    <span className="mx-4 font-medium text-gray-800">Cars</span>
                </a>
                <Link to="/order"  className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <span className="mx-4 font-medium text-gray-800">Orders</span>
                </Link>
                <a href="#" className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <span className="mx-4 font-medium text-gray-800">Types</span>
                </a>
                <a href="#" className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <span className="mx-4 font-medium text-gray-800">Details</span>
                </a>
            </nav>
        </div>
    </div>
    )
}

export default Sidebar;