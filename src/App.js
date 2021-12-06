import './App.css';
import { useEffect, useState } from 'react';
import Countries from "./Countries"
import CountryForm from "./CountryForm"
import ContinentIdTable from "./ContinentIdTable";

function App() {

const [countries, setCountries] = useState([])

useEffect(() =>{
  fetch("http://localhost:9292/countries")
  .then((r) => r.json())
  .then((data) => setCountries(data));
}, [])

function newCountry(countryName, continentId){
  const country = {name: countryName, continent_id: continentId} 
  fetch ("http://localhost:9292/countries", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(country)
  })
    .then((r) => r.json())
    .then((country) => console.log(country));
}

//no need to pull continents from back end
//hard coded into ContinentIdTable component instead
// useEffect(() => {
//   fetch("http://localhost:9292/continents")
//   .then((r) => r.json())
//   .then((data) => console.log(data));
// }, [])


  return (
    <div className="App">
      <h1>Welcome to Geotrack, the app which helps you keep track of the countries you've visited!</h1>
      <Countries countries = {countries}/>
      <CountryForm newCountry = {newCountry}/>
      <ContinentIdTable />
    </div>
  );
}

export default App;