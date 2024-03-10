import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, addDoc, getDoc, collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import Vehicle from './Vehicle';
const StatusDisplay = () => {
  const [status, setStatus] = useState('');
  const [sleepDuration, setSleepDuration] = useState(0); // Track sleeping duration
  const [showAlert, setShowAlert] = useState(false); // State to control alert display

  useEffect(() => {
    let timer; // Timer for sleeping duration

    const fetchStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/status');
        if (!response.ok) {
          throw new Error('Failed to fetch status');
        }
        const data = await response.json();
        setStatus(data.status);

        // If status is 'Sleeping', start or reset the timer
        if (data.status === 'Sleeping !!!' || data.status === 'Drowsy !') {
          timer = setInterval(() => {
            setSleepDuration(prevDuration => prevDuration + 1);
            // Check if sleeping duration is greater than or equal to 10 seconds
            if (prevDuration + 1 >= 10) {
              setShowAlert(true); // Show alert if sleepy for more than 10 seconds

            }
          }, 1000);
        } else {
          // If status changes, reset the sleep duration and hide alert
          setSleepDuration(0);
          setShowAlert(false);
          clearInterval(timer);
        }
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };

    const interval = setInterval(fetchStatus, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timer); // Cleanup timer on unmount or update
    };
  }, [sleepDuration]); // Add sleepDuration as a dependency

  return (
    <div>
      <h3>Driver Status: {status}</h3>
      {/* Display red alert if showAlert is true */}
      {showAlert && <div style={{ color: 'red' }}>Driver is sleepy for too long!</div>}
    </div>
  );
};

const MapComponent = () => {
  const [speed, setSpeed] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(0);

  useEffect(() => {
    const platform = new window.H.service.Platform({
      apikey: 'AjlFl_6t20Av4z86S6TC_Zxo5efHNGdQm-EEJb-thX8'
    });

    const defaultLayers = platform.createDefaultLayers();
    const mapContainer = document.getElementById('mapContainer');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const map = new window.H.Map(
          mapContainer,
          defaultLayers.vector.normal.map,
          {
            zoom: 10,
            center: { lat: latitude, lng: longitude }
          }
        );

        const roorkeeMarker = new window.H.map.Marker({ lat: 29.8661, lng: 77.8964 });
        map.addObject(roorkeeMarker);

        const haridwarMarker = new window.H.map.Marker({ lat: 29.9457, lng: 78.1642 });
        map.addObject(haridwarMarker);

        calculateRoute(platform, map, { latitude, longitude });

        const updateLocationInterval = setInterval(() => {
          navigator.geolocation.getCurrentPosition(updatedPosition => {
            const { latitude: updatedLatitude, longitude: updatedLongitude } = updatedPosition.coords;
            const speed = calculateSpeed(latitude, longitude, updatedLatitude, updatedLongitude, position.timestamp, updatedPosition.timestamp);
            setSpeed(speed);
            roorkeeMarker.setGeometry({ lat: updatedLatitude, lng: updatedLongitude });
            const distance = calculateDistance(latitude, longitude, 29.9457, 78.1642);
            const estimatedTime = distance / speed;
            setEstimatedTime(estimatedTime);
          }, error => {
            console.error('Error getting updated device location:', error);
          });
        }, 30000);
        
        return () => clearInterval(updateLocationInterval);
      }, error => {
        console.error('Error getting device location:', error);
        const map = new window.H.Map(
          mapContainer,
          defaultLayers.vector.normal.map,
          {
            zoom: 10,
            center: { lat: 52.5, lng: 13.4 }
          }
        );

        const roorkeeMarker = new window.H.map.Marker({ lat: 29.8661, lng: 77.8964 });
        map.addObject(roorkeeMarker);

        const haridwarMarker = new window.H.map.Marker({ lat: 29.9457, lng: 78.1642 });
        map.addObject(haridwarMarker);

        calculateRoute(platform, map, { latitude: 52.5, longitude: 13.4 });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
      const map = new window.H.Map(
        mapContainer,
        defaultLayers.vector.normal.map,
        {
          zoom: 10,
          center: { lat: 52.5, lng: 13.4 }
        }
      );

      const roorkeeMarker = new window.H.map.Marker({ lat: 29.8661, lng: 77.8964 });
      map.addObject(roorkeeMarker);

      const haridwarMarker = new window.H.map.Marker({ lat: 29.9457, lng: 78.1642 });
      map.addObject(haridwarMarker);

      calculateRoute(platform, map, { latitude: 52.5, longitude: 13.4 });
    }
  }, []);

  const calculateRoute = (platform, map, currentPosition) => {
    const haridwarMarker = new window.H.map.Marker({ lat: 29.9457, lng: 78.1642 });
    map.addObject(haridwarMarker);

    const router = platform.getRoutingService();

    const routeRequestParams = {
      mode: 'fastest;car',
      representation: 'display',
      waypoint0: `geo!${currentPosition.latitude},${currentPosition.longitude}`,
      waypoint1: 'geo!29.9457,78.1642',
      routeattributes: 'waypoints,summary,shape,legs',
      maneuverattributes: 'direction,action'
    };

    router.calculateRoute(routeRequestParams, data => {
      if (data.routes.length > 0) {
        const route = data.routes[0];
        const lineString = new window.H.geo.LineString();

        route.sections.forEach(section => {
          const points = window.H.geo.LineString.decode(section.polyline);
          points.forEach(point => {
            lineString.pushLatLngAlt(point.lat, point.lng);
          });
        });

        const routeLine = new window.H.map.Polyline(lineString, {
          style: { strokeColor: 'blue', lineWidth: 3 }
        });

        map.addObject(routeLine);

        const haridwarMarker = new window.H.map.Marker({ lat: 29.9457, lng: 78.1642 });
        map.addObject(haridwarMarker);
      } else {
        console.error('No route found');
      }
    }, error => {
      console.error('Error calculating route:', error);
    });
  };

  const calculateSpeed = (lat1, lon1, lat2, lon2, time1, time2) => {
    const distance = calculateDistance(lat1, lon1, lat2, lon2);
    const timeDifference = (time2 - time1) / 1000;
    return distance / timeDifference;
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3;
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;
    return d;
  };

  return (
    <div id="mapContainer" style={{ width: '100%', height: '600px' }}>
      <p>Vehicle Speed: {speed.toFixed(2)*3.6} km/h</p>
      <p>Estimated Time to Cover Distance: {estimatedTime.toFixed(2)/3600} hours</p>
    </div>
  );
};

const VehicleInfo = () => {
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
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); // Assuming 'app' is the initialized Firebase app
 
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState(null);
  function estimateFuelUsage(distanceTraveled, mileage) {
    // Convert mileage to fuel efficiency (MPG)
    const fuelEfficiency = 6;

    // Calculate fuel used
    const fuelUsed = 36 / fuelEfficiency;

    return fuelUsed;
}

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const vehicleDocRef = doc(db, 'vehicles', vehicleId);
        const vehicleSnapshot = await getDoc(vehicleDocRef);
        if (vehicleSnapshot.exists()) {
          setVehicle({ id: vehicleSnapshot.id, ...vehicleSnapshot.data() });
        } else {
          console.error('No such vehicle document!');
        }
      } catch (error) {
        console.error('Error fetching vehicle info:', error);
      }
    };

    fetchVehicle();
  }, [db, vehicleId]);
  return (
    <div>
      <h1>Vehicle Information</h1>
      {vehicle ? (
        <div>
          <p>ID: {vehicle.id}</p>
          <p>Driver Name: {vehicle.driverName}</p>
          <p>Driver Number: {vehicle.driverNumber}</p>
          <p>Truck Nameplate Number: {vehicle.truckNameplate}</p>
          <p>Truck Type: {vehicle.truckType}</p>
          <p>Expected Hours of Travel: {vehicle.expectedHours}</p>
        </div>
      ) : (
        <p>Loading vehicle information...</p>
      )}
      <div>
        <p>Initial Location: Roorkee</p>
        <p>Final Location: Haridwar</p>
        <p>Estimated fuel Usage: {estimateFuelUsage()} litres</p>
      </div>
      <StatusDisplay />
      <MapComponent />
    </div>
  );
};

export default VehicleInfo;
