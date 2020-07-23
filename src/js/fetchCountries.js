export default function (value) {
  return fetch(`https://restcountries.eu/rest/v2/name/${value}`).then(res =>
    res.json(),
  );
}
