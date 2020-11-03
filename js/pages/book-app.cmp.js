import { bookService } from '../services/book-service.js'
import bookList from '../cmp/books/book-list.cmp.js'
import bookFilter from '../cmp/books/book-filter.cmp.js'
import bookDetails from './book-details.cmp.js'
import { eventBus } from '../services/event-bus-service.js'


export default {
    template: `
    <section class="book-app">
        <book-filter v-if="isShowList" @doFilter="setFilter" class="container"/>
        <book-list class="book-list-container container" v-if="isShowList" :books="booksToShow" @onShowDetails="showDetails"  />
        <book-details v-else="isShowList" :book="getBookById" @closeDetails="closeDetails"/>

    </section>
    `,
    components: {
        bookList,
        bookFilter,
        bookDetails
    },
    data() {
        return {
            books: null,
            showBookId: null,
            isShowList: true,
            filterBy: null

        }
    },
    methods: {
        showDetails(bookId) {
            this.showBookId = bookId;
            this.isShowList = false;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        closeDetails() {
            console.log('closing');
            this.isShowList = true;
        }
    },
    computed: {
        getBookById() {
            return this.books.filter(book => book.id === this.showBookId)[0]
        },
        booksToShow() {
            if (!this.filterBy) return this.books;
            const txt = this.filterBy.title.toLowerCase();
            return this.books.filter(book => book.title.toLowerCase().includes(txt) &&
                (
                    book.listPrice.amount < this.filterBy.maxPrice &&
                    book.listPrice.amount > this.filterBy.minPrice
                )
            )
        }
    },
    created() {
        bookService.getBooks()
            .then(books => this.books = books)
    }





}