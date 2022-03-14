exports.Category = {
    products: (parent, { filter }, { products }) => {

        const categorizedProduct = products.filter(product => product.categoryId === parent.id)
        if (filter) {
            if (filter.onSale) {
                return categorizedProduct.filter(product => product.onSale)
            }
        }
        return categorizedProduct;
    }
}