import bookApp from './pages/book-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import aboutPage from './pages/about-page.cmp.js';


const myRoutes = [{
        path: '/book',
        component: bookApp
    },
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
]

export const myRouter = new VueRouter({ routes: myRoutes })