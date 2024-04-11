import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <div>
        <ul className="navBar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
        </ul>
    </div>
}

export default Navbar