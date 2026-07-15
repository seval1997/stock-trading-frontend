import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar/Sidebar";

function Content() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-4" data-bs-theme={theme}>
                <nav className={`navbar ${theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"}`}>
                    <span className="navbar-brand fw-bold">TradingApp</span>
                    <button className="btn btn-outline-primary ms-auto" onClick={toggleTheme}>
                        Toggle Theme
                    </button>
                </nav>
                <div className="card p-3 mt-4">
                    <h1>Hello World</h1>
                    <p>Current theme: {theme}</p>
                </div>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <Content />
        </ThemeProvider>
    );
}
