var app = new Vue({
    el : '#app',
    data: {
        product: 'Angel 1',
        image: './images/girl1.jpg',
        sexyGirl: 'a sexy girl',
        inventory: 101,
        best: false,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantID: 123,
                variantColor: 'blue',
                variantImage: './images/girl1.jpg'
            },
            {
                variantID: 124,
                variantColor: 'green',
                variantImage: './images/girl2.jpg'
            },
            {
                variantID: 125,
                variantColor: 'red',
                variantImage: './images/girl3.jpg'
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