# Node.js Crash Course – Blog Application

This project is a beginner-friendly **Node.js + Express + MongoDB** application built while learning the fundamentals of backend web development.  
It demonstrates how to create a simple **Blog App** using **MVC concepts**, **EJS templates**, and **RESTful routes**.

The goal of this project is to understand how servers work, how clients communicate with servers, and how data is stored and managed using MongoDB.

---

## 📌 Features

- Node.js server using Express
- Dynamic pages with EJS templating
- MongoDB database with Mongoose ODM
- Create, read, and delete blog posts
- RESTful routing (GET, POST, DELETE)
- Middleware usage
- Static files (CSS)
- Clean project structure

---

## 🛠️ Technologies Used

- **Node.js** 
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **EJS**
- **Morgan**
- **HTML & CSS**
- **JavaScript (ES6)**

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

Make sure you have the following installed:

- Node.js (v16+ recommended)
- npm (comes with Node.js)
- MongoDB Atlas account
- Git (optional but recommended)

  2️⃣ Project Setup

Clone the repository (or download it):

git clone <your-repo-url>
cd your-project-folder


Install dependencies:

npm install

3️⃣ Environment Variables (Recommended)

Create a .env file:

PORT=3000
MONGO_URI=your_mongodb_connection_string


Install dotenv:

npm install dotenv


Use it in app.js:

require('dotenv').config();

4️⃣ Start the Server
nodemon app.js


Server will run on:

http://localhost:3000

📚 Concepts Covered
1️⃣ Node.js Basics

Node.js allows JavaScript to run outside the browser.
It uses a non-blocking, event-driven architecture, making it fast and scalable.

Key concepts:

Single-threaded

Asynchronous execution

Uses V8 JavaScript engine

2️⃣ Clients and Servers

Client: Browser (Chrome, Firefox)

Server: Node.js application

The client sends requests (HTTP), and the server responds with:

HTML

JSON

Redirects

Status codes

3️⃣ Requests and Responses

HTTP Methods used:

GET – retrieve data

POST – send data

DELETE – remove data

Example:

app.get('/', (req, res) => {
  res.send('Home Page');
});

4️⃣ npm (Node Package Manager)

npm is used to install and manage packages.

Important files:

package.json

package-lock.json

Common commands:

npm init
npm install express
npm install --save-dev nodemon

5️⃣ Express Application

Express is a Node.js framework that simplifies routing and server logic.

Basic setup:

const express = require('express');
const app = express();


Listening on a port:

app.listen(3000);

6️⃣ View Engines – EJS

EJS allows embedding JavaScript into HTML.

Advantages:

Dynamic content

Reusable templates (partials)

Cleaner code

Example:

<h1><%= title %></h1>


Using partials:

<%- include('./partials/head.ejs') %>

7️⃣ Middleware

Middleware runs between request and response.

Examples:

Logger

Body parser

Static files

Usage:

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


Third-party middleware:

const morgan = require('morgan');
app.use(morgan('dev'));

8️⃣ MongoDB & Mongoose

MongoDB is a NoSQL database.
Mongoose provides:

Schemas

Models

Validation

Schema example:

const blogSchema = new mongoose.Schema({
  title: String,
  snippet: String,
  body: String
}, { timestamps: true });

9️⃣ CRUD Operations
🔹 Create (POST)
app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);
  blog.save().then(() => res.redirect('/blogs'));
});

🔹 Read (GET)
app.get('/blogs', (req, res) => {
  Blog.find().then(blogs => res.render('index', { blogs }));
});

🔹 Delete (DELETE)
app.delete('/blogs/:id', (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json({ redirect: '/blogs' }));
});

📁 Project Structure
project/
│
├── models/
│   └── blog.js
│
├── views/
│   ├── partials/
│   │   ├── head.ejs
│   │   ├── nav.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── details.ejs
│   ├── create.ejs
│   └── 404.ejs
│
├── public/
│   └── styles.css
│
├── app.js
├── package.json
├── README.md


Check installations:
```bash
node -v
npm -v
