import React from 'react';
import { Link } from 'react-router-dom';

function Vehicle(props) {
    const { id, driverName, driverNumber, truckNameplate, truckType, expectedHours } = props;

    return (
        <div className="card">
            <div>
                <h3>Driver Name: {driverName}</h3>
                <h3>Driver Number: {driverNumber}</h3>
                <p>Truck Nameplate Number: {truckNameplate}</p>
                <p>Truck Type: {truckType}</p>
                <p>Expected Hours of Travel: {expectedHours}</p>
                <Link to={`/vehicle/${id}`}>View Details</Link>
            </div>
        </div>
    );
}

export default Vehicle;