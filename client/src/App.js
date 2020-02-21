import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import StandupNavBar from "./components/StandupNavBar";
import ChartContainer from "./components/ChartContainer";

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
      <StandupNavBar/>
      <ChartContainer/>
    </div>
  );
}

export default App;