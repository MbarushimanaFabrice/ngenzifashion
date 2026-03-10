# Ngenzi Fashion

Official Ngenzi Fashion e-commerce platform - A multi-brand eCommerce platform for fashion products.

## Tech Stack

### Frontend
- **React** 19.1.0 - UI Library
- **Vite** 7.0.0 - Build Tool & Dev Server
- **React Router DOM** 7.6.3 - Routing
- **Tailwind CSS** 4.1.11 - Styling
- **Axios** 1.10.0 - HTTP Client
- **React Toastify** 11.0.5 - Notifications
- **React Slideshow Image** 4.3.2 - Image Carousel

### Backend
- **Node.js** with **Express** 5.1.0 - Web Framework
- **TypeScript** 5.8.3 - Type Safety
- **Sequelize** 6.37.7 - ORM
- **MySQL2** 3.14.1 - Database Driver
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment Variables
- **Nodemon** - Development Auto-Reload

### Database
- **MySQL** - Relational Database

## Project Structure

```
ngenzifashion/
├── backend/
│   ├── src/
│   │   ├── app.ts                    # Main application entry point
│   │   ├── config/
│   │   │   ├── database.ts           # Database connection configuration
│   │   │   └── tables.sql            # Database schema
│   │   ├── controllers/              # Request handlers
│   │   │   ├── userController.ts
│   │   │   ├── productController.ts
│   │   │   ├── orderController.ts
│   │   │   └── ...
│   │   ├── models/                   # Sequelize ORM models
│   │   │   ├── User.ts
│   │   │   ├── Products.ts
│   │   │   ├── Orders.ts
│   │   │   └── index.ts
│   │   ├── routes/                   # API route definitions
│   │   │   ├── UserRoute.ts
│   │   │   ├── ProductsRoute.ts
│   │   │   └── index.ts
│   │   └── middlewares/              # Custom middleware
│   │       └── authMiddleware.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── nodemon.json
├── frontend/
│   ├── src/
│   │   ├── main.jsx                  # Application entry point
│   │   ├── App.jsx                   # Root component
│   │   ├── components/               # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductItem.jsx
│   │   │   └── ...
│   │   ├── pages/                    # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── ...
│   │   ├── content/                  # Context API
│   │   │   └── ShopContext.jsx
│   │   └── assets/                   # Static assets
│   ├── package.json
│   └── vite.config.js
└── postman data/                     # API testing collections
```

## Architecture & Approaches

### Backend Architecture

**MVC Pattern (Model-View-Controller)**
- **Models**: Sequelize ORM models define database schema and relationships
- **Controllers**: Handle business logic and request processing
- **Routes**: Define API endpoints and map them to controllers

**ORM (Object-Relational Mapping)**
- **Sequelize ORM** is used for database operations
- Provides type-safe database queries with TypeScript
- Manages relationships between entities (Users, Products, Orders, etc.)
- Handles migrations and schema synchronization
- Benefits:
  - No raw SQL queries needed
  - Automatic data validation
  - Built-in query builders
  - Database-agnostic (can switch between MySQL, PostgreSQL, etc.)

**RESTful API Design**
- Follows REST principles for API endpoints
- Uses HTTP methods (GET, POST, PUT, DELETE) appropriately
- Consistent URL structure and naming conventions
- JSON request/response format

**Middleware Architecture**
- Authentication middleware for protected routes
- CORS middleware for cross-origin requests
- Error handling middleware

### Frontend Architecture

**Component-Based Architecture**
- Reusable React components
- Separation of concerns (components, pages, context)
- Props-based data flow

**State Management**
- React Context API for global state (ShopContext)
- Local component state with useState Hook
- Manages cart, user authentication, and product data

**Client-Side Routing**
- React Router DOM for navigation
- Dynamic routes for product details
- Protected routes for authenticated users

**API Communication**
- Axios for HTTP requests to backend
- Centralized API calls
- Error handling and loading states

**Styling Approach**
- Tailwind CSS utility-first framework
- Responsive design
- Component-specific styling

### Database Design

**Relational Database Model**
- Normalized database schema
- Foreign key relationships
- Indexes for optimized queries

**Key Entities & Relationships**
- Users (1:N) → Shops
- Shops (1:N) → Products
- Products (N:N) → Categories
- Products (1:N) → Product Variants
- Products (1:N) → Product Images
- Customers (1:N) → Orders
- Orders (1:N) → Order Items
- Orders (1:1) → Payments

## Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MySQL** (v8 or higher)
- **Git**

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ngenzifashion.git
cd ngenzifashion
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=ngenzifashion
JWT_SECRET=your_secret_key
```

### 3. Setup Database

Run the SQL script to create tables:

```bash
mysql -u your_mysql_user -p ngenzifashion < src/config/tables.sql
```

### 4. Setup Frontend

```bash
cd ../frontend
npm install
```

## Running the Application

### Run Backend (Development Mode)

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:5000`

### Run Frontend (Development Mode)

Open a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

### Run Both Concurrently

From the root directory, you can run both servers:

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

## Production Build

### Backend Production Build

```bash
cd backend
npm run build
npm start
```

### Frontend Production Build

```bash
cd frontend
npm run build
npm run preview
```

## Database Structure

This database structure provides all the necessary tables for the multi-brand eCommerce platform, including:

- User management with different roles (admin, shop_owner, customer)
- Shop/brand management
- Product catalog with variants and images
- Category management
- Order processing and order items
- Payment tracking
- Customer management (including guest checkout)
- Customer addresses for shipping and billing
- Discounts and promotions

For detailed database schema, see: `backend/src/config/tables.sql`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary and confidential.

---

Made with love by Ngenzi Fashion Team
