import longText from '../cmp/books/long-text.cmp.js'
import { bookService } from '../services/book-service.js'
import reviewAdd from '../cmp/books/review-add.cmp.js'

export default {
    template: `
    <section v-if="book" class="book-details container">
        <div class="details-main-content">
            <div class="short-details">
                <h2 class="book-title"><span class="published">{{publishedDate}}</span>  {{book.title}}</h2> 
                <h2 class="on-sale">{{isOnSale}}</h2>
                <h3>Price: <span :class="priceColor">{{book.listPrice.amount}}</span> {{currencyIcon}}</h3>
                <img :src='book.thumbnail'/>
            </div>
            <div class="long-details">
                <h3>{{book.subtitle}}</h3>
                <h3>Author: {{book.authors}}</h3>
                <long-text :txt="book.description" />
                <h3>{{pageCount}}</h3>
                <h3>Categories: {{book.categories}}</h3>
                <h3>Language: {{book.language}}</h3>
            </div>
        </div>
        <review-add :book="book"/>
    </section>

    `,
    data() {
        return {
            book: null,
        }
    },
    destroyed() {
        console.log('Destroyed');
    },
    computed: {
        pageCount() {
            if (this.book.pageCount < 100) return 'Light Reading';
            if (this.book.pageCount > 200) return 'Decent Reading';
            if (this.book.pageCount > 500) return 'Long Reading';
        },
        publishedDate() {
            console.log(this.book, 'this book');
            if ((new Date().getYear() - this.book.publishedDate) < 1) return 'New!'
            if ((new Date().getYear() - this.book.publishedDate) > 10) return 'Veteran Book'
        },
        priceColor() {
            return { green: +this.book.listPrice.amount < 20, red: +this.book.listPrice.amount > 150 }
        },
        currencyIcon() {
            if (this.book.listPrice.currencyCode === 'EUR') return '€'
            if (this.book.listPrice.currencyCode === 'USD') return '$'
            return '₪'
        },
        isOnSale() {
            console.log(this.book, 'this book');
            if (this.book.listPrice.isOnSale) return 'ON SALE!'
        }
    },
    components: {
        longText,
        reviewAdd
    },
    created() {
        const bookId = this.$route.params.bookId
        bookService.getBookById(bookId)
            .then(book => this.book = book)

    }
}