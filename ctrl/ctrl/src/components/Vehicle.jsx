import React from 'react';

function Vehicle(props) {
    const { driverName, truckNameplate, truckType, expectedHours, closeModal } = props;

    return (
        <div className="card">
            <div>
                <h3>Driver Name: {driverName}</h3>
                <p>Truck Nameplate Number: {truckNameplate}</p>
                <p>Truck Type: {truckType}</p>
                <p>Expected Hours of Travel: {expectedHours}</p>
            </div>
        </div>
    );
}

export default Vehicle;
