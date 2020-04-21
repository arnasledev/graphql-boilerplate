import { ApolloError } from "apollo-server-express";

const Query = {
  room: async (parent, { id }) => {
    try {
      //
    } catch (e) {
      throw new ApolloError("Query failed");
    }
  },
  chat: async (parent, { id }) => {
    try {
      //
    } catch (e) {
      throw new ApolloError("Query failed");
    }
  }
};

export default Query;
