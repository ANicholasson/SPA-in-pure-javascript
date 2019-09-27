import { addToPosts, getNewId } from '../../dummy/Posts.js';
import  { store } from '../../index.js';
import { getAllImages, deleteImage, addImage, clearList } from '../../dummy/Images.js';

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
                                    <input id="product_title" type="text" required/>
                                    <label for="product_title">Product Title</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="product_price" type="number" class="validate" required/>
                                    <label for="product_price">Product Price</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="product_desc" class="materialize-textarea" required></textarea>
                                    <label for="product_desc">Product Description</label>
                                </div>
                            </div>
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span>File</span>
                                    <input id="file-input" type="file" multiple>
                                </div>
                                <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text" placeholder="Upload one or more files">
                                </div>
                            </div>
                            <div class="image-container">
                                <div class="row">
                                    <div id="images-to-show" class="col s12 "></div>
                                </div>
                                <div class="row">
                                    <div class="col s12">
                                        <div class="row inline-btns right">
                                            <div class="col s6">
                                                <a id="clear-btn" class="waves-effect blue waves-light btn-large submit-btn">Clear</a>
                                            </div>
                                            <div class="col s6">
                                                <a id="delete-btn" class="waves-effect red waves-light btn-large submit-btn">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col s12 m6 mb">
                                    <a type="submit" id="new-product-btn" class="waves-effect green waves-light btn-large submit-btn">Add Product</a>
                                </div>
                                <div class="col s12 m6">
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
        // File input change
        let fileArr = document.getElementById('file-input').files;
        
        document.getElementById('delete-btn').addEventListener('click', () => {
            let images = document.getElementsByClassName('img-preview');
            let imgArr = [];
            Array.from(images).forEach((img) => {
                imgArr.push(img);
            });
            imgArr.forEach(img => {
                img.addEventListener('click', () => {
                    deleteImage(imgArr.indexOf(img));

                    let fileListToSend = [];
                    Array.from(fileArr).forEach(file => { 
                        fileListToSend.push(file);
                    });
                    // Delete file from new array
                    fileListToSend.splice(imgArr.indexOf(img), 1);

                    fileArr = fileListToSend;

                    console.log(fileListToSend);

                    console.log(fileArr);
                    let content = '';
                    getAllImages().forEach(img => {
                        content += previewImage(img);
                    })
                    document.getElementById("images-to-show").innerHTML = content;
                })
            });
        });

        document.getElementById('file-input').addEventListener('change', () => {
            // File input change
            fileArr = document.getElementById('file-input').files;
            console.log(fileArr);
            clearList();
            for (let i = 0; i < fileArr.length; i++) {
                setupReader(fileArr[i]);
            }
        })

        // On Submit
        document.getElementById('new-product-btn').addEventListener("click", (event) => {
            event.preventDefault();
            let name = document.getElementById('product_title').value;
            let price = document.getElementById('product_price').value;
            let desc = document.getElementById('product_desc').value;
            let arr = {}
            if (getAllImages().length === 0) {
                arr[0] = 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081';
            } else {
                for (let img in getAllImages()) {
                    arr[img] = getAllImages()[img];
                }
            }
            
            let formData = new FormData();
            formData.append("name", name);
            formData.append("price", price);
            formData.append("desc", desc);
            formData.append("seller", store.getState().email);
            if (fileArr) {
                for (let i = 0; i < fileArr.length; i++) {
                    formData.append("image", fileArr[i]);
                }
            }

            /* Old but gold
            let newPost = {
                id: getNewId(),
                name: name,
                img: fileArr,
                price: price,
                desc: desc,
                seller: store.getState().email
            } */
            if (name.trim(' ') !== '' && price !== '' && desc.trim(' ' !== '')) {
                //addToPosts(newPost);
                fetch("http://localhost:8080/a2backend/api/create-post-with-images", {
                    method: "POST",
                    credentials: 'include',
                    body: formData
                }).then(response => {
                    console.log(response);
                    clearList();
                    window.location.replace("/public/#/");
                });
            }
        });

        // On Clear
        document.getElementById('clear-btn').addEventListener('click', () => {
            fileArr = [];
            clearList();
            document.getElementById("images-to-show").innerHTML = '';
        });
    }
}

function setupReader(file) {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
        let imgSrc = reader.result;
        addImage(imgSrc);
        let content = '';
        getAllImages().forEach(img => {
            content += previewImage(img);
        })
        document.getElementById("images-to-show").innerHTML = content;
    });
    if (file) {
        reader.readAsDataURL(file);
    }  
}

function previewImage(image) {
    return (/*html*/`
        <img class="img-preview" src="` + image + `" alt="Preview Image">
    `);
}

export default NewProduct;