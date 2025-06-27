const express = require('express');
const app = express();
const PORT = 5000;

// Import Routes
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



