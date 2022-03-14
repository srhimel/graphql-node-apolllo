const { v4: uuid } = require('uuid');
exports.Mutation = {
    addCategory: (parent, { input }, { categories }) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name: name
        }
        categories.push(newCategory);
        return newCategory;
    },

    addProduct: (parent, { input }, { products }) => {
        const { name, price, onSale, categoryId, image, quantity, description } = input;
        const neProduct = {
            id: uuid(),
            name,
            description,
            quantity,
            price,
            image,
            onSale,
            categoryId
        }

        products.push(neProduct);
        return neProduct;
    }
}