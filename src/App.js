import logo from './logo.svg';
import './App.css';

function App() {

  fetch("http://localhost:9292/countries")
  .then((r) => r.json())
  .then((data) => console.log(data));

  fetch("http://localhost:9292/continents")
  .then((r) => r.json())
  .then((data) => console.log(data));



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Initial commit
        </a>
      </header>
    </div>
  );
}

export default App;
