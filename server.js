const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001; // Define the port variable here

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
