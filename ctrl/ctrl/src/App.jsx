import './App.css'
import LoginForm from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import VehicleInfo from './components/VehicleInfo';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicle" element={<VehicleInfo />} />

      </Routes>
    </Router>
  );
}

export default App;
