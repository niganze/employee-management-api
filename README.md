📦 Employee Management API

A secure, scalable RESTful API for managing employee records with authentication, built using Node.js, Express, Prisma, and MySQL.

This project demonstrates backend engineering skills including authentication, database design, validation, error handling, and clean architecture.

🚀 Tech Stack
Node.js (ES Modules)
Express.js
Prisma ORM
MySQL
JWT Authentication
bcrypt (password hashing)
express-validator
dotenv
Helmet & CORS
Morgan (logging)
📁 Project Structure
src/
│
├── config/           # Database configuration
├── controllers/      # Business logic
├── middleware/       # Auth, validation, error handling
├── routes/           # API routes
├── validators/       # Request validation rules
│
├── app.js            # Express app setup
└── server.js         # Entry point
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/niganze/employee-management-api.git
cd employee-management-api
2. Install dependencies
npm install
3. Configure environment variables

Create a .env file in the root directory:

PORT=5000

DATABASE_URL="mysql://root:password@localhost:3306/employee_db"

JWT_SECRET=your_secret_key
JWT_EXPIRES=1d
4. Setup database

Run Prisma migrations:

npx prisma migrate dev --name init
npx prisma generate
5. Start the server
Development mode
npm run dev
Production mode
npm start
🌐 API Base URL
http://localhost:5000/api
🔐 Authentication

This API uses JWT authentication.

To access protected routes, include the token in headers:

Authorization: Bearer YOUR_TOKEN
📌 API Endpoints
🔑 Auth Routes
Register User
POST /api/auth/register

Request Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Login User
POST /api/auth/login

Request Body:

{
  "email": "john@example.com",
  "password": "password123"
}
Get Profile (Protected)
GET /api/auth/profile
👨‍💼 Employee Routes (Protected)
Create Employee
POST /api/employees
Get All Employees
GET /api/employees?page=1&limit=10&search=john
Get Employee by ID
GET /api/employees/:id
Update Employee
PUT /api/employees/:id
Delete Employee
DELETE /api/employees/:id
🧠 Features
✅ User authentication (JWT)
✅ Password hashing (bcrypt)
✅ Full CRUD for employees
✅ Input validation
✅ Pagination & search
✅ Centralized error handling
✅ Protected routes
✅ Clean architecture (MVC style)
✅ Prisma ORM integration
📊 Database Schema
Users
id
name
email
password
createdAt
updatedAt
Employees
id
firstName
lastName
email
phone
position
department
salary
hireDate
createdAt
updatedAt
🧪 Example Response
{
  "success": true,
  "message": "Employee created successfully",
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@company.com"
  }
}
🐳 Docker (Optional)
docker-compose up --build
🧑‍💻 Author

Alain Niganze.
Backend Developer
Software  Engineer
0783943932

📌 Notes for Reviewers

This project was built to demonstrate:

Real-world backend API structure
Secure authentication flow
Scalable architecture
Clean code practices
Database design using ORM
