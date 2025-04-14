import React from 'react';
import './Dashboard.css';
import React, { useState } from 'react';

const Dashboard = () => {
    const Dashboard = () => {
        const [info, setInfo] = useState("Here is some initial info.");

        return (
            <div className="dashboard">
                <header className="dashboard-header">
                    <h1>Welcome to MyFlex Dashboard</h1>
                </header>
                {info}
                <main className="dashboard-content">
                    <section className="dashboard-section">
                        <h2>Your Watchlist</h2>
                        <p>Manage your favorite movies and shows here.</p>
                    </section>
                    <section className="dashboard-section">
                        <h2>Recommendations</h2>
                        <p>Discover new content tailored for you.</p>
                    </section>
                </main>
            </div>
        );
    };
};

export default Dashboard;
