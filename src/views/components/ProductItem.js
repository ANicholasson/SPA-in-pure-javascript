const ProductItem = (href, img, name, price, desc, seller) => {
    return (/*html*/`
        <a class="product-wrapper" href="#/product/${href}">
            <div class="row product-item">
                <div class="col m3 s12 custom-wrapper valign-wrapper center-align add-height">
                    <img class="product-img materialboxed black-text" width="650" src="${img}" alt="image of product">
                </div>
                <div class="col m9 s12">
                    <div class="row">
                        <div class="col s12">
                            <p class="product-name black-text">${name}</p>
                            <p class="product-price black-text">${price} kr</p>
                            <p class="product-desc black-text">${desc}</p>
                            <p class="grey-text text-darken-3">Seller: ${seller}</p> 
                        </div>
                    </div>
                </div>
            </div>
        </a>
    `);
}

export default ProductItem;
