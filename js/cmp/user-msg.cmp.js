import { eventBus } from '../services/event-bus-service.js'
import { bookService } from '../services/book-service.js'

var timer;

export default {
    template: `
        <section v-show="msg" class="user-msg">
            <p>{{msg}}</p>
            <button @click="closeMessege">x</button>
        </section>
    `,
    data() {
        return {
            msg: null
        }
    },
    methods: {
        closeMessege() {
            this.msg = null;
            clearTimeout(timer)
        },
        setTime() {
            timer = setTimeout(() => {
                // console.log('closing');
                // this.msg = null;
                this.closeMessege()
            }, 3000);
        }
    },
    destroyed() {
        console.log('Destroyed');
    },
    created() {
        eventBus.$on('show-msg', msg => {
            this.msg = msg
            this.setTime()
            // timer = setTimeout(() => {
            //     console.log('closing');
            //     this.msg = null;
            // }, 3000);
        });
        eventBus.$on('show-msg-add', res => {
            bookService.getBookById(res.bookId)
                .then(book => {
                    this.msg = 'The book: ' + book.title + '  has a new review!'
                    this.setTime()
                    // timer = setTimeout(() => {
                    //     console.log('closing');
                    //     this.msg = null;
                    // }, 3000);
                })
        });

    }
}