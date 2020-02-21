async function fetchData(route, dataSet, errorSet) {
  const response = await fetch(route);
  response
    .json()
    .then(response => dataSet(response))
    .catch(error => errorSet(error));
}

export default fetchData;