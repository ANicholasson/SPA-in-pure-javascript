import Home from './views/containers/Home';
import Login from '/views/containers/Login';
import Register from '/views/containers/Register';
import NewProduct from '/views/containers/NewProduct';
import ProductPage from '/views/containers/ProductPage';
import Navbar from '/views/containers/Navbar';

import RouterUtils from './util/RouterUtils';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/': Home,
    '/login': Login,
    '/register': Register,
    '/newProduct': NewProduct,
    '/product/:id': ProductPage
};

/**
 * The router code. Takes a URL, checks against the list of supported 
 * routes and then renders the corresponding content page.
 */
const router = async () => {
    // Lazy load view element:
    const content = null || document.getElementById('root');
    // Get the parsed URl from the addressbar
    let request = RouterUtils.parseRequestURL()
    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);