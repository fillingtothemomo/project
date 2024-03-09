import './style.css';

import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

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
initializeApp(firebaseConfig);

function LoginForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const db = getFirestore();
    const userRef = doc(db, 'users', 'user');
    const userDoc = await getDoc(userRef);
  
    if (userDoc.exists()) {
      const userData = userDoc.data();
      if (userData.DriverID=== userId && userData.Password === password) {
        // Authentication successful
        console.log(userData.DriverID, userData.Password);
        console.log('Authentication successful');
        setError('');
        // Proceed with further actions such as redirecting the user
      } else {
        // Invalid user ID or password
        console.log(userData.DriverID, userData.Password);
        console.log(userId, password);

        console.log('Invalid user ID or password');
        setError('Invalid user ID or password');
      }
    } else {
      // User document not found
      console.log('User document not found');
      setError('User document not found');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={handleUserIdChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
