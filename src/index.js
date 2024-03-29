import Home from './views/containers/Home.js';
import Login from './views/containers/Login.js';
import Register from './views/containers/Register.js';
import NewProduct from './views/containers/NewProduct.js';
import ProductPage from './views/containers/ProductPage.js';
import Navbar from './views/containers/Navbar.js';
import Error404 from './views/containers/Error404.js';

import RouterUtils from './util/RouterUtils.js';

import authReducer from './store/reducers/reducer.js';

import { authCheckState } from './store/actions/authActions.js';

// Create redux store
export let store = Redux.createStore(authReducer);

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/': Home,
    '/login': Login,
    '/register': Register,
    '/newproduct': NewProduct,
    '/product/:id': ProductPage
};

/**
 * The router code. Takes a URL, checks against the list of supported 
 * routes and then renders the corresponding content page.
 */
const router = async () => {
    // Lazy load view element:
    const navbar = null || document.getElementById('navbar');
    const content = null || document.getElementById('root');
    // Get the parsed URl from the addressbar
    let request = RouterUtils.parseRequestURL()
    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404

    // Get token from localhost
    const token = localStorage.getItem('token');
    // Condition for accessing routes
    if (parsedURL !== '/login' && parsedURL !== '/register' && page !== Error404 && parsedURL !== '/') {
        // See if user is logged in
        if (token === null) {
            window.location.replace('/public/#/login');
            content.innerHTML = await page.render();
            await page.after_render();
        }
    }

    if (parsedURL === '/login' || parsedURL === '/register' || page === Error404) {
        // See if user is logged in
        if (token !== null) {
            window.location.replace('/public/#/');
        }
        navbar.innerHTML = "";
        document.getElementsByTagName("body")[0].classList.add("background");
    } else {
        navbar.innerHTML = await Navbar.render();
        await Navbar.after_render();
        document.getElementsByTagName("body")[0].classList.remove("background");
    }

    content.innerHTML = await page.render();
    await page.after_render();
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);

// On page load, see if user is logged in
window.onload = authCheckState();