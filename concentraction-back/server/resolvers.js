import db from "../models/bddconnect.js";

//_ : unused parameter
//(parent, args, contextValue, info), the order of the Args matters

const resolvers = {
  User: {
    id: (parent) => parent.id ?? parent._id,
  },
  Query: {
    user : async (_, { id }) => {
      let collection = await db.collection("users");
      let query = { _id: new ObjectId(id) };

      return await collection.findOne(query);
    },
}
};


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