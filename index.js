const { ApolloServer, gql, MockList } = require('apollo-server');

const typeDefs = gql`

  type Book {
    title: String
    author: String
  }

  type Query {
    hello: String,
    books: [Book]
  }
`;

// Resolvers tell Apollo Server how to fetch the data associated with a particular type
const resolvers = {
  Query: {
    hello: () => ('Hello World'),
    books: () => {
      return mockBookList
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mockBookList = [
  {
    title: 'aaaa',
    author: 'AAAA'
  },
  {
    title: 'bbbb',
    author: 'BBBB'
  },
  {
    title: 'cccc',
    author: 'CCCC'
  }
]