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
                variantColor: 'blue',
                variantImage: './images/funnya.jpg'
            },
            {
                variantID: 124,
                variantColor: 'green',
                variantImage: './images/funnya1.jpg'
            },
            {
                variantID: 125,
                variantColor: 'red',
                variantImage: './images/funnya2.jpg'
            }
        ],
        cart: 0,
    },
    methods: {
        addToCard: function() {
            this.cart += 1;
        },
        removeCard() {
            if(this.cart > 0) {
                this.cart -= 1;
            }
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    },
});