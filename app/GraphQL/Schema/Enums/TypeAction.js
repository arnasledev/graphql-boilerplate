import { GraphQLEnumType } from "graphql";

const TypeActionEnumType = new GraphQLEnumType({
  name: "TypeActionEnum",
  description: "Type action enums for message type actions",
  values: {
    USER_MESSAGE_ADDED: {
      value: "userMessageAdded"
    },
    USER_MESSAGE_REMOVED: {
      value: "userMessageRemoved"
    }
  }
});

export default TypeActionEnumType;
