import ProductItem from '../components/ProductItem.js';

let Home = {
    render : async () => {
        return (/*html*/`
            <div class="container">
                <h1>Items for sale</h1>
                ` + ProductItem("../../assets/img/exampleProd.jpg", "Bullshit Laptop x123", 4500, 
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
            
                + /*html*/`
                <!-- New Item Button -->
                <a href="/public/#/newproduct" class="btn-floating add-btn btn-large waves-effect waves-light red right"><i class="material-icons">add</i></a>
            </div>
        `);
    },
    after_render : async () => {}
}

export default Home;