import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import StandupTimeSeries from "./StandupTimeSeries";
import StandupAttendeesSeries from "./StandupAttendeesSeries";
import StandupAvgBar from "./StandupAvgBarChart";
import StandupTimeNormSeries from "./StandupTimeNormSeries";


function ChartContainer(props) {
    return(
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StandupTimeSeries data={props.dataFull}/>
          </Grid>
          <Grid item xs={6}>
            <StandupAttendeesSeries data={props.dataFull}/>
          </Grid>
          <Grid item xs={6}>
            <StandupAvgBar data={props.dataAvg} fetched={props.fetched}/>
          </Grid>
          <Grid item xs={6}>
            <StandupTimeNormSeries data={props.dataFull}/>
          </Grid>
        </Grid>
      </Container>
    );
}

export default ChartContainer;