import React, {useState, useEffect} from 'react';
import StandupNavBar from "./StandupNavBar";
import ChartContainer from "./ChartContainer";
import fetchData from "../utils/fetchData";

function Home() {
  const [hasError, setErrors] = useState(false);
  const [standupData, setStandupData] = useState([]);
  const [standupDataAvg, setStandupDataAvg] = useState([]);

  useEffect(() => {
    fetchData("/standup_times", setStandupData, setErrors);
    fetchData("/standup_avgs", setStandupDataAvg, setErrors);
    // setHasFetch(true)
  }, []);

  return (
    <div>
      <StandupNavBar/>
      <ChartContainer dataFull={standupData} dataAvg={standupDataAvg}/>
    </div>
  );
}

export default Home;