import { myRouter } from './routes.js'
// import { eventBus } from './services/event-bus-service.js'
import userMsg from './cmp/user-msg.cmp.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="main-app">
            <div class="main-container">
                <header class="main-header">
                    <h1 class="container">Miss Book</h1>
                </header>
                <div class="main-app-container">
                    <nav>
                        <router-link to="/" >Home</router-link>|
                        <router-link to="/book" >book App</router-link>|
                        <router-link to="/about" >About</router-link>|
                    </nav>
                    <main>
                        <router-view></router-view>
                    </main>
                    <user-msg />
                </div>
                <footer><small>Coofee Rights 2020</small></footer>
            </div>

        </section>
    `,
    components: {
        userMsg
    }
}

const app = new Vue(options)