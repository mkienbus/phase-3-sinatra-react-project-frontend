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
    .then((r) => setCountries(countries.concat(r)));
}

function deleteCountry(id){
 fetch(`http://localhost:9292/countries/${id}`, {
   method: "DELETE"
 })
  .then((r) => r.json())
  .then((deletedCountry) => setCountries(countries.filter(country => country.id !== deletedCountry.id)) )
}

  return (
    <div className="App">
      <h1>Welcome to Geotrack, the app which helps you keep track of the countries you've visited!</h1>
      <Countries countries = {countries} deleteCountry = {deleteCountry}/>
      <CountryForm newCountry = {newCountry}/>
      <ContinentIdTable />
    </div>
  );
}

export default App;