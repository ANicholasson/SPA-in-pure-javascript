// Materialize initialize stuff (TODO put into own init.js file)
M.Sidenav.init(document.querySelector('.sidenav'), {});
M.Materialbox.init(document.querySelector('.materialboxed'), {});
let instance = M.Carousel.init(document.querySelector('.carousel'), {
    fullWidth: true,
    indicators: true
});