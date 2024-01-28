const express = require('express');
const app = express();
const cors = require('cors');
const configurations = require('./config');

app.use(cors());

app.use(express.json({ extended: false }));

app.get('/api/health', async (req, res) => {
  res.send(`Node app is running on ${configurations.NODE_ENV} environment`);
});

app.use('/api/public', require('./src/routes/public'));

const PORT = configurations.PORT || 8080;

app.listen(PORT, function () {
  console.log(`Server started on PORT ${PORT}`);
});
