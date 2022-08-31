# Adding Authentication in React

This section Introduces: 

- How Authentication works in React Apps 
- Implementing User Authentication 
- Authentication Persistence 
- Auto Logout 

## What, How, Why? 

Why is authentication needed? 

Authentication is needed when various content needs to be protected. For example, admin/ client portal pages should require authentication. 

API endpoints that should be locked for non-authenticated users. 

How does authentication work? 

1. Get access/ get permission by sending your credentials and verifying that you are an authenticated user in the DB 
2. Send a request to a protected resource. 

Client (Browser) ==> Request (Attached user credentials) ===> Server

## Types of Sessions: 

- Server Side sessions 
  - Store a unique identifier on the server, send same identifier to client 
  - Client sends identifier with requests to protected resources. 

- Authentication Tokens 
  - Create (but not store) "Permission" token on server 
    - Send this token to the client 
    - This token created with a specific algorithm and key used for hashing the data so that the server can verify if it has created this token. 
    - Key is only known by the server. 
    - The server has not stored this token, but is able to identify that it has created it. 
  - Allows for the decoupling of FrontEnd and BackEnd code. 
  - Typically JWT (JSON WWeb Tokens) are used.

  
