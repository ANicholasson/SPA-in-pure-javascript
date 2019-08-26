import Utils from '../../util/RouterUtils.js';
import { getPost } from '../../dummy/Posts.js';

let ProductPage = {
    render : async () => {
        let url = Utils.parseRequestURL();
        let post = getPost(url.id);

        return (/*html*/ `
            <div class="container">
                <div class="carousel-style">
                    <div class="row">
                    <!-- Prev Button -->
                    <div class="col s1 valign-wrapper carousel-btn">
                        <button>prev</button>
                    </div>
                    <!-- Carousel -->
                    <div class="col s10">
                        <div class="carousel carousel-slider center">
                            <div class="carousel-item red white-text" href="#one!">
                                <h2>First Panel</h2>
                                <p class="white-text">This is your first panel</p>
                            </div>
                            <div class="carousel-item amber white-text" href="#two!">
                                <h2>Second Panel</h2>
                                <p class="white-text">This is your second panel</p>
                            </div>
                            <div class="carousel-item green white-text" href="#three!">
                                <h2>Third Panel</h2>
                                <p class="white-text">This is your third panel</p>
                            </div>
                            <div class="carousel-item blue white-text" href="#four!">
                                <h2>Fourth Panel</h2>
                                <p class="white-text">This is your fourth panel</p>
                            </div>
                        </div>
                    </div>
                    <!-- Next Button -->
                    <div class="col s1 valign-wrapper carousel-btn">
                        <button>next</button>
                    </div>
                </div>
                <!-- Content Under Carousel -->
                <div class="product-section">
                    <a class="waves-effect green submit-btn waves-light btn-large">Buy</a>
                </div>
                <h3><b>${post.name}</b></h3>
                <h5><b>${post.price}</b></h5>
                <p class="product-desc">${post.desc}</p>
                <p class="grey-text text-darken-3">Seller: ${post.seller}</p> 
            </div>
        `);
    },
    after_render: async () => { }
}

export default ProductPage;