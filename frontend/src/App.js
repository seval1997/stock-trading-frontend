import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import Watchlist from "./components/WatchListCard/Watchlist";

function Content() {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1">
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
