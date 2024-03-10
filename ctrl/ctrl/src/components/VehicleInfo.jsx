// import React, { Component } from 'react';

// class MapComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       speed: 0,
//       estimatedTime: 0
//     };
//   }

//   componentDidMount() {
//     this.initMap();
//     this.updateLocationInterval = null;
//   }

//   componentWillUnmount() {
//     // Clear the interval when the component is unmounted
//     clearInterval(this.updateLocationInterval);
//   }

//   initMap() {
//     const platform = new window.H.service.Platform({
//       apikey: 'AjlFl_6t20Av4z86S6TC_Zxo5efHNGdQm-EEJb-thX8'
//     });

//     const defaultLayers = platform.createDefaultLayers();

//     // Initialize map container
//     const mapContainer = document.getElementById('mapContainer');

//     // Get device's current position
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         const { latitude, longitude } = position.coords;

//         // Initialize map with current position as center
//         this.map = new window.H.Map(
//           mapContainer,
//           defaultLayers.vector.normal.map,
//           {
//             zoom: 10,
//             center: { lat: latitude, lng: longitude } // Set the center to the current position
//           }
//         );

//         // Create a marker for Roorkee
//         this.roorkeeMarker = new window.H.map.Marker({ lat: 29.8661, lng: 77.8964 });
//         this.map.addObject(this.roorkeeMarker);

//         // Create a marker for Haridwar
//         const haridwarMarker = new window.H.map.Marker({ lat: 29.9457, lng: 78.1642 });
//         this.map.addObject(haridwarMarker);

//         // Calculate and display the route from Roorkee to Haridwar
//         this.calculateRoute(platform, this.map, { latitude, longitude });

//         // Update the marker on Roorkee to the actual location of the device after every 30 seconds
//         this.updateLocationInterval = setInterval(() => {
//           navigator.geolocation.getCurrentPosition(updatedPosition => {
//             const { latitude: updatedLatitude, longitude: updatedLongitude } = updatedPosition.coords;
            
//             // Calculate speed
//             const speed = this.calculateSpeed(latitude, longitude, updatedLatitude, updatedLongitude, position.timestamp, updatedPosition.timestamp);
//             this.setState({ speed });

//             // Update the marker position
//             this.roorkeeMarker.setGeometry({ lat: updatedLatitude, lng: updatedLongitude });

//             // Calculate estimated time
//             const distance = this.calculateDistance(latitude, longitude, 29.9457, 78.1642);
//             const estimatedTime = distance / speed;
//             this.setState({ estimatedTime });
//           }, error => {
//             console.error('Error getting updated device location:', error);
//           });
//         }, 30000);
//       }, error => {
//         console.error('Error getting device location:', error);
//         // Initialize map without user's location
//         this.map = new window.H.Map(
//           mapContainer,
//           defaultLayers.vector.normal.map,
//           {
//             zoom: 10,
//             center: { lat: 52.5, lng: 13.4 } // Default center if user's location is not available
//           }
//         );

//         // Create a marker for Roorkee
//         this.roorkeeMarker = new window.H.map.Marker({ lat: 29.8661, lng: 77.8964 });
//         this.map.addObject(this.roorkeeMarker);

//         // Create a marker for Haridwar
//         const haridwarMarker = new window.H.map.Marker({ lat: 29.9457, lng: 78.1642 });
//         this.map.addObject(haridwarMarker);

//         // Calculate and display the route from Roorkee to Haridwar with default center
//         this.calculateRoute(platform, this.map, { latitude: 52.5, longitude: 13.4 });
//       });
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//       // Initialize map without user's location
//       this.map = new window.H.Map(
//         mapContainer,
//         defaultLayers.vector.normal.map,
//         {
//           zoom: 10,
//           center: { lat: 52.5, lng: 13.4 } // Default center if geolocation is not supported
//         }
//       );

//       // Create a marker for Roorkee
//       this.roorkeeMarker = new window.H.map.Marker({ lat: 29.8661, lng: 77.8964 });
//       this.map.addObject(this.roorkeeMarker);

//       // Create a marker for Haridwar
//       const haridwarMarker = new window.H.map.Marker({ lat: 29.9457, lng: 78.1642 });
//       this.map.addObject(haridwarMarker);

//       // Calculate and display the route from Roorkee to Haridwar with default center
//       this.calculateRoute(platform, this.map, { latitude: 52.5, longitude: 13.4 });
//     }
//   }

//   calculateRoute(platform, map, currentPosition) {
//     // Initialize a marker for Haridwar
//     const haridwarMarker = new window.H.map.Marker({ lat: 29.9457, lng: 78.1642 });
    
//     // Add the Haridwar marker to the map
//     map.addObject(haridwarMarker);

//     const router = platform.getRoutingService();

//     // Route from Roorkee to Haridwar
//     const routeRequestParams = {
//       mode: 'fastest;car',
//       representation: 'display',
//       waypoint0: 'geo!29.8661,77.8964', // Roorkee
//       waypoint1: 'geo!29.9457,78.1642', // Haridwar
//       routeattributes: 'waypoints,summary,shape,legs',
//       maneuverattributes: 'direction,action'
//     };

//     // Calculate route from Roorkee to Haridwar
//     router.calculateRoute(routeRequestParams, data => {
//       if (data.routes.length > 0) {
//         const route = data.routes[0];
//         const lineString = new window.H.geo.LineString();

//         route.sections.forEach(section => {
//           const points = window.H.geo.LineString.decode(section.polyline);
//           points.forEach(point => {
//             lineString.pushLatLngAlt(point.lat, point.lng);
//           });
//         });

//         const routeLine = new window.H.map.Polyline(lineString, {
//           style: { strokeColor: 'blue', lineWidth: 3 }
//         });

//         map.addObject(routeLine);

//         // Add marker on Haridwar
//         const haridwarMarker = new window.H.map.Marker({ lat: 29.9457, lng: 78.1642 });
//         map.addObject(haridwarMarker);
//       } else {
//         console.error('No route found');
//       }
//     }, error => {
//       console.error('Error calculating route:', error);
//     });
//   }

//   calculateSpeed(lat1, lon1, lat2, lon2, time1, time2) {
//     const distance = this.calculateDistance(lat1, lon1, lat2, lon2);
//     const timeDifference = (time2 - time1) / 1000; // Convert to seconds
//     return distance / timeDifference;
//   }

//   calculateDistance(lat1, lon1, lat2, lon2) {
//     const R = 6371e3; // metres
//     const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
//     const φ2 = lat2 * Math.PI / 180;
//     const Δφ = (lat2 - lat1) * Math.PI / 180;
//     const Δλ = (lon2 - lon1) * Math.PI / 180;

//     const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//               Math.cos(φ1) * Math.cos(φ2) *
//               Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     const d = R * c; // in metres
//     return d;
//   }

//   render() {
//     return (
//       <div id="mapContainer" style={{ width: '100%', height: '600px' }}>
//         <p>Vehicle Speed: {this.state.speed.toFixed(2)} m/s</p>
//         <p>Estimated Time to Cover Distance: {this.state.estimatedTime.toFixed(2)} seconds</p>
//       </div>
//     );
//   }
// }

// class VehicleInfo extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Vehicle Information</h1>
//         <div>
//           <p>Initial Location: Roorkee</p>
//           <p>Final Location: Haridwar</p>
//         </div>
//         <MapComponent />
//       </div>
//     );
//   }
// }

// export default VehicleInfo;
// Assuming you want to fetch the user status when the component mounts
import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/video_feed');
        if (!response.ok) {
          throw new Error('Failed to fetch status');
        }
        const data = await response.json();
        setStatus(data.status);
        setColor(data.color);
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };

    fetchStatus();

    // Fetch status every 5 seconds
    const interval = setInterval(fetchStatus, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>User Status</h1>
      <p>Status: {status}</p>
      <p>Color: {color}</p>
    </div>
  );
}

export default App;

