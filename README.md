# Book Cycle Application

## Description

The Book Cycle Application is a web-based platform that allows users exchange books with other users. Users can create accounts, list their books, search for books they want, and connect with other book enthusiasts. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this application on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/hilarytn/Book-Cycle_App

2. cd book-cycle-app

3. Install dependencies
    * npm install

4. Start Project
    * npm start index.js

## Usage
To use the Book Cycle Application:

1. Create an account or log in if you already have one.
2. List the books you want to sell or exchange.
3. Search for books you want to buy or exchange.
4. Connect with other users to arrange book transactions.

### API Endpoints
1. User Management:

    * `POST /api/users/register`: Register a new user.
    * `POST /api/users/login`: Log in as a registered user.
    * `GET /api/users/profile`: Retrieve user profile information.
    * `PUT /api/users/profile`: Update user profile information.
2. Book Management:

    * `GET /api/books`: Retrieve a list of available books.
    * `GET /api/books/:id`: Retrieve details of a specific book.
    * `POST /api/books`: Create a new book listing.
    * `PUT /api/books/:id`: Update book listing details.
    * `DELETE /api/books/:id`: Delete a book listing.

3. Authentication and Authorization:

    * `POST /api/auth/refresh`: Refresh access tokens.
    * `POST /api/auth/logout`: Log out and invalidate tokens.

4. Book Swapping:

    * `POST /api/swaps`: Initiate a book swap request.
    * `GET /api/swaps`: Get a list of pending swap requests.
    * `PUT /api/swaps/:id/accept`: Accept a swap request.
    * `PUT /api/swaps/:id/reject`: Reject a swap request.
    * `GET /api/swaps/history`: Get a history of completed swaps.

5. Miscellaneous:

    * `GET /`: Home page of the Book Cycle Application.

### Technologies Used
* Node.js
* Express.js
* MongoDB
* Websockets (Socket.io)
* React.js (for the front end)
* JSON Web Tokens (JWT) for authentication
* Axios (for making API requests)
* HTML, CSS, JavaScript

### Contributing
Contributions to the Book Cycle Application are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.
4. Ensure your code follows the project's coding standards

### License
This project is licensed under the MIT License - see the <b>LICENSE</b> file for details.

### Acknowledgments
* This project was inspired by the idea of creating a community for book lovers to share and exchange books.
* Special thanks to <b>AwesomeBooks</b> for providing book data for our application.

### Authors
1. Nadduli Daniel <naddulidaniel1994@gmail.com>
2. Hilary Titus Naor <hilarytn@gmail.com>
