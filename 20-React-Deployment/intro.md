# Deploying React Apps 

In this section we will explore: 

- Deployment steps and pitfalls 
- Server-side routing vs client side routing 

## How to Deploy: 

- You need to test you application before you deploy it
- Optimize your code 
  - Explore something called lazy loading 
- Build the app for production 
  - Execute a script to compress/ bundle the code 
- Upload the code to a server 
- Configure the server 

## Lazy Loading 

Lazy loading is staggering the load of the page to reduce initial page downlaod size.
Split our code into multiple bundles that are only downloaded when absolutely necessary. 

Easy to implement if you are using routing. 

You do this with 

const ComponentName = React.lazy(() => import('file-path'));

Then you remove the import.

## Configure Server 

When having a react front end yolu should configure the server for SPA so that the server knows not to check for html files when requested and let the React Router handle that. 


