var gInterval;

export default {
    template: `
    <section class="about-page">
        <h1>About Us...</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, natus, tenetur voluptatem quasi repudiandae voluptates iste quod labore expedita, eveniet delectus deserunt alias deleniti odit mollitia ab id rerum officiis nisi corporis aliquam! Perspiciatis obcaecati voluptas debitis! Autem repellendus nostrum, recusandae laborum corporis officia cupiditate porro, cumque odio tenetur officiis illo temporibus in possimus tempora. Et, voluptate! Soluta recusandae tempore quae ullam quam harum incidunt, enim necessitatibus temporibus inventore neque eligendi quibusdam quia unde aliquid alias commodi tempora in hic architecto error voluptatibus accusamus! Consectetur reiciendis, minus quasi fugit beatae, aspernatur eaque omnis eum vel, a facilis. Facere, consequatur molestiae.</p>
        <img src="./img/about.png" alt="">
    </section>
    `,
    created() {
        gInterval = setInterval(() => console.log('about created'), 1000)
    },
    destroyed() {
        clearInterval(gInterval);
        console.log('!!!!!!!');
    }
}