import React from 'react';
import Grid from '@material-ui/core/Grid';

import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas,
} from 'react-vis';

function StandupTimeSeries() {
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
  return(
    <div>
      <h2>
        Stand-up Time per Day
      </h2>
      <XYPlot height={300} width={300}>
        <LineSeries data={data} />
      </XYPlot>
    </div>
  );
}

export default StandupTimeSeries;

// export default class Example extends React.Component {
//   state = {
//     useCanvas: false
//   };
//   render() {
//     const {useCanvas} = this.state;
//     const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
//     const Line = useCanvas ? LineSeriesCanvas : LineSeries;
//
//     return (
//       <div>
//         <XYPlot width={300} height={300}>
//           <HorizontalGridLines />
//           <VerticalGridLines />
//           <XAxis />
//           <YAxis />
//           <ChartLabel
//             text="X Axis"
//             className="alt-x-label"
//             includeMargin={false}
//             xPercent={0.025}
//             yPercent={1.01}
//           />
//
//           <ChartLabel
//             text="Y Axis"
//             className="alt-y-label"
//             includeMargin={false}
//             xPercent={0.06}
//             yPercent={0.06}
//             style={{
//               transform: 'rotate(-90)',
//               textAnchor: 'end'
//             }}
//           />
//           <Line
//             className="first-series"
//             data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
//           />
//           <Line className="second-series" data={null} />
//         </XYPlot>
//       </div>
//     );
//   }
// }