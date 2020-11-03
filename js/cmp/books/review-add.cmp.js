import { bookService } from "../../services/book-service.js";
import { eventBus } from "../../services/event-bus-service.js"

export default {
    props: ['book'],
    template: `
    <section class="review-add">   
        <h2>Review</h2>
        
        <form v-show="!isShowReviews">
            <input ref="inputName" type="text" v-model="reviewName" placeholder="Name"/>
            <h3>Rate</h3>
            <div class="rate-stars" v-for="idx in 5" :key="idx">
                <button  @click.prevent="selectedStars(idx)"><span class="fa fa-star" :class="checkStars(idx)"></span></button> 
            </div>
            <div class="readAt">
                <h3>read at</h3>
                <input v-model="readDate" type="date">
            </div>
            <div class="freeTxt">
                <textarea v-model="reviewTxt" name="review" rows="4" cols="50">Anything you would like to add...</textarea>
            </div>      
            <button @click.prevent="submitForm">Add</button>
        </form>


        <button @click="toggleShowReviews"><h2><span v-if="!isShowReviews">reviews</span><span v-if="isShowReviews">add review</span></h2></button>
        <div v-show="isShowReviews" class="reviews">
            <ul>
                <li v-for="review in book.reviews" :key="review.id">
                    <h3>{{review.reviewerName}}</h3>
                    <h3>rate</h3>
                    <span v-for="idx in review.rate" class="fa fa-star checked"></span>
                    <span v-for="idx in 5-review.rate" class="fa fa-star"></span>
                    <h3>Read At: {{review.readDate}}</h3>
                    <p>{{review.reviewtxt}}</p>
                    <button @click="onRemoveReview(review.id)">x</button>
                </li>
            </ul>
        </div>

    </section>

    `,
    data() {
        return {
            reviewName: 'Books Reader',
            stars: 1,
            readDate: '01/11/2020',
            reviewTxt: '',
            isShowReviews: false,
        }
    },
    methods: {
        submitForm() {
            const review = {
                reviewerName: this.reviewName,
                rate: this.stars,
                readDate: this.readDate,
                reviewTxt: this.reviewTxt || ''
            }
            bookService.addReview(this.book.id, review)
                .then(eventBus.$emit('show-msg-add', { msg: 'Review added successfully', bookId: this.book.id }))
        },
        selectedStars(idx) {
            this.stars = idx;
        },
        checkStars(idx) {
            return { checked: this.stars >= idx }
        },
        toggleShowReviews() {
            this.isShowReviews = !this.isShowReviews;
        },
        onRemoveReview(reviewId) {
            bookService.removeReview(reviewId, this.book.id)
                .then(res => {
                    console.log('res', res);
                    eventBus.$emit('show-msg', 'Review Deleted')
                })
        }

    },
    computed: {

    },
    mounted() {
        this.$refs.inputName.select();
    }
}