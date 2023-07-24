# Project Name: Identity Reconciliation

## Description

Identity Reconciliation is an Express-based API designed to consolidate contact information for customers of FluxKart.com. It allows you to unify customer data even when they use different email addresses or phone numbers during their purchases.
## Installation

1. Clone the repository from [GitHub](https://github.com/your_username/your_repository.git).
2. Install the required dependencies by running the following command in the project directory:
   ```
   npm install
   ```

## Getting Started

To get the API up and running, follow these steps:

1. Ensure you have Node.js and npm installed on your system.
2. Create a `.env` file in the root directory of the project and define the following environment variables:
   ```
   PORT=5000
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   DB_HOST=your_database_host
   DB_NAME=your_database_name
   ```
3. Replace `your_database_username`, `your_database_password`, `your_database_host`, and `your_database_name` with your actual database credentials.
4. Start the server by running the following command:
   ```
   npm start
   ```
5. The server will start running on `http://localhost:3000` (or on the specified port in the `.env` file).

## Project Structure

- `config/`: Contains the database connection configuration (`db.js`).
- `model/`: Defines the database model for the `Contact` entity.
- `routes/`: Contains the API route handlers, specifically `identifyRoutes.js`.
- `index.js`: The main entry point of the application.

## Database

This project uses a relational database to store contact information. The database credentials are provided via environment variables in the `.env` file.

The `Contact` model in `model/contactModel.js` represents the structure of the `contacts` table in the database.

## API Endpoints

URL: http://localhost:3000/api/identify

## Sending Requests Using Postman

Endpoint
URL: http://localhost:3000/api/identify
Method: POST

```
{
"email": "jisu@gmail.com",
"phoneNumber": "123456789"
}
```

## Response

The response will be in the following format:

```
{
    "contact": {
        "primaryContatctId": 1,
        "emails": [
            "jisu@gmail.com"
        ],
        "phoneNumbers": [
            "123456789"
        ],
        "secondaryContactIds": []
    }
}
```

## If the respose email or phone is duplicated

```
{
"email": "jisu@gmail.com",
"phoneNumber": "8609124483"
}
```

## Response

```
{
    "contact": {
        "primaryContatctId": 1,
        "emails": [
            "jisu@gmail.com",
            "jisu@gmail.com"
        ],
        "phoneNumbers": [
            "123456789",
            "8609124483"
        ],
        "secondaryContactIds": [
            2
        ]
    }
}
```
