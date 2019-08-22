let ProductPage = {
    render : async () => {
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
                <h3><b>Product Title</b></h3>
                <h5><b>4500 kr</b></h5>
                <p class="product-desc">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                    sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
            </div>
        `);
    }
}

export default ProductPage;