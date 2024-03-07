import express from "express";
import cors from "cors";
// import users from "../routes/users.js";
import 'dotenv/config.js';
// import gql from "graphql-tag";
import { ApolloServer } from '@apollo/server';
// import { buildSubgraphSchema } from '@apollo/subgraph';
import { expressMiddleware } from '@apollo/server/express4';
import resolvers from "./resolvers.js";
import {typeDefs} from "./schema.js";
// import { readFileSync } from "fs";

const PORT = process.env.PORT_SERVER || 5050;
const app = express();
app.use(cors());
app.use(express.json());
//https://www.apollographql.com/docs/apollo-server/getting-started/
// const typeDefs = gql(
//   readFileSync("server/schema.graphql", {
//     encoding: "utf-8",
//   })
// );

 const server = new ApolloServer({
     resolvers, typeDefs
 });

//EN attendant que resolvers soit opérationnel
//schema: buildSubgraphSchema
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

//REST API middleware
// app.use("/user", users);

// Specify the path to mount the server
app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server),
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;