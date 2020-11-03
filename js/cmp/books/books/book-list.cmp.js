import bookPreview from './book-preview.cmp.js'

export default {
    props: ['books'],
    template: `
    <section class="book-list">
        <h2 class="list-header">books</h2>
        <ul>
            <li v-for="book in books" :key="book.id">
                <book-preview :book="book" @click.native="selected(book.id)"/>
            </li>
        </ul>
        
        
    </section>
    `,
    data() {
        return {}
    },
    methods: {
        selected(bookId) {
            this.$router.push('/book/' + bookId)
        },
    },
    computed: {
        showDetails() {
            return this.isShowDetails;
        }
    },
    components: {
        bookPreview,
    }
}