let listOfPosts = [
    {
        id: 0,
        name: 'Laptop x123C',
        img: {
            0: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWvQOl?ver=1b81&q=90&m=6&h=200&w=200&b=%23FFFFFFFF&f=jpg&o=f&aim=true',
            1: 'http://images.reevoo.com/offers/24624704/c8580908b6ddb82b353b99a27aefd587/200x200.jpg'
        },
        price: 4000,
        desc: 'Very sleek computer, little used. can verify microsoft license, it works, i promise',
        seller: 'toby123@hotmail.com'
    },
    {
        id: 1,
        name: 'Baby toy',
        img: {
            0: 'https://i.pinimg.com/originals/19/61/b6/1961b67cc8dc89b02a7047dee8b1b7a9.jpg'
        },
        price: 50,
        desc: 'sweet teddybear',
        seller: 'stevenmb@outlook.com'
    },
    {
        id: 2,
        name: 'Electric skateboard',
        img: {
            0: 'https://cdn11.bigcommerce.com/s-cam6oqe/images/stencil/1280x1280/products/5337/16357/boosted-mini-x__75055.1524253388.jpg?c=2?imbypass=on'
        },
        price: 1234,
        desc: 'Little used electric skateboard. Makes your kickflips more awesome. turbine turbo xx engine v12',
        seller: 'macaroni@sauce.tk'
    }
];

export function getAllPosts() {
    return listOfPosts;
}

export function addToPosts(post) {
    listOfPosts.push(post)
}

export function getPost(postId) {
    return listOfPosts[postId];
}

export function getNewId() {
    let lastPost = listOfPosts[listOfPosts.length - 1]
    return lastPost.id + 1;
}