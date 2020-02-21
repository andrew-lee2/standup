import React, {useState, useEffect} from 'react';
import StandupNavBar from "./StandupNavBar";
import fetchData from "../utils/fetchData";
import Container from "@material-ui/core/Container";
import RawDataTable from "./RawDataTable";

function DataPage() {
  const [hasError, setErrors] = useState(false);
  const [standupData, setStandupData] = useState([]);

  useEffect(() => {
    fetchData(setStandupData, setErrors);
  }, []);

  return (
    <div>
      <StandupNavBar/>
      <Container maxWidth="lg">
        <RawDataTable data={standupData}/>
      </Container>
    </div>
  );
}

export default DataPage;