import {
  SchemaDirectiveVisitor,
  AuthenticationError
} from "apollo-server-express";

class IsAuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    field.resolve = async (result, args, ctx, info) => {
      if (!ctx.user.id) {
        throw new AuthenticationError("You must login to perform this action");
      }

      return result[field.name];
    };
  }
}

export { IsAuthDirective };
