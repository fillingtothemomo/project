import React, { Component } from 'react';

class MapComponent extends Component {
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const platform = new window.H.service.Platform({
      apikey: 'AjlFl_6t20Av4z86S6TC_Zxo5efHNGdQm-EEJb-thX8'
    });

    const defaultLayers = platform.createDefaultLayers();

    // Initialize map container
    const mapContainer = document.getElementById('mapContainer');

    // Get device's current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        // Initialize map with current position as center
        const map = new window.H.Map(
          mapContainer,
          defaultLayers.vector.normal.map,
          {
            zoom: 10,
            center: { lat: latitude, lng: longitude }
          }
        );

        const marker = new window.H.map.Marker({ lat: latitude, lng: longitude });

        // Add marker to the map
        map.addObject(marker);

        // Calculate and display the route from Roorkee to Haridwar
        this.calculateRoute(platform, map, { latitude, longitude });
      }, error => {
        console.error('Error getting device location:', error);
        // Initialize map without user's location
        const map = new window.H.Map(
          mapContainer,
          defaultLayers.vector.normal.map,
          {
            zoom: 10,
            center: { lat: 52.5, lng: 13.4 } // Default center if user's location is not available
          }
        );
        // Calculate and display the route from Roorkee to Haridwar with default center
        this.calculateRoute(platform, map, { latitude: 52.5, longitude: 13.4 });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Initialize map without user's location
      const map = new window.H.Map(
        mapContainer,
        defaultLayers.vector.normal.map,
        {
          zoom: 10,
          center: { lat: 52.5, lng: 13.4 } // Default center if geolocation is not supported
        }
      );
      // Calculate and display the route from Roorkee to Haridwar with default center
      this.calculateRoute(platform, map, { latitude: 52.5, longitude: 13.4 });
    }
  }

  calculateRoute(platform, map, currentPosition) {
    const router = platform.getRoutingService();
  
    // Route from Roorkee to Haridwar
    const routeRequestParams = {
      mode: 'fastest;car',
      representation: 'display',
      waypoint0: 'geo!29.8661,77.8964', // Roorkee
      waypoint1: 'geo!29.9457,78.1642', // Haridwar
      routeattributes: 'waypoints,summary,shape,legs',
      maneuverattributes: 'direction,action'
    };
  
    // Calculate route from Roorkee to Haridwar
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
      } else {
        console.error('No route found');
      }
    }, error => {
      console.error('Error calculating route:', error);
    });
  }
  

  render() {
    return (
      <div id="mapContainer" style={{ width: '100%', height: '600px' }}></div>
    );
  }
}

class VehicleInfo extends Component {
  render() {
    return (
      <div>
        <h1>Vehicle Information</h1>
        <MapComponent />
      </div>
    );
  }
}

export default VehicleInfo;
