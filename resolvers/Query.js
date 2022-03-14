

exports.Query = {
    hello: () => 'Hello World!',
    products: (parent, { filter }, { products, reviews }) => {
        if (filter) {
            const { onSale, avgRating } = filter;
            if (onSale) {
                return products.filter(product => product.onSale)
            }
            if (avgRating) {
                const filteredProduct = products.filter(product => {
                    let sumRating = 0;
                    let numberOfRating = 0;
                    reviews.forEach(review => {
                        if (review.productId === product.id) {
                            sumRating += review.rating;
                            numberOfRating++;
                        }
                    })
                    const avgProductRating = sumRating / numberOfRating;

                    return avgProductRating >= avgRating;
                })
                return filteredProduct;

            }
        }
        return products
    },
    product: (parent, args, { products }) => {
        const productId = args.id;
        const product = products.find(product => product.id === productId);
        if (!productId) return null;
        return product
    },
    categories: (parent, args, { categories }) => categories,
    category: (parent, args, { categories }) => categories.find(category => category.id === args.id),
}