# Catstronauts

Apollo's Lift-off course companion app (completed)

[Live Demo App](https://lift-off-client-demo.netlify.app/)

[Course Walk-through on Odyssey](https://odyssey.apollographql.com/lift-off-part1)

## Run the project

Catstronauts full-stack app holds two main folders `server` and `client`.

### server

- install packages `cd server && npm install`
- start server `npm start`

The GraphQL server pulls data from a REST API.

### client

From another terminal window:

- install packages `cd client && npm install`
- start React app `npm start`

## Note
- node : represent --> object
- edge : represent --> object between relationship
- Now, if we think of each object as a node and each relationship as an edge between two nodes, we can think of our entire data model as a graph of nodes and edges. This is called our application's data graph.

###  The GraphQL schema
A schema is like a contract between the server and the client. It defines what a GraphQL API can and can't do, and how clients can request or change data. It's an abstraction layer that provides flexibility to consumers while hiding back-end implementation details.

### 🛠 Back-end first steps
On the back-end side, our first goal is to create a GraphQL server that can:

- Receive an incoming GraphQL query from our client
- Validate that query against our newly created schema
- Populate the queried schema fields with mocked data
- Return the populated fields as a response

The Apollo Server library helps us implement this server quickly, painlessly, and in a production-ready way.

In the server/src/ folder, open index.js.

To create our server, we'll use the apollo-server package that we installed previously. From that package, we'll only need the named export ApolloSever, so we'll declare that constant between curly braces. Just below, we'll import our typeDefs from our schema.js file: