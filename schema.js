const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        hello: String
        products(filter: ProductsFilter): [Product!]!
        product(id: ID!) : Product
        categories: [Category]!
        category(id: ID!) : Category
    }

    type Mutation {
        addCategory(input: AddCategoryInput): Category!
        addProduct (input: AddProductInput) : Product!
    }
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        categoryId: String!
        category: Category
        reviews: [Review]! 
    }
    type Category {
        id: ID!
        name: String!
        products(filter: ProductsFilter): [Product]!
    }
    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: String!
    }
    input ProductsFilter {
        onSale: Boolean
        avgRating: Int
    }
    input AddCategoryInput {
        name: String!
    }
    input AddProductInput {
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        categoryId: String!
    }

`