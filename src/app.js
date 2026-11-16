
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const { formatErrorResponse } = require("express-smart-paginate");

const app = express();

app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
  res.json({
    message: "Express Smart Paginate Demo API is running!",
  });
});

// Product routes
app.use("/products", productRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(400).json(
    formatErrorResponse(
      err.message,
      "Invalid request"
    )
  );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
