var app = new Vue({
    el : '#app',
    data: {
        brand: 'American',
        product: 'Angel',
        selectedVariant: 0,
        sexyGirl: 'a sexy girl',
        best: false,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantID: 123,
                variantColor: 'blue',
                variantImage: './images/girl1.jpg',
                variantQuantity: 1
            },
            {
                variantID: 124,
                variantColor: 'green',
                variantImage: './images/girl2.jpg',
                variantQuantity: 0
            },
            {
                variantID: 125,
                variantColor: 'red',
                variantImage: './images/girl3.jpg',
                variantQuantity: 10
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
        updateProduct(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inventory() {
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }
});