let listOfPosts = [
    {
        id: 0,
        name: 'Laptop x123C',
        img: '',
        price: 4000,
        desc: 'Very sleek computer, little used. can verify microsoft license, it works, i promise',
        seller: 'toby123@hotmail.com'
    },
    {
        id: 1,
        name: 'Baby toy',
        img: '',
        price: 50,
        desc: 'sweet teddybear',
        seller: 'stevenmb@outlook.com'
    },
    {
        id: 2,
        name: 'Electric skateboard',
        img: '',
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