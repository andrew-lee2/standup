import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [hasError, setErrors] = useState(false);
  const [standupData, setStandupData] = useState({});

    async function fetchData() {
        const response = await fetch("/standup_times");
        response
            .json()
            .then(response => setStandupData(response))
            .catch(error => setErrors(error));
    }

    useEffect(() => {
        fetchData();
    }, []);

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
          Learn React
        </a>
          {console.log(standupData)}
      </header>
    </div>
  );
}

export default App;