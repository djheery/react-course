# Multi-Page SPA with React Router 

In this section we explore routing in React. 
This is important for SEO and other online bits such as linking.

This is called Single page application routing. 
This is because technically it is still a single page, but you can manipulate the URL. 

## What will we learn? 

- What is Client-Side "Routing"? 
- Using React-Router 
- Advanced Features 
  - Dynamic and Nested Routes 

## What is Routing? 

It is enabling different paths that enable the different pages to be linked too. 

Basically you can have different pages. 

Without react, these pages would just be stored on the server, in a static way. Then when these pages are requested, the server will send them back to be rendered by the browser. 

In this situation, you can lose all your state across pages. 

React Router, enables us to continue building a SPA (only one HTML page) but manipulate the URL depending on the "page" that the client is visiting. 

It listens to links that are pressed in the browser via JS and manipulates the URL depending on what links are clicked.
import {, } from './store/cart-actions'

