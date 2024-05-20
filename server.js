import express from 'express';
import authRouter from './src/routes/auth.routes.js';
import { connectToDB } from './src/config/db.config.js';
import passport from './src/config/passport.config.js';
import session from 'express-session';
import flash from 'connect-flash';
import dotenv from 'dotenv';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
dotenv.config();

// server
const server = express();
//Middlewares

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'));
server.use(expressEjsLayouts);
// Use express-session middleware
server.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);
// Use connect-flash middleware
server.use(flash());
// Initialize Passport.js
server.use(passport.initialize());
server.use(passport.session());

//Routes
server.use('/', authRouter);

//Start Server
server.listen(8080, () => {
  console.log('Server running on port 8080');
  connectToDB();
});
