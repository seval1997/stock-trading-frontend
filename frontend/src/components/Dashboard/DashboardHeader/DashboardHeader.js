import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { FaCog, FaSignOutAlt, FaStar, FaMoon, FaSun } from "react-icons/fa";
import "./DashboardHeader.css";

function DashboardHeader() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header
            className={`dashboard-header ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
                }`}
        >
            {/* Left side: Title */}
            <div className="header-title">Dashboard</div>

            {/* Right side: Menu icons */}
            <div className="header-menus">
                {/* Favorite */}
                <FaStar
                    className={`header-icon ${theme === "light" ? "text-dark" : "text-light"}`}
                />

                {/* Settings */}
                <FaCog
                    className={`header-icon ${theme === "light" ? "text-dark" : "text-light"}`}
                />

                {/* Theme toggle */}
                {theme === "light" ? (
                    <FaMoon
                        className="header-icon"
                        onClick={toggleTheme}
                        title="Switch to Dark Mode"
                    />
                ) : (
                    <FaSun
                        className="header-icon"
                        onClick={toggleTheme}
                        title="Switch to Light Mode"
                    />
                )}

                {/* Logout */}
                <FaSignOutAlt
                    className={`header-icon ${theme === "light" ? "text-dark" : "text-light"}`}
                />
            </div>
        </header>
    );
}

export default DashboardHeader;
