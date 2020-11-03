export default {
    template: `
    <section class="book-filter">
        <h2>Filter Books</h2>
        <input type="text" v-model="filterBy.title" placeholder="search" @input="emitFilter"/>
        <input type="number" v-model.number="filterBy.minPrice" placeholder="min-price" @input="emitFilter"/>
        <input type="number" v-model.number="filterBy.maxPrice" placeholder="max-price" @input="emitFilter"/>
        <hr/>
    </section>
    `,
    data() {
        return {
            filterBy: { title: '', minPrice: 0, maxPrice: Infinity }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        }
    }
}