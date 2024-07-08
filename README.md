# ToDo App Backend

This is a backend implementation for a basic ToDo application with authentication using email, password, and JWT. It includes CRUD operations for ToDo items and uses MongoDB as the database.

## Features

- User authentication (Signup and Login) using JWT
- Create, Read, Update, and Delete (CRUD) operations for ToDo items
- Middleware for protected routes
- MongoDB for data storage

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- bcryptjs (for password hashing)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- MongoDB

## Getting Started

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/todo-app-backend.git
    cd todo-app-backend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory of your project and add the following environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=8000
    ```

### Running the Application

1. **Start the MongoDB server:**
   Ensure your MongoDB server is running. You can start it using the following command (if installed locally) or Can use MongoDB Compass.
    ```sh
    mongod
    ```

2. **Start the Node.js server:**
    ```sh
    npm start
    ```

   The server will start on the port specified in your `.env` file (default is 8000).

### API Endpoints

The following API endpoints are available:

#### Auth Routes

- **Signup**
    ```
    POST /api/v1/signup
    ```

    Request body:
    ```json
    {
      "name":"yourname"
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

- **Login**
    ```
    POST /api/v1/login
    ```

    Request body:
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

#### ToDo Routes (Protected)

- **Create ToDo**
    ```
    POST /api/v1/createTodo
    ```

    Request body:
    ```json
    {
      "title": "New Todo",
      "desc":"New Desc"
    }
    ```

- **Get All ToDos**
    ```
    GET /api/v1/getTodos
    ```

- **Get ToDo by ID**
    ```
    GET /api/v1/getTodos/:id
    ```

- **Update ToDo**
    ```
    PUT /api/v1/updateTodo/:id
    ```

    Request body:
    ```json
    {
      "title": "Updated Todo",
      "desc":"updated desc"
    }
    ```

- **Delete ToDo**
    ```
    DELETE /api/v1/deleteTodo/:id
    ```

### Middleware

The `Auth` middleware is used to protect routes that require authentication. It verifies the JWT token and attaches the user payload to the request object.


### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
