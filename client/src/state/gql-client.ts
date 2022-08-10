import { GraphQLClient } from "graphql-request";

export const gqlClient = new GraphQLClient(
  import.meta.env.VITE_GRAPHQL_API_ENDPOINT as string
);
