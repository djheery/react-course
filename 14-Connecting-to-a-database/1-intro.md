# HTTP Requests in React (Connecting to a Database)

This section is about making your React project interact with a DB. 

THis is necessary to build a fully fledged React project. 

- How do React Apps interact with a Database
- Sending HTTP Requests, and using responses
- Handling Errors & Loading State. 

## How do React Apps Interact with A databse. 

React Apps/ Browser side apps should never, directly interact with a Database. 

This will never happen as it is insecure. 
If you do this, you would expose your database credentials. 
All javascript code, can be accessed and read in the browser. 

You always have a backend application running on another machine. 

This backend application can be written with any server side language. 
This will ineteact with the database, as this code cannot be viewed in the clients browser. 

