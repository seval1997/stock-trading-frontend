import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import Watchlist from "./components/WatchListCard/Watchlist";
import "./App.css"; // add styles here

function Content() {
    return (
        <div className="app-container">
            {/* Sidebar fixed on the left */}
            <div className="sidebar-container">
                <Sidebar />
            </div>

            {/* Dashboard content on the right */}
            <div className="dashboard-container">
                <DashboardHeader />
                <div className="p-4" style={{ marginTop: "60px" }}>
                    <h2 className="mb-3">Stock Watchlist</h2>
                    <Watchlist />
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
