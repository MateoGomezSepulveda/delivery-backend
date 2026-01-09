# 📦 App Delivery – Backend API

Backend API for **App Delivery**, built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**.
This project provides user management and authentication features following a modular architecture.

---

## 🚀 Technologies Used

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* bcrypt
* JWT *(in progress)*
* DTO validation

---

## 📁 Project Structure

* Modular architecture
* Separation of concerns:

  * Controllers
  * Services
  * Modules
  * Schemas
  * DTOs

---

## ⚙️ Database Setup

1. MongoDB Atlas configured
2. Mongoose installed and connected
3. User schema created with validations
4. Unique email constraint applied

---

## 👤 Users Module

### Implemented Features

* User schema definition
* Users module, controller, and service
* Database persistence using Mongoose

### CRUD Endpoints

* `POST /users` → Create user
* `GET /users` → Get all users
* `PATCH /users/:id` → Update user data
* `DELETE /users/:id` → Delete user

---

## ✅ Validation & Security

* DTO-based input validation
* Email must follow `@gmail.com` format
* Password minimum length: **6 characters**
* Username is required
* Password encryption using **bcrypt**
* Duplicate email handling at database level

---

## 🔐 Authentication (In Progress)

### Current Auth Features

* Login endpoint implemented
* User credential validation
* Password comparison using bcrypt

### Upcoming

* JWT token generation
* Authentication middleware
* Protected routes
* Role-based access control

---

## 📌 Current Status

✔ Database connected
✔ Users CRUD implemented
✔ Validations applied
✔ Password encryption
✔ Login flow started

➡️ **Next step:** Complete JWT authentication and protect routes.

---

## 🧠 Notes

This project is under active development and follows best practices for backend architecture and security.
