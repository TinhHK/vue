Vue.component('product', {
    props: {
        premium: Boolean,
        required: true,
    },
    template: `
        <div class="product">
            <div class="product-frame">
                <img class="product-image" :src="image" :alt="sexyGirl">
            </div>
            <div class="product-info">
                <h2>{{ title }}</h2>
                <p v-if="inventory > 10">In stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
                <p v-else>Out of stock</p>
                <p v-show="best">Best Selling</p>
                <p>Shipping: {{shipping}}</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div class="color-box">
                    <div class="p-color"
                         v-for="(variant, index)  in variants" :key="variant.variantID"
                         :style="{ backgroundColor: variant.variantColor }"
                         @mouseover="updateProduct(index)">
                    </div>
                </div>

                <button v-on:click="addToCard"
                        :disabled="(!inventory>0)"
                        :class="{'disable-button' : !inventory>0}"
                        class="button-save-style">Add to card
                </button>
                <button class="button-save-style" v-on:click="removeCard">Remove card</button>

                <div class="cart">
                    <p>Cart ({{cart}})</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
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
        };
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
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            } else {
                return '2.99$';
            }
        }
    }
});
var app = new Vue({
    el : '#app',
    data: {
        premium: true,
    }
});