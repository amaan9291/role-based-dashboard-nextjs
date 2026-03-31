# Role-Based Dashboard System (Next.js + MongoDB)

## 🚀 Overview

This project is a role-based dashboard system supporting Super Admin, Admin, and User roles with secure authentication and CRUD functionality.

## 🛠 Tech Stack

* Next.js (App Router)
* MongoDB + Mongoose
* JWT Authentication
* bcrypt (password hashing)

## 🔐 Features

* Role-based access control (RBAC)
* Secure login system
* Admin and User management
* User-specific CRUD module (Tasks)

## ⚙️ Setup Instructions

1. Clone repo:

```
git clone <your-repo-link>
cd project
```

2. Install dependencies:

```
npm install
```

3. Add environment variables:

```
MONGODB_URI=your_uri
JWT_SECRET=your_secret
```

4. Run project:

```
npm run dev
```

## 🔑 API Testing

Use Postman:

* Login → get token
* Pass token in Authorization header

## 📌 Assumptions

* Only Super Admin can create Admins
* Admins manage only their Users
* Users access only their own data

## 📈 Improvements (Future Scope)

* UI enhancements
* Refresh tokens
* Role management UI
