
exports.Product = {
    category: (parent, args, { categories }) => categories.find(category => category.id === parent.categoryId),
    reviews: (parent, args, { reviews }) => reviews.filter(review => review.productId === parent.id)
}