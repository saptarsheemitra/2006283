const axios = require('axios');

// Fetching nos
async function fetchNumbers(url) {
  try {
    const response = await axios.get(url, { timeout: 500 });
    return response.data.numbers;
  } catch (error) {
    console.error(`Error fetching: ${url}`, error.message);
    return [];
  }
}

module.exports = {
  fetchNumbers,
};
