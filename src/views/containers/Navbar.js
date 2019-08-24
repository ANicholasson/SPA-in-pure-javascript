import  { store } from '../../index.js';
import { logout } from '../../store/actions/authActions.js';

let linkItem = () => {
    return `<a>` + store.getState().email + `</a>`;
}

let Navbar = {
    render : async () => {
        return (/*html*/ `
            <nav class="blue">
                <div class="nav-wrapper container">
                    <a href="#" class="logo">Letærn</a>
                    <ul id="nav-mobile" class="right">
                        <li>` + linkItem() + /*html*/`</li>
                        <li><a href="/public/#/login" id="logout">Logout</a></li>
                    </ul>
                </div>
            </nav>
        `);
    },
    after_render : async () => {
        document.getElementById('logout').addEventListener('click', () => logout())
    }
}

export default Navbar;