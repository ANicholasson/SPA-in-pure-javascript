let Navbar = {
    render : async () => {
        return (/*html*/ `
            <nav class="blue">
                <div class="nav-wrapper container">
                    <a href="#!" class="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="">Username</a></li>
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="">Username</a></li>
            </ul>
        `);
    },
    after_render: async () => { }
}

export default Navbar;