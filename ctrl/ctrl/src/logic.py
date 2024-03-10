import numpy as np
from geopy.distance import geodesic

def interpolate_gps_data(start_time, end_time, start_gps, end_gps, num_points):
    """
    Generate interpolated GPS data points with timestamps.
    """
    interpolated_timestamps = np.linspace(start_time, end_time, num_points)
    interpolated_latitudes = np.linspace(start_gps['latitude'], end_gps['latitude'], num_points)
    interpolated_longitudes = np.linspace(start_gps['longitude'], end_gps['longitude'], num_points)
   
    return [{'timestamp': ts, 'latitude': lat, 'longitude': lon} for ts, lat, lon in zip(interpolated_timestamps, interpolated_latitudes, interpolated_longitudes)]

def calculate_speed(gps_data):
    """
    Calculates speed using distance and actual time differences between consecutive GPS points.
    Now takes timestamp from each GPS data point.
    """
    speeds = []
    for i in range(1, len(gps_data)):
        lat1, lon1, ts1 = gps_data[i-1]['latitude'], gps_data[i-1]['longitude'], gps_data[i-1]['timestamp']
        lat2, lon2, ts2 = gps_data[i]['latitude'], gps_data[i]['longitude'], gps_data[i]['timestamp']
        distance = geodesic((lat1, lon1), (lat2, lon2)).meters
        time_diff = ts2 - ts1  # Calculate the time difference based on provided timestamps
       
        # Ensure time_diff is not zero to avoid division by zero error
        if time_diff > 0:
            speed_mps = distance / time_diff
            speeds.append(speed_mps * 3.6)  # Convert from meters per second to kilometers per hour
    return speeds

def detect_erratic_speed(speeds, threshold=10):
    """
    Detects significant changes in speed between consecutive measurements.
    """
    for i in range(1, len(speeds)):
        if abs((speeds[i] - speeds[i-1] > threshold) and (speeds[i]>50)):
            return True
    return False

def detect_unscheduled_stops(speeds, stop_threshold=5, duration_threshold=5):
    speed_prev = calculate_speed(gps_data)
    """
    Identifies unscheduled stops by analyzing periods of low speed.
    """
    low_speed_duration = 0
    for speed in speeds:
        if speed < stop_threshold:
            low_speed_duration += 1
        else:
            if low_speed_duration >= duration_threshold:
                return True
            low_speed_duration = 0
    return low_speed_duration >= duration_threshold

def analyze_driving_pattern(speeds):
    """
    Combines detection of erratic speed changes and unscheduled stops to analyze driving patterns.
    """
    if detect_erratic_speed(speeds) or detect_unscheduled_stops(speeds):
        return True
    return False

# Example usage, with provided start and end timestamps for each GPS data point:
gps_data = [
    {'timestamp': 0, 'latitude': 40.7128, 'longitude': -74.0060},
    {'timestamp': 300000, 'latitude': 37.7749, 'longitude': -122.4194},
    {'timestamp': 600000, 'latitude': 34.0522, 'longitude': -118.2437},
]

speeds = calculate_speed(gps_data)
print("Speeds (km/h):", speeds)

erratic_driving_detected = analyze_driving_pattern(speeds)
print("Erratic Driving Pattern Detected:", erratic_driving_detected)