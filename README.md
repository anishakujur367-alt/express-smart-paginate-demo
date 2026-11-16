# Express Smart Paginate Demo

A simple Express.js backend demonstrating how to use the published [`express-smart-paginate`](https://www.npmjs.com/package/express-smart-paginate) npm package.

This project shows how developers can integrate pagination, sorting, filtering, input validation, and response formatting into an Express API.

## Features

- Offset pagination
- Cursor pagination
- Ascending and descending sorting
- Category-based filtering
- Filter validation
- Pagination input validation
- Sorting field validation
- Standard success and error responses

## Tech Stack

- Node.js
- Express.js
- express-smart-paginate
- JavaScript

## Installation

Clone the repository:

```bash
git clone https://github.com/anishakujur367-alt/express-smart-paginate-demo.git
```

Navigate into the project:

```bash
cd express-smart-paginate-demo
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The server runs at:

```text
http://localhost:3000
```

## API Endpoints

### 1. Welcome Route

```http
GET /
```

### 2. Offset Pagination

```http
GET /products?page=1&limit=5
```

Fetches products using page and limit.

### 3. Cursor Pagination

```http
GET /products/cursor?limit=5
```

Fetch the next page using the returned cursor:

```http
GET /products/cursor?limit=5&cursor=NQ
```

### 4. Sorting

Ascending price:

```http
GET /products/sorted?sortBy=price&sortOrder=asc
```

Descending price:

```http
GET /products/sorted?sortBy=price&sortOrder=desc
```

Allowed sorting fields:

- id
- name
- category
- price

### 5. Filtering

Electronics:

```http
GET /products/filtered?category=Electronics
```

Accessories:

```http
GET /products/filtered?category=Accessories
```

Stationery:

```http
GET /products/filtered?category=Stationery
```

Furniture:

```http
GET /products/filtered?category=Furniture
```

## Error Handling

The API returns formatted JSON errors for invalid inputs.

Examples:

- Invalid page number
- Limit exceeding the maximum
- Unsupported sorting field
- Invalid product category

## Project Structure

```text
express-smart-paginate-demo/
├── src/
│   ├── app.js
│   ├── data/
│   │   └── products.js
│   └── routes/
│       └── productRoutes.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Note

This is a demonstration project using sample in-memory product data. It is intended to show how to use the published `express-smart-paginate` package in an Express.js application.

## NPM Package

https://www.npmjs.com/package/express-smart-paginate

## Demo Repository

https://github.com/anishakujur367-alt/express-smart-paginate-demo