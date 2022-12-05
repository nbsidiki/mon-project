import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhGGOD2ZULd4NoeA8W24Ww7ZiGg0dpRu0",
  authDomain: "mon-project-c058b.firebaseapp.com",
  projectId: "mon-project-c058b",
  storageBucket: "mon-project-c058b.appspot.com",
  messagingSenderId: "670512224498",
  appId: "1:670512224498:web:a4c19d6df4b4cbc43d586b",
  measurementId: "G-H1V6G0T0VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [resultat, setResultat] = useState(0);


  const handleChange = (event: { target: { value: any; }; }) => {
    setValue1(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleChange2 = (event: { target: { value: any; }; }) => {
    setValue2(event.target.value);

    console.log('value is:', event.target.value);
  };
  const valid = (event: any) =>{
    const value = value1+ value2;
    if (value1 === value2) {
    }
    setResultat(value)
    if(value > 0){

    }
    
  }
  return (
    <div className="App">
      <p>FriendShipCalculator</p>
      <input type="number" className="first" placeholder="Entrer votre age" value={value1} onChange={handleChange}/>
      <input type="number" className="second" placeholder="Entrer votre age" value={value2} onChange={handleChange2} />
      <button type="submit">validateee</button>
    </div>
  );
}

export default App;
