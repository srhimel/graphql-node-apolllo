const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');
const { Mutation } = require('./resolvers/Mutation');
const { products, categories, reviews } = require('./db');;

const server = new ApolloServer({
    typeDefs, resolvers: {
        Query,
        Product,
        Category,
        Mutation
    },
    context: {
        products,
        categories,
        reviews
    }
});

server.listen().then(({ url }) => console.log(`Listening to ${url}`));

