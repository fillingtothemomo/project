import './App.css'
import LoginForm from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import VehicleInfo from './components/VehicleInfo';
import Welcome from './components/Welcome';

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
function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicle/:vehicleId" element={<VehicleInfo firebaseConfig={firebaseConfig} />} />

      </Routes>
    </Router>
  );
}

export default App;
