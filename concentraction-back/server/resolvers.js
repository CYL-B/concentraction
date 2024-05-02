// implementation of the GraphQL schema.
import db from "../models/bddconnect.js";

//define a custom scalar for date type
import { GraphQLScalarType, Kind } from 'graphql';


//https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

//_ : unused parameter
//(parent, args, contextValue, info), the order of the Args matters

const resolvers = {
  Date: dateScalar,
  User: {
    id: (parent) => parent.id ?? parent._id,
  },
  Query: {
    user : async (_, { id }) => {
      let collection = await db.collection("users");
      let query = { _id: new ObjectId(id) };

      return await collection.findOne(query);
    },
},
//chiffrer password
Mutation: {
  signup: async (_, {name, password, mail}, context) =>{
    let collection = await db.collection("users");
    const insert = await collection.insertOne({ name, password, mail });
    if (insert.acknowledged)
      return { name, id: insert.insertedId };
    return null;
  },

  //logique de login à ajouter
  login: async (_, {password, mail}, context) => {
    let collection = await db.collection("users");

  },

  //création de tâche
  addTask: async (_, { name, priority, category, status, startDate, endDate, desc, token }, context) => {
    let collection = await db.collection("users");

  },

  //modifcation de la tâche
  updateTask: async (_, { id, name, priority, category, status, startDate, endDate, desc, token }, context) => {
    let collection = await db.collection("users");

  },

  //suppression de la tâche, logique à revoir

  deleteTask: async(_, { id, token }, context) => {
    let collection = await db.collection("users");
    const dbDelete = await collection.deleteOne({ _id: new ObjectId(id) });
      return dbDelete.acknowledged && dbDelete.deletedCount == 1 ? true : false;
  }
}
}



// },
  // Mutation: {
  //   async createRecord(_, { name, position, level }, context) {
  //     let collection = await db.collection("users");
  //     const insert = await collection.insertOne({ name, position, level });
  //     if (insert.acknowledged)
  //       return { name, position, level, id: insert.insertedId };
  //     return null;
  //   },
  //   async updateRecord(_, args, context) {
  //     const id = new ObjectId(args.id);
  //     let query = { _id: new ObjectId(id) };
  //     let collection = await db.collection("users");
  //     const update = await collection.updateOne(
  //       query,
  //       { $set: { ...args } }
  //     );

  //     if (update.acknowledged)
  //       return await collection.findOne(query);

  //     return null;
  //   },
  //   async deleteRecord(_, { id }, context) {
  //     let collection = await db.collection("users");
  //     const dbDelete = await collection.deleteOne({ _id: new ObjectId(id) });
  //     return dbDelete.acknowledged && dbDelete.deletedCount == 1 ? true : false;
  //   },
  // },

export default resolvers;