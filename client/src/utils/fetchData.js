async function fetchData(dataSet, errorSet) {
  const response = await fetch("/standup_times");
  response
    .json()
    .then(response => dataSet(response))
    .catch(error => errorSet(error));
}

export default fetchData;