import React, { useState } from 'react';
import { getDataSeries, getTimePoint } from "../utils/mungeData";

import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  Crosshair,
} from 'react-vis';

function StandupTimeSeries(props) {
  const [value, setValue] = useState(false);
  const totalTimeData = getDataSeries(props.data, getTimePoint);

  return(
    <div>
      <h2>
        Total Duration Over Time
      </h2>
      {/*TODO make dynamic*/}
      <XYPlot height={300} width={500} yDomain={[0, 30]} onMouseLeave={() => setValue(false)}>
        <XAxis title="ID"/>
        <YAxis title="Time (min)"/>
        <LineSeries data={totalTimeData} onNearestX={(datapoint)=>{
          setValue(datapoint);
        }}/>
        {value && <Crosshair values={[value]} />}
      </XYPlot>
    </div>
  );
}

export default StandupTimeSeries;