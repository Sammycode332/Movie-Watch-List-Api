# 🎬 Movie Watch List API

A RESTful API built with **Node.js** and **Express.js** that allows users to create, manage, and track their movie watchlists. The API provides endpoints for adding movies, updating movie details, marking movies as watched, retrieving watchlists, and deleting movies.

## 🚀 Features

* Add movies to a watchlist
* Retrieve all movies in the watchlist
* Get a specific movie by ID
* Update movie information
* Mark movies as watched or unwatched
* Delete movies from the watchlist
* RESTful API architecture
* JSON-based request and response handling

## 🛠️ Technologies Used

* Node.js
* Express.js
* JavaScript
* REST API

## 📂 Project Structure

```bash
Movie-Watch-List-API/
│
├── controllers/
├── routes/
├── models/
├── middleware/
├── app.js
├── package.json
├── .gitignore
└── README.md
```

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/Movie-Watch-List-API.git
```

2. Navigate to the project directory:

```bash
cd Movie-Watch-List-API
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

For development mode:

```bash
npm run dev
```

## 🌐 API Endpoints

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| GET    | /movies           | Get all movies        |
| GET    | /movies/:id       | Get a movie by ID     |
| POST   | /movies           | Add a new movie       |
| PUT    | /movies/:id       | Update a movie        |
| PATCH  | /movies/:id/watch | Mark movie as watched |
| DELETE | /movies/:id       | Delete a movie        |

## Example Request

### Create a Movie

```http
POST /movies
```

```json
{
  "title": "Inception",
  "genre": "Sci-Fi",
  "year": 2010,
  "watched": false
}
```

## Example Response

```json
{
  "message": "Movie added successfully",
  "movie": {
    "id": 1,
    "title": "Inception",
    "genre": "Sci-Fi",
    "year": 2010,
    "watched": false
  }
}
```

## 📖 Learning Objectives

This project demonstrates:

* RESTful API development
* Express.js routing
* CRUD operations
* Middleware usage
* Backend project structure
* API testing and debugging

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

## 📜 License

This project is licensed under the MIT License.

---

Built with ❤️ using Node.js and Express.js.
