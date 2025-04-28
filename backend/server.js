const express = require('express');
const cors = require('cors');
require('dotenv').config();
const paymentRoutes = require('./routes/payment');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
