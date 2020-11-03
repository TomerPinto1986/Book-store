export default {
    props: ['book'],
    template: `
    <section class="book-preview">
        <h2 class="book-title">{{book.title}}</h2> 
        <h3>Price: <span :class="priceColor">{{book.listPrice.amount}}</span> {{currencyIcon}}</h3>
        <h2 class="on-sale">{{isOnSale}}</h2>
        
    </section>

    `,
    data() {
        return {

        }
    },
    computed: {
        currencyIcon() {
            if (this.book.listPrice.currencyCode === 'EUR') return '€'
            if (this.book.listPrice.currencyCode === 'USD') return '$'
            return '₪'
        },
        isOnSale() {
            if (this.book.listPrice.isOnSale) return 'ON SALE!'
        },
        priceColor() {
            return { green: +this.book.listPrice.amount < 20, red: +this.book.listPrice.amount > 150 }
        }
    }
}