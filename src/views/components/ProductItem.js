const ProductItem = (href, name, price, desc, img, dateCreated, seller) => {
    return (/*html*/`
        <div class="row product-item">
            <div class="col m3 s12 custom-wrapper valign-wrapper center-align add-height">
                <img class="product-img center-align materialboxed black-text" width="650" src="${img}" alt="image of product">
            </div>
            <a class="product-wrapper" href="#/product/${href}">
            <div class="col m9 s12">
                <div class="row">
                    <div class="col s12">
                        <p class="product-name black-text">${name}</p>
                        <p class="product-price black-text">${price} kr</p>
                        <p class="product-desc black-text">${desc}</p>
                        <p class="grey-text text-darken-3">Seller: ${seller}</p> 
                        <p class="grey-text text-darken-3">Date Created: ${dateCreated}</p>
                    </div>
                </div>
            </div>
            </a>
        </div>
    `);
}

export default ProductItem;
