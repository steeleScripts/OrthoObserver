OrthoObserver

This is a working back-end that is able to use API calls to interact with a MongoDB collection to get, post, patch, and delete documents. 

Two main datatypes so far: Quotes and Saints

Quotes have references to Saints by their document ID and there's input validation in place to make sure all requests are properly formatted.

The next goal is to add a front-end that uses React to display a homepage that randomly selects a quote each time it's loaded.

This project was based on a MERN stack tutorial by Dave Gray and tailored controllers and models to suit the needed functionality described in this file. 

To test: 
- Create .env file in root of dir with the value of DATABASE_URI equal to your mongoDB URI incuding credentials
- From there you should be able to run get, post, patch, and delete commands on the /saints and /quotes routes using Postman or other platform to send http requests