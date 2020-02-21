import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries,
} from 'react-vis';

import { getAvgTime, getAvgAttendees } from "../utils/mungeData";

function StandupAvgBar(props) {
  const avgTime = getAvgTime(props.data);
  const avgAttendees = getAvgAttendees(props.data);

  const labelData = avgTime.map((d, idx) => ({
    y: Math.max(avgTime[idx].y, avgAttendees[idx].y)
  }));

  return(
    <div>
      <h2>
        Avg Time and Attendees
      </h2>
        <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={avgTime}
          />
          <VerticalBarSeries data={avgAttendees}
          />
          <LabelSeries data={labelData} />
        </XYPlot>
    </div>
  );
}

export default StandupAvgBar;
