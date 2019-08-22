/**
 * Router class
 */
class Router {

    constructor() {
        this.routes = [];
    }

    get(uri, callback) {
        // Ensure that the parameters are not empty
        if (!uri || !callback) throw new Error('uri or callback must be given');

        // Ensure that the parameters have the correct types
        if (typeof uri !== "string") throw new TypeError('typeof uri must be a string');
        if (typeof callback !== "function") throw new TypeError('typeof callback must be a function');
        // Throw an error if the route uri already exists to avoid confilicting routes
        this.routes.forEach(route => {
            if (route.uri === uri) throw new Error(`the uri ${route.uri} already exists`);
        });

        // Add route to the array of routes
        const route = {
            uri, // in javascript, this is the same as uri: uri, callback: callback, avoids repition
            callback
        }
        this.routes.push(route);
    }

    init() {
        this.routes.some(route => {

            let regEx = new RegExp(`^${route.uri}$`);
            let path = window.location.pathname;

            if (path.match(regEx)) {
                // Our route logic is true, return the corresponding callback

                let req = { path }
                return route.callback.call(this, req);
            }
        })
    }
}