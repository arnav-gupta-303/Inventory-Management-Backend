# Store Inventory Management System API

A professional, production-ready RESTful API for managing store inventory. This backend provides a robust foundation for tracking products, stock levels, and categories with a modular MVC architecture.

---

## 🚀 Tech Stack

- **Runtime Environment**: [Node.js](https://nodejs.org/)
- **Web Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- **Object Modeling (ODM)**: [Mongoose](https://mongoosejs.com/)
- **Environment Management**: [dotenv](https://www.npmjs.com/package/dotenv)
- **Development Tooling**: [nodemon](https://nodemon.io/) (auto-restart)

---

## ✨ Key Features

- **Full CRUD Operations**: Create, Read, Update, and Delete products seamlessly.
- **Advanced Searching**: Fuzzy search functionality to find products by name.
- **Categorization**: Filter products by their specific categories (Electronics, Food, etc.).
- **Data Validation**: Strict schema validation using Mongoose to ensure data integrity (e.g., non-negative stock, positive unit price).
- **Global Error Handling**: Centralized middleware to handle database errors, validation failures, and server crashes.
- **Security**: Environment variable protection for sensitive database credentials.
- **Deployment Ready**: Fully optimized for hosting on platforms like **Render** or Heroku.

---

## 📂 Project Architecture (MVC)

The project follows the **Model-View-Controller** design pattern for clean code separation:

- **`models/`**: Defines the data structure (Product Schema) and interacts with MongoDB.
- **`controllers/`**: Contains the business logic for each API endpoint.
- **`routes/`**: Manages the HTTP request paths and maps them to controllers.
- **`config/`**: Handles external configurations like the database connection.
- **`middleware/`**: Custom logic like the global Error Handler.
- **`server.js`**: The main application entry point.

---

## 🛠️ Installation & Setup

### 1. Prerequisites
- Node.js (v14+)
- A MongoDB Atlas Cluster (Free tier works great!)

### 2. Clone and Install
```bash
# Install dependencies
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

### 4. Run the Application
```bash
# Start in development mode (with nodemon)
npm run dev

# Start in production mode
npm start
```

---

## 📡 API Documentation

### Product Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/products` | Add a new product to inventory |
| **GET** | `/products` | Retrieve all products |
| **GET** | `/products/:id` | Get details of a single product |
| **PUT** | `/products/:id` | Update product information |
| **DELETE**| `/products/:id` | Remove a product from inventory |
| **GET** | `/products/search?name=xyz` | Search products by name |
| **GET** | `/products/category?cat=xyz` | Filter products by category |

### Example Request Body (POST /products)
```json
{
  "productName": "Gaming Chair",
  "productCode": "FUR-001",
  "category": "Furniture",
  "supplierName": "Comfort Solutions",
  "quantityInStock": 25,
  "reorderLevel": 5,
  "unitPrice": 199.99,
  "productType": "Non-Perishable"
}
```

---

## 🌍 Deployment on Render

This project is configured for a one-click deployment on Render:

1. **Connect Repository**: Link your GitHub repo to Render.
2. **Build Command**: `npm install`
3. **Start Command**: `node server.js`
4. **Environment Variables**: Add your `MONGO_URI` in the Render dashboard under the "Environment" tab.

---

## 🛡️ License
Distributed under the MIT License.
