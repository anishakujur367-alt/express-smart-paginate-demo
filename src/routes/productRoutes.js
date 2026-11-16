
const express = require("express");
const products = require("../data/products");

const {
  paginate,
  paginateOffset,
  paginateCursor,
  sortData,
  validateFilters,
  formatSuccessResponse,
} = require("express-smart-paginate");

const router = express.Router();

const allowedSortFields = ["id", "name", "category", "price"];

const allowedFilters = {
  category: {
    type: "string",
    allowedValues: [
      "Electronics",
      "Accessories",
      "Stationery",
      "Furniture",
    ],
  },
};

// Offset pagination
router.get(
  "/",
  paginate({
    defaultLimit: 5,
    maxLimit: 10,
  }),
  (req, res) => {
    const { page, limit } = req.pagination;

    const result = paginateOffset(
      products,
      page,
      limit,
      products.length
    );

    res.json(
      formatSuccessResponse(
        result.data,
        "Products fetched successfully",
        result.pagination
      )
    );
  }
);

// Cursor pagination
router.get(
  "/cursor",
  paginate({
    mode: "cursor",
    defaultLimit: 5,
    maxLimit: 10,
  }),
  (req, res) => {
    const { limit, cursor } = req.pagination;

    const result = paginateCursor(
      products,
      limit,
      cursor,
      "id"
    );

    res.json(
      formatSuccessResponse(
        result.data,
        "Products fetched successfully",
        result.pagination
      )
    );
  }
);

// Sorting products
router.get(
  "/sorted",
  paginate({
    defaultLimit: 10,
    maxLimit: 10,
    allowedSortFields,
  }),
  (req, res) => {
    const { sortBy, sortDirection } = req.pagination;

    const sortedProducts = sortData(
      products,
      sortBy || "id",
      allowedSortFields,
      sortDirection || "asc"
    );

    res.json(
      formatSuccessResponse(
        sortedProducts,
        "Products sorted successfully"
      )
    );
  }
);

// Filtering products
router.get("/filtered", (req, res, next) => {
  try {
    const filters = {
      category: req.query.category,
    };

    validateFilters(filters, allowedFilters);

    const filteredProducts = products.filter(
      (product) => product.category === filters.category
    );

    res.json(
      formatSuccessResponse(
        filteredProducts,
        "Products filtered successfully"
      )
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
