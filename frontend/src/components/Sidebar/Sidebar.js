import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
    FaBars,
    FaHome,
    FaChartPie,
    FaExchangeAlt,
    FaFileAlt,
    FaCog,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => setCollapsed(!collapsed);

    const menuItems = [
        { icon: <FaHome />, label: "Dashboard", link: "/dashboard" },
        { icon: <FaChartPie />, label: "Portfolio", link: "/portfolio" },
        { icon: <FaExchangeAlt />, label: "Trades", link: "/trades" },
        { icon: <FaFileAlt />, label: "Reports", link: "/reports" },
        { icon: <FaCog />, label: "Settings", link: "/settings" },
    ];

    return (
        <div
            className={`sidebar d-flex flex-column flex-shrink-0 p-3 ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
                } ${collapsed ? "collapsed" : "expanded"}`}
            style={{
                width: collapsed ? "80px" : "250px",
                height: "100vh",
                transition: "width 0.3s",
            }}
        >
            {/* Header */}
            <div className="sidebar-header cursor-pointer" onClick={toggleSidebar}>
                {/* Favcon div always visible */}
                <div className="favcon_div">
                    <FaBars
                        className={`menu-icon ${theme === "light" ? "text-dark" : "text-light"
                            } ${collapsed ? "rotate-collapsed" : ""}`}
                    />
                </div>

                {/* Title text div with transition */}
                <div className={`menutext_div ${collapsed ? "collapsed" : "expanded"}`}>
                    <span
                        className={`title ${theme === "light" ? "text-dark" : "text-light"}`}
                    >
                        Trading
                    </span>
                </div>
            </div>


            <hr />

            {/* Menu */}
            <ul className="nav flex-column mb-auto">
                {menuItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <a href={item.link} className="nav-link d-flex align-items-center">
                            {/* Favcon div */}
                            <div className="favcon_div">
                                <span
                                    className={`menu-icon ${theme === "light" ? "text-dark" : "text-light"}`}
                                >
                                    {item.icon}
                                </span>
                            </div>

                            {/* Menu text div */}
                            <div
                                className={`menutext_div ${collapsed ? "collapsed" : "expanded"
                                    }`}
                            >
                                <span
                                    className={`menu-text ${theme === "light" ? "text-dark" : "text-light"}`}
                                >
                                    {item.label}
                                </span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>

            {/* Profile section */}
            <div className="profile-section mt-auto d-flex align-items-center">
                <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="profile-img"
                />
                {!collapsed && (
                    <div className="ms-2">
                        <div className={`profile-name ${theme === "light" ? "text-dark" : "text-light"}`}>
                            Seval
                        </div>
                        <div className={`profile-email ${theme === "light" ? "text-dark" : "text-light"}`}>
                            seval@example.com
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sidebar;
