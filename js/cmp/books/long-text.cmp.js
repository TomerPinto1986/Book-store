export default {
    props: ['txt'],
    template: `
    <section class="long-text">   
        <p>{{subTxt}}</p>
        <button @click="toggleShowMore">more...</button>
    </section>

    `,
    data() {
        return {
            isShowMore: false,
        }
    },
    methods: {
        toggleShowMore() {
            this.isShowMore = !this.isShowMore;
        }
    },
    computed: {
        subTxt() {
            if (this.isShowMore) return this.txt;
            return this.txt.substring(0, 100);
        }
    }
}