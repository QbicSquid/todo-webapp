# SimplyDo
A quick and simple web based todo app to keep track of your tasks on the go!

# Run

Deploy front end.  
From the project root,

```
cd frontend
yarn install
yarn  build
yarn start
```
The followind enviroment variables must be set for the frontend:  
1. NEXT_PUBLIC_BE_DOMAIN: backend url
---
Deploy back end.  
From the project root,

```
cd backend
yarn install
yarn  build
yarn start
```
The followind enviroment variables must be set for the frontend:  
1. PORT: port to run the server on
2. MONGO_URI: URI to the MongoDB database
3. JWT_SECRET: secret key to use when generating access tokens
4. JWT_EXPIRE: expiration time for the access tokens