import React, { useState } from 'react';

const TripPlanner = () => {
    const [currentLocation, setCurrentLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [truckNameplate, setTruckNameplate] = useState('');

    const handleCurrentLocationChange = (event) => {
        setCurrentLocation(event.target.value);
    };

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    const handleTruckNameplateChange = (event) => {
        setTruckNameplate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Current Location:', currentLocation);
        console.log('Destination:', destination);
        console.log('Truck Nameplate:', truckNameplate);
    
        // You can perform further actions with the trip data here
    
        // Reload the page
        window.location.reload();
    };
    return (
        <div>
            <h2>Trip Planner</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="currentLocation">Current Location:</label>
                    <input
                        type="text"
                        id="currentLocation"
                        value={currentLocation}
                        onChange={handleCurrentLocationChange}
                    />
                </div>
                <div>
                    <label htmlFor="destination">Work (Destination):</label>
                    <input
                        type="text"
                        id="destination"
                        value={destination}
                        onChange={handleDestinationChange}
                    />
                </div>
                <div>
                    <label htmlFor="truckNameplate">Truck Nameplate:</label>
                    <input
                        type="text"
                        id="truckNameplate"
                        value={truckNameplate}
                        onChange={handleTruckNameplateChange}
                    />
                </div>
                <button type="submit">Plan Trip</button>
            </form>
        </div>
    );
};

export default TripPlanner;
