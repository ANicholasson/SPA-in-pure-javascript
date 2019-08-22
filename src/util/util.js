const rootRender = (obj) => {
    document.getElementById('root').innerHTML = obj;
};

const renderContentWithNav = (content) => {
    document.getElementById('root').innerHTML = navbar() + '\n' + content;
};

const productItem = (img, name, price, desc) => {
    return (`
        <div class="row product-item">
            <div class="col m3 s12 custom-wrapper valign-wrapper center-align add-height">
                <img class="product-img materialboxed" width="650" src="` + img + `" alt="image of product">
            </div>
            <div class="col m9 s12">
                <div class="row">
                    <div class="col s12">
                        <p class="product-name">` + name + `</p>
                        <p class="product-price">` + price + ` kr</p>
                        <p class="product-desc">` + desc + `</p>
                    </div>
                </div>
            </div>
        </div>
    `);
}