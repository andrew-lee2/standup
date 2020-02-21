import React, { useState } from 'react';
import { getDataSeries, getAttendeePoint } from "../utils/mungeData";

import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  Crosshair,
} from 'react-vis';

function StandupAttendeesSeries(props) {
  const [value, setValue] = useState(false);
  const attendeeData = getDataSeries(props.data, getAttendeePoint);

  return(
    <div>
      <h2>
        Attendees Over Time
      </h2>
      {/*TODO make dynamic*/}
      <XYPlot height={300} width={500} yDomain={[0, 15]} onMouseLeave={() => setValue(false)}>
        <XAxis title="ID"/>
        <YAxis title="Number of Attendees"/>
        <LineSeries data={attendeeData} onNearestX={(datapoint)=>{
          setValue(datapoint);
        }}/>
        {value && <Crosshair values={[value]} />}
      </XYPlot>
    </div>
  );
}

export default StandupAttendeesSeries;