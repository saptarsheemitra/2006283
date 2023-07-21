const express = require('express');
const axios = require('axios');

const app = express();

async function fetchNumbers(url) {
  try {
    const response = await axios.get(url, { timeout: 500 });
    return response.data.numbers;
  } catch (error) {
    console.error(`Error fetching numbers from URL: ${url}`, error.message);
    return [];
  }
}

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!Array.isArray(urls)) {
    return res.status(400);
  }

  try {
    const uniqueNumbers = new Set();

    const fetchPromises = urls.map(url => fetchNumbers(url));
    const responses = await Promise.all(fetchPromises);

    responses.forEach(numbers => numbers.forEach(number => uniqueNumbers.add(number)));

    const mergedNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);

    res.json({ numbers: mergedNumbers });
  } catch (error) {
    console.error('Error processing:', error.message);
    res.status(500);
  }
});

app.listen(8008, () => {
  console.log(`Server running on port ${8008}`);
});
