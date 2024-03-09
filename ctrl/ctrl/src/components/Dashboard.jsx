import React, { useState, useEffect } from 'react';
import Vehicle from './Vehicle';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, addDoc, collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUU0WbFW_-FC0jAOtM3bHRozFL_By3GoU",
  authDomain: "ctrlfreak-5b229.firebaseapp.com",
  databaseURL: "https://ctrlfreak-5b229-default-rtdb.firebaseio.com",
  projectId: "ctrlfreak-5b229",
  storageBucket: "ctrlfreak-5b229.appspot.com",
  messagingSenderId: "827111841690",
  appId: "1:827111841690:web:2b77938adc7f1a5e332423",
  measurementId: "G-ZHLDZWPH5E"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

const Dashboard = () => {
    const db = getFirestore(app);

    const [vehicles, setVehicles] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Fetch vehicles from Firestore on component mount
        const fetchVehicles = async () => {
            try {
                const vehiclesCollection = collection(db, 'vehicles');
                const querySnapshot = await getDocs(vehiclesCollection);
                const vehiclesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setVehicles(vehiclesData);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
                // Handle error, if any
            }
        };
        

        fetchVehicles();
    }, [db]);

    const addVehicle = async (event) => {
        event.preventDefault();

        // Get the input values
        const driverName = document.getElementById('driverName').value;
        const truckNameplate = document.getElementById('truckNameplate').value;
        const truckType = document.getElementById('truckType').value;
        const expectedHours = document.getElementById('expectedHours').value;

        // Create a new vehicle object
        const newVehicle = {
            driverName,
            truckNameplate,
            truckType,
            expectedHours
        };

        try {
            // Add the new vehicle to Firestore
            const newVehicleRef = await addDoc(collection(db, 'vehicles'), newVehicle);

            // Update the vehicles state with the new vehicle
            setVehicles([...vehicles, { id: newVehicleRef.id, ...newVehicle }]);

            // Close the modal
            closeModal();
        } catch (error) {
            console.error('Error adding vehicle:', error);
            // Handle error, if any
        }
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={openModal}>Add Vehicle</button>

            {showModal && (
                <div className="modal">
                    <form onSubmit={addVehicle}>
                        <label htmlFor="driverName">Driver Name:</label>
                        <input type="text" id="driverName" />

                        <label htmlFor="truckNameplate">Truck Nameplate Number:</label>
                        <input type="text" id="truckNameplate" />

                        <label htmlFor="truckType">Truck Type:</label>
                        <select id="truckType">
                            <option value="heavy">Truck</option>
                            <option value="medium">Van</option>
                            <option value="light">Pickup</option>
                        </select>

                        <label htmlFor="expectedHours">Expected Hours of Travel:</label>
                        <input type="number" id="expectedHours" />

                        <button type="submit">Add</button>
                        <button onClick={closeModal}>Close</button>
                    </form>
                </div>
            )}
{vehicles.map((vehicle) => (
    <Vehicle key={vehicle.id} {...vehicle} />
))}

        </div>
    );
};

export default Dashboard;
