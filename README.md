# Blog Management System Task

## 📌 Task Objective
The purpose of this task is to assess your backend development skills, focusing on:
- *Database Schema Design*
- *Caching for Performance Optimization*
- *Building a RESTful API with Proper Documentation*
- *User Authentication & Authorization*
- *Handling Relationships Between Tables (Eager Loading)*
- *Writing Clean and Maintainable Code Following Best Practices*

---

## 🔹 Task Details: Blog Management System
You are required to build a *Blog Management System* where users can create, update, and manage their articles efficiently, with support for caching to enhance performance.

### 📌 Core Requirements

#### 1. Database Schema Design
- Design a well-structured database that supports all required functionalities.
- *Main Tables:*
  - users (User Information)
  - posts (Blog Articles)
  - categories (Post Categories)
  - comments (User Comments on Posts)
  - likes (Likes on Posts and Comments)

#### 2. API Functionalities
- *User Authentication using JWT (Laravel Sanctum or Node.js JWT).*
- *CRUD Operations for Posts:*
  - A registered user can create, update, and delete their own posts.
- *Categorization:*
  - Posts can belong to multiple categories.
- *Comment System:*
  - Users can add comments on posts.
- *Like System:*
  - Users can like both posts and comments.
- *Optimized Post Retrieval:*
  - Fetch posts with categories, comments, and like count using *Eager Loading*.
- *Caching:*
  - Cache post retrievals to reduce database queries and improve performance.
- *Middleware for Access Control:*
  - Ensure that only post owners can edit or delete their posts.

---

## 📌 Required Technologies

### 🛠 Laravel
- Laravel 10
- MySQL or PostgreSQL
- Sanctum or JWT for authentication
- Eloquent ORM

### 🛠 Node.js
- Express.js
- MySQL or PostgreSQL with Sequelize ORM
- JSON Web Token (JWT) for authentication

---

## 📌 Evaluation Criteria
✅ Well-structured and scalable *database schema*.
✅ Clean and maintainable *code structure* following best practices.
✅ Efficient *caching implementation*.
✅ Correct *authentication and authorization*.
✅ Effective handling of *database relationships*.
✅ Clear *API documentation* using Postman or Swagger.

---

## 📌 Submission Instructions
To submit your solution, follow these steps:

### 1️⃣ Fork the Repository
Fork the project repository from GitHub:  
🔗 [IT Club Blog Management API](https://github.com/IT-Club-Workspace/blog-management-api.git)

### 2️⃣ Clone Your Forked Repository
bash
# Clone the forked repository to your local machine
git clone https://github.com/YOUR_USERNAME/blog-management-api.git


### 3️⃣ Create a New Branch
bash
cd blog-management-api
git checkout -b feature/your-feature-name


### 4️⃣ Implement the Required Features
- Develop the required functionalities based on the given requirements.
- Commit your changes regularly with meaningful commit messages.

### 5️⃣ Push Your Changes to GitHub
bash
git add .
git commit -m "Implemented Blog Management API features"
git push origin feature/your-feature-name


### 6️⃣ Submit a Pull Request (PR)
- Go to your forked repository on GitHub.
- Click on Compare & pull request.
- Provide a brief description of your implementation.
- Submit the pull request.

---

## 📌 Deliverables
- Complete project code on *GitHub* with a well-structured README.md.
- API documentation using *Postman* or *Swagger*.
- Screenshots or a short video demonstrating the system functionality.

---

## 🎯 Submission Deadline: *5 Days (07/02/2025)*
🔍 *Skill Level: Intermediate to Advanced*
