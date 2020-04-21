import UUID from "graphql-tools-type-uuid";
import RoomsMutation from "./Mutation/Rooms";
import Auth from "./Mutation/Auth";
import ChatsMutation from "./Mutation/Chats";
import { User } from "./Queries";
import { DateTime, CustomScalar } from "../Schema/Scalars";
import { TypeActionEnum, TypeEnum } from "../Schema/Enums";

export default {
  Query: {
    ...User
  },
  Mutation: {
    ...RoomsMutation,
    ...ChatsMutation,
    ...Auth
  },
  UUID,
  DateTime,
  TypeActionEnum,
  TypeEnum,
  CustomScalar
};
