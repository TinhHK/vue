var app = new Vue({
    el : '#app',
    data: {
        product: 'Angel 1',
        image: './images/girl.jpg',
        sexyGirl: 'a sexy girl',
        inventory: 101,
        best: false,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantID: 123,
                variantColor: 'blue'
            },
            {
                variantID: 124,
                variantColor: 'green'
            },
            {
                variantID: 125,
                variantColor: 'red'
            }
        ],
    },
});