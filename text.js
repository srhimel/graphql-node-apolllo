const object = {
    products: [
        {
            name: 'apple',
            reviews: [
                {
                    rating: 1
                },
                {
                    rating: 2
                }
            ]
        },
        {
            name: 'boroi',
            reviews: [
                {
                    rating: 1
                },
                {
                    rating: 2
                }
            ]
        }
    ]
}

const totalRating = object.products[0].reviews.map(item => item.rating).reduce((pre, curr) => pre + curr, 0);

console.log(totalRating);