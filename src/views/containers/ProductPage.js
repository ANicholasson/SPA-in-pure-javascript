import Utils from '../../util/RouterUtils.js';
import { getPost } from '../../dummy/Posts.js';

let slideIndex = 1;

let ProductPage = {
    render : async () => {
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
                <h3 id="post_name"><b></b></h3>
                <h5 id="post_price"><b> kr</b></h5>
                <p id="post_desc" class="product-desc"></p>
                <p id="post_seller" class="grey-text text-darken-3">Seller:</p> 
                <p id="post_date" class="grey-text text-darken-3">Seller: </p> 
            </div>
        `);
    },
    after_render: async () => {
        let url = Utils.parseRequestURL();
        fetch("http://localhost:8080/a2backend/api/" + url.id, {
            method: "POST"
        }).then(json => {
            console.log(json);
            return json.json();
        }).then(post => {
            document.getElementById("post_name").innerHTML = post.name;
            document.getElementById("post_price").innerHTML = post.price;
            document.getElementById("post_desc").innerHTML = post.desc;
            document.getElementById("post_seller").innerHTML = post.user.email;
            document.getElementById("post_date").innerHTML = post.dateCreated;
        });
        
        /* 
        let post = getPost(url.id);
        let imgs = post.img;
        let dispImgs = '';
        for (let img in imgs) {
            dispImgs += createImg(imgs[img]);
        } */
        document.getElementById('disp-slide').innerHTML = '<img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"/>';

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