const $http = require("../config/axios");

async function handler(req, res) {
  const query = req?.query["name"];
  try {
    const resp = await $http.get(
      `/movie/?query=${query}?language=en-US&api_key=85e059b183a6a4c680d182b7cf2b1cf9`
    );
    resp?.data ?? resp?.response?.data;

    console.log({ query });
    res.status(200).json(resp);
  } catch (e) {
    console.log(e);
    const err = e.response?.data ?? { message: e.message };
    res.status(500).json(err);
  }
}

module.exports = handler;
