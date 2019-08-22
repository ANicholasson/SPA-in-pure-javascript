// Set up router
const router = new Router();
// The different routes
router.get('/test', () => {
    console.log("You are on route /test!!");
});

router.get('/', function(req) {
    console.log("Your path:", req.path);
});
// Init
router.init();

const routes = {
    '/home/aronmn/Development/NTNU_MobDist/Oppgave1/public/index.html': homepage(),
    '/home/aronmn/Development/NTNU_MobDist/Oppgave1/public/index.html/test': '<h1>Hello World</h1>'
}

console.log(window.location.pathname);

document.getElementById('root').innerHTML = routes[window.location.pathname];

//window.onload = renderContentWithNav(newProduct());

// Materialize initialize stuff (TODO put into own init.js file)
M.Sidenav.init(document.querySelector('.sidenav'), {});
M.Materialbox.init(document.querySelector('.materialboxed'), {});
let instance = M.Carousel.init(document.querySelector('.carousel'), {
    fullWidth: true,
    indicators: true
});