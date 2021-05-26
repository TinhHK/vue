Vue.component('product', {
    props: {
        premium: Boolean,
        required: true,
    },
    template: `
        <div>
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
                </div>
            </div>
            <div>
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There are no reviews yet</p>
                <ul v-for="review in reviews">
                    <li>{{review.name}}</li>
                    <li>{{review.rating}}</li>
                    <li>{{review.review}}</li>
                </ul>
            </div>
            <product-review @review-submmited="addReview"></product-review>
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
            reviews: [],
        };
    },
    methods: {
        addToCard: function() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantID);
        },
        removeCard() {
            this.$emit('remove-cart');
        },
        updateProduct(index) {
            this.selectedVariant = index;
        },
        addReview(productReview) {
            this.reviews.push(productReview);
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
            }
            return '2.99$';
        }
    }
});

Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul v-for="error in errors">
                    <li>{{error}}</li>
                </ul>
            </p>
            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name" placeholder="name">
            </p>
            <p>
                <label for="review">Review:</label>      
                <textarea id="review" v-model="review" rows="4" cols="50"></textarea>
            </p>
            
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>
            <p>
                <input type="submit" value="Submit">  
            </p>    
    </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: [],
        };
    },
    methods: {
        onSubmit() {
            this.errors = [];
            if(this.name && this.review && this.rating) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                };
                this.$emit('review-submmited', productReview);
                this.name = null;
                this.review = null;
                this.rating = null;
            } else {
                if(!this.name) this.errors.push('Name is required');
                if(!this.review) this.errors.push('Review is required');
                if(!this.rating) this.errors.push('Rating is required');
            }

        }
    }
});

var app = new Vue({
    el : '#app',
    data: {
        premium: true,
        cart: [],
    },
    methods: {
        addToCard(productId) {
            this.cart.push(productId);
        },
        removeCard() {
            this.cart.pop();
        },
    }
});