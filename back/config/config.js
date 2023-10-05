// config.js

module.exports = {
    // Database configuration
    database: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'myuser',
    },
    // JWT (JSON Web Token) secret key
    // jwtSecret: 'your-secret-key-for-jwt',
    // Port on which the server should run
    port: process.env.PORT || 5000,
  };
  