import fetch from "node-fetch";

const API_ENDPOINT =
  "https://knudmoeller.github.io/berlin_corona_cases/data/target/berlin_corona_traffic_light.latest.json";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
    .then((response) => response.text())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
