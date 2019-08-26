import { addToPosts, getNewId } from '../../dummy/Posts.js';
import  { store } from '../../index.js';

let NewProduct = {
    render : async () => {
        return (/*html*/ `
            <div class="container">
                <div class="new-product-form">
                    <h2 class="center-align">Add a new product</h2>
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="product_title" type="text">
                                    <label for="product_title">Product Title</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="product_price" type="number" class="validate">
                                    <label for="product_price">Product Price</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="product_desc" class="materialize-textarea"></textarea>
                                    <label for="product_desc">Product Description</label>
                                </div>
                            </div>
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span>File</span>
                                    <input type="file" multiple>
                                </div>
                                <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text" placeholder="Upload one or more files">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s6">
                                    <a id="new-product-btn" class="waves-effect green waves-light btn-large submit-btn">Add Product</a>
                                </div>
                                <div class="col s6">
                                    <a href="#" class="waves-effect red waves-light btn-large submit-btn">Cancel</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `);
    },
    after_render: async () => { 
        document.getElementById('new-product-btn').addEventListener("click", (event) => {
            event.preventDefault();
            let name = document.getElementById('product_title').value;
            let price = document.getElementById('product_price').value;
            let desc = document.getElementById('product_desc').value;
            let newPost = {
                id: getNewId(),
                name: name,
                price: price,
                desc: desc,
                seller: store.getState().email
            }
            addToPosts(newPost);
            window.location.replace("/public/#/");
        });
    }
}

export default NewProduct;