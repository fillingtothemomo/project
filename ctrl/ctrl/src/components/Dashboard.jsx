import React, { useState } from 'react';

const Dashboard = () => {
    const [vehicles, setVehicles] = useState([]);

    const addVehicle = () => {
        // Logic to add a new vehicle
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={addVehicle}>Add Vehicle</button>
            {/* Render the list of vehicles */}
        </div>
    );
};

export default Dashboard;