import './App.css';
import { useEffect } from 'react';

function App() {

useEffect(() =>{
  fetch("http://localhost:9292/countries")
  .then((r) => r.json())
  .then((data) => console.log(data));
}, [])

useEffect(() => {
  fetch("http://localhost:9292/continents")
  .then((r) => r.json())
  .then((data) => console.log(data));
}, [])

  return (
    <div className="App">
      <h1>Welcome to Geotrack</h1>
    </div>
  );
}

export default App;
