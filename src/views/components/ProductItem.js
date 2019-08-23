const ProductItem = (img, name, price, desc) => {
    return (/*html*/`
        <div class="row product-item">
            <div class="col m3 s12 custom-wrapper valign-wrapper center-align add-height">
                <img class="product-img materialboxed" width="650" src="` + img + `" alt="image of product">
            </div>
            <div class="col m9 s12">
                <div class="row">
                    <div class="col s12">
                        <p class="product-name">` + name + /*html*/`</p>
                        <p class="product-price">` + price + /*html*/` kr</p>
                        <p class="product-desc">` + desc + /*html*/`</p>
                    </div>
                </div>
            </div>
        </div>
    `);
}

export default ProductItem;
