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

## Usage
- cd book-cycle-app

### Install dependencies
npm install

### Start Project
npm start index.js

## Usage 2
To use the Book Cycle Application:

1. Create an account or log in if you already have one.
2. List the books you want to sell or exchange.
3. Search for books you want to buy or exchange.
4. Connect with other users to arrange book transactions.

### API Endpoints
* User Management:

    * `POST /api/users/register`: Register a new user.
    * `POST /api/users/login`: Log in as a registered user.
    * `GET /api/users/profile`: Retrieve user profile information.
    * `PUT /api/users/profile`: Update user profile information.
* Book Management:

    * `GET /api/books`: Retrieve a list of available books.
    * `GET /api/books/:id`: Retrieve details of a specific book.
    * `POST /api/books`: Create a new book listing.
    * `PUT /api/books/:id`: Update book listing details.
    * `DELETE /api/books/:id`: Delete a book listing.
* Authentication and Authorization:

    * `POST /api/auth/refresh`: Refresh access tokens.
    * `POST /api/auth/logout`: Log out and invalidate tokens.
* Miscellaneous:

    * `GET /`: Home page of the Book Cycle Application.


