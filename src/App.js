import './App.css';
import { useEffect, useState } from 'react';
import Countries from "./Countries"
import CountryForm from "./CountryForm"

function App() {

const [countries, setCountries] = useState([])

  // place in Country.js
useEffect(() =>{
  fetch("http://localhost:9292/countries")
  .then((r) => r.json())
  .then((data) => setCountries(data));
}, [])

useEffect(() => {
  fetch("http://localhost:9292/continents")
  .then((r) => r.json())
  .then((data) => console.log(data));
}, [])

  return (
    <div className="App">
      <h1>Welcome to Geotrack, the app which helps you keep track of the countries you've visited!</h1>
      <Countries countries = {countries}/>
      <CountryForm />
    </div>
  );
}

export default App;
