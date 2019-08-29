import Utils from '../../util/RouterUtils.js';
import { getPost } from '../../dummy/Posts.js';

let slideIndex = 1;

let ProductPage = {
    render : async () => {
        let url = Utils.parseRequestURL();
        let post = getPost(url.id);

        return (/*html*/ `
            <div class="container">
                <div class="carousel-style">
                    <div class="row">
                        <!-- Slideshow container -->
                        <div class="slideshow-container">

                        <div id="disp-slide"></div>

                        <!-- Next and previous buttons -->
                        <a id="prev-btn" class="prev">&#10094;</a>
                        <a id="next-btn" class="next">&#10095;</a>
                    </div>
                </div>
                <!-- Content Under Carousel -->
                <div class="product-section">
                    <a class="waves-effect green submit-btn waves-light btn-large">Buy</a>
                </div>
                <h3><b>${post.name}</b></h3>
                <h5><b>${post.price} kr</b></h5>
                <p class="product-desc">${post.desc}</p>
                <p class="grey-text text-darken-3">Seller: ${post.seller}</p> 
            </div>
        `);
    },
    after_render: async () => {
        let url = Utils.parseRequestURL();
        let post = getPost(url.id);
        let imgs = post.img;
        let dispImgs = '';
        for (let img in imgs) {
            dispImgs += createImg(imgs[img]);
        }
        document.getElementById('disp-slide').innerHTML = dispImgs;

        showSlides(slideIndex);

        document.getElementById('prev-btn').addEventListener('click', () => {
            showSlides(slideIndex += -1);
        });
        document.getElementById('next-btn').addEventListener('click', () => {
            showSlides(slideIndex += 1);
        });   
    },   
}

function createImg(img) {
    return (/*html*/`
        <div class="mySlides fade">
            <img src="` + img + `" style="width:100%">
        </div>
    `)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

export default ProductPage;