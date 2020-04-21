import { AuthenticationError } from "apollo-server-express";

export default {
  myUser: async (parent, args, { user }) => {
    if (!user.id) {
      throw new AuthenticationError("You must to login");
    }

    return user;
  }
};
