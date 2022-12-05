import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


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
      <button type="submit">validate</button>
    </div>
  );
}

export default App;
