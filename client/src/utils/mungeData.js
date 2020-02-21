function getAvgTime(data) {
  if (data.length === 0) {
    return []
  }

  return [
    {x: 'Time', y: data[0]['time_avg']['minutes']},
  ]
}

function getAvgAttendees(data) {
  if (data.length === 0) {
    return []
  }

  return [
    {x: 'Attendees', y: data[0]['attend_avg']},
  ]
}

function compareIds(a, b) {
  // Use toUpperCase() to ignore character casing
  const idA = a.x;
  const idB = b.x;

  let comparison = 0;
  if (idA > idB) {
    comparison = 1;
  } else if (idA < idB) {
    comparison = -1;
  }
  return comparison;
}

function getAttendeePoint(dataPoint) {
  return {x: dataPoint['id'], y: dataPoint['num_attendees']}
}

function strToSeconds(timeStr) {
  const a = timeStr.split(':');
  return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
}

function getTimePoint(dataPoint) {
  const timeDiff = strToSeconds(dataPoint['end_time']) - strToSeconds(dataPoint['start_time']);
  return {x: dataPoint['id'], y: (timeDiff / 60).toFixed(2)}
}

function getNormTimePoint(dataPoint) {
  const timeDiff = strToSeconds(dataPoint['end_time']) - strToSeconds(dataPoint['start_time']);
  const numAttendees = parseInt(dataPoint['num_attendees']);
  return {x: dataPoint['id'], y: (timeDiff / 60 / numAttendees).toFixed(2)}
}

function getDataSeries(data, dataPointFun) {
  if (data.length === 0) {
    return []
  }

  return data.map(dataPointFun).sort(compareIds)
}


export {
  getAvgTime,
  getAvgAttendees,
  getAttendeePoint,
  getTimePoint,
  getNormTimePoint,
  getDataSeries,
}