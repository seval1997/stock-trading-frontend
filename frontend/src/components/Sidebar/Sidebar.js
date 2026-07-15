import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

function Sidebar() {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => setCollapsed(!collapsed);

    return (
        <div
            className={`d-flex flex-column flex-shrink-0 p-3 ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
                }`}
            style={{ width: collapsed ? "80px" : "250px", height: "100vh", transition: "width 0.3s" }}
        >
            <button
                className="btn btn-sm btn-outline-secondary mb-3"
                onClick={toggleSidebar}
            >
                {collapsed ? "➤" : "◀"}
            </button>

            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="/dashboard" className="nav-link">
                        {collapsed ? "🏠" : "Dashboard"}
                    </a>
                </li>
                <li>
                    <a href="/portfolio" className="nav-link">
                        {collapsed ? "📊" : "Portfolio"}
                    </a>
                </li>
                <li>
                    <a href="/trades" className="nav-link">
                        {collapsed ? "💹" : "Trades"}
                    </a>
                </li>
                <li>
                    <a href="/reports" className="nav-link">
                        {collapsed ? "📑" : "Reports"}
                    </a>
                </li>
                <li>
                    <a href="/settings" className="nav-link">
                        {collapsed ? "⚙️" : "Settings"}
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
