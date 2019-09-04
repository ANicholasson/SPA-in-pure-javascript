import ProductItem from '../components/ProductItem.js';
import { getAllPosts } from '../../dummy/Posts.js';

let Home = {
    render : async () => {
        return (/*html*/`
            <div class="container">
                <div class="row">
                    <div class="col s10">
                        <h1>Items for sale</h1>
                    </div>
                    <div class="col s2">
                        <div id="new-product-btn"></div>
                    </div>
                </div>
                <div id="posts-content"><div>
            </div>
        `);
    },
    after_render : async () => {
        const token = localStorage.getItem('token');
        let btn = '';
        if (token !== null) {
            btn = (/*html*/`
                <a href="/public/#/newproduct" class="btn-floating add-btn btn-large waves-effect waves-light red right">
                    <i class="material-icons">add</i>
                </a>
            `);
        }

        document.getElementById('new-product-btn').innerHTML = btn;

        let content = "";
        getAllPosts().forEach(post => {
            content += ProductItem(post.id, post.img[0], post.name, post.price, post.desc, post.seller);
        });
        document.getElementById('posts-content').innerHTML = content;
    }
}

export default Home;