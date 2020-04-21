import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

const myCustomScalarType = new GraphQLScalarType({
  name: "MyCustomScalar",
  description: "Description of my custom scalar type",
  serialize(value) {
    let result;
    // Implement your own behavior here by setting the 'result' variable
    return result;
  },
  parseValue(value) {
    let result;
    // Implement your own behavior here by setting the 'result' variable
    return result;
  },
  parseLiteral(ast) {
    switch (ast.kind) {
      // Implement your own behavior here by returning what suits your needs
      // depending on ast.kind
      case Kind.INT:
        break;
      case Kind.OBJECT:
        break;
    }
  }
});

export default myCustomScalarType;
