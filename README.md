# Authentication_NodeJS_Application


This authentication system provides a robust foundation for implementing user authentication in web applications. It offers features such as user sign-up, sign-in, sign-out, password reset, and social authentication using Google OAuth. This readme provides an overview of the project structure, installation instructions, and usage guidelines.

## Features

- **User Sign-up:** Allows users to register by providing an email and password.
- **User Sign-in:** Enables registered users to log in with their credentials.
- **User Sign-out:** Allows users to securely log out of the application.
- **Password Reset:** Provides functionality for users to reset their passwords.
- **Google OAuth Authentication:** Supports signing in with Google accounts using OAuth2.

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript (ES6)
  - Font Awesome for icons
  - EJS (Embedded JavaScript) for templating
- **Backend**:
  - Node.js with Express.js for server-side logic
  - MongoDB with Mongoose for database management
  - Passport.js (for authentication and session management)

## Folder Structure

```
project-root/
│
├── src/
│   ├── config/
│   │   └── db.config.js
│   │   └── passport.config.js
│   │
│   ├── controllers/
│   │   └── auth.controller.js
│   │
│   ├── middlewares/
│   │   └── isAuthenticated.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   └── authRoutes.js
│   │
│   └── views/
│       ├── home.ejs
│       ├── index.ejs
│       ├── layout.ejs
│       ├── resetPassword.ejs
│       ├── signin.ejs
│       └── signup.ejs
│
├── public/
│   └── css/
│       └── style.css
│
├── .env
├── server.js
├── package.json
└── README.md
```

## Setup Instructions

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Dhareppahalli310807/Authentication_NodeJS_Application
```

2. Navigate to the project directory:

```bash
cd Authentication_NodeJS_Application
```

3. Install dependencies:

```bash
npm i && npm i -D
```

4. Add `.env` file with Google OAuth `GOOGLE_CLIENT_ID` AND `GOOGLE_CLIENT_SECRET`. You can find these credentials by creating OAuth Credentials in Google Cloud Console. You can follow the [google documentation](https://support.google.com/cloud/answer/6158849?hl=en), to create your own credentials.

5. Start the server:

```bash
npm run dev
```

5. Open your web browser and go to http://localhost:8080 to view the application.

## How to Use

1. Register a new user by navigating to the sign-up page and providing a valid email and password.
2. Log in with the registered email and password on the sign-in page.
3. To sign out, click the sign-out button on the home page.
4. Reset your password by clicking on the reset-password button on the home page.
5. For Google OAuth authentication, click on the "Sign in with Google" button on the index page.

## Credits

This project was created by Dhareppa Halli. Special thanks to Coding Ninjas.

## License

This project is licensed under the MIT License.
