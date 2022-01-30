import "graphql-import-node";
import { makeExecutableSchema } from "@graphql-tools/schema";

import * as userTypeDefs from "./schemas/user.graphql";
import * as emptyTypeDefs from "./schemas/empty.graphql";
import resolvers from "./resolversMap";

export default makeExecutableSchema({
  typeDefs: [emptyTypeDefs, userTypeDefs],
  resolvers,
});
