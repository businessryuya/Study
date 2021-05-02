import {GraphQLServer} from 'graphql-yoga';

const typeDefs = `
type Query {
  description: String
}
`;

const resolvers = {
  Query: {
    description:() =>`This is the API fro a simple blooging application`
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => 
console.log(`The server is running on http://localhost:4000`)
);