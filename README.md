# 📐 MathEngine API

**MathEngine** is a Node.js backend API for performing common mathematical operations. It uses **Express.js**, **Prisma ORM**, and **SQLite**. Built with modular structure (MVC), enterprise-level logging with **Winston**, full input validation, and scalable design.

---

## 🚀 Features

- Modular **ES Module** structure with clean folders
- 5 math operations: Addition, Power, Factorial, Fibonacci, Prime Check
- Full **CRUD** for stored operation history
- **SQLite** with Prisma ORM
- Advanced logging with **Winston**
- Input validation + centralized error handling
- Built-in **Jest** testing support

---

## 📁 Tech Stack

- Node.js (ES Modules)
- Express.js
- Prisma ORM
- SQLite
- Winston (Logging)
- Jest & Supertest (Testing)
- dotenv for environment configs

---

## 🏗️ Project Structure

```math-engine/
├── prisma/                 # Prisma schema and migrations
├── src/
│   ├── config/             # Database and environment setup
│   ├── controllers/        # One file per controller
│   ├── middleware/         # Logger, error handler, etc.
│   ├── routes/             # API route definitions
│   ├── utils/              # Validation and helper functions
├── tests/                  # Jest test cases
├── logs/                   # Winston log outputs
├── .env                    # Environment variables
```


---

## ⚙️ Setup Instructions
1. Clone the repo

```
git clone https://github.com/yourusername/math-engine.git
cd math-engine
```

2. Install dependencies
npm install

3. Configure environment
Create a .env file:

DATABASE_URL="file:./dev.db"
PORT=3000

4. Initialize database
* snpx prisma migrate dev --name init # This creates the SQLite DB (dev.db) and sets up schema.

5. Run the server
npm run dev   # Server will run at: http://localhost:3000

---

## 📬 API Endpoints
```
Method	Endpoint	Description
POST	/api/addition	Add two numbers
POST	/api/power	Base raised to exponent
GET	/api/factorial/:number	Factorial of a number
GET	/api/fibonacci/:count	Fibonacci sequence up to count
POST	/api/is-prime	Check if a number is prime
GET	/api/operations	List all operations
DELETE	/api/operations/:id	Delete operation by ID
```

---

# 📌 Example: Add Two Numbers
```
curl -X POST http://localhost:3000/api/addition \
  -H "Content-Type: application/json" \
  -d '{"a": 10, "b": 20}'
```
---

# 🧪 Running Tests
npm test

---

# 📊 Logging
- Logging is handled using winston. Two log outputs:

* Console logs (info, error)

* File logs: logs/server.log

---

## 🧠 Design Pattern
# 📂 MVC + Service Separation
- Model: Prisma schema

- Controller: Handles route logic

- Service (inside each controller): Contains all business logic

- Routes: Isolated by functionality

---

# ✅ Benefits:
Easy testing of each part

Better separation of responsibilities

Reusable, scalable architecture

---

## 🛡️ Validation & Error Handling
* Input validation for every API

* Central errorHandler middleware

* Clean 400/500 responses for bad inputs or failures

---

## 🧾 Prisma Model
```
model Operation {
  id        Int      @id @default(autoincrement())
  type      String
  input     String
  result    String
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now()) @updatedAt
}
```
---

## 🛠️ Future Improvements

- Docker containerization

- Add MongoDB or PostgreSQL adapter

- Token-based authentication (JWT)

---

## 👨‍💻 Contributing
- Fork the repo

- Create a branch: git checkout -b feature/your-feature

- Commit: git commit -am 'Add feature'

- Push: git push origin feature/your-feature

- Submit a PR
