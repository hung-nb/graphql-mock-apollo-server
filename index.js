const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
    resolved: String
  }
`;

// Resolvers tell Apollo Server how to fetch the data associated with a particular type
const resolvers = {
  Query: {
    resolved: () => 'Resolved',
  },
};

// Mock function which overwrites the resolvers
const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'Hello',
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,  // This overwrites resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});