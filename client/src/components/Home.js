import React, {useState, useEffect} from 'react';
import StandupNavBar from "./StandupNavBar";
import ChartContainer from "./ChartContainer";
import fetchData from "../utils/fetchData";

function Home() {
  const [hasError, setErrors] = useState(false);
  const [standupData, setStandupData] = useState({});

  useEffect(() => {
    fetchData(setStandupData, setErrors);
  }, []);

  return (
    <div>
      <StandupNavBar/>
      <ChartContainer/>
    </div>
  );
}

export default Home;