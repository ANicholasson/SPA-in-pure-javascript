let listOfImages = [];

export function addImage(image) {
    listOfImages.push(image);
}

export function deleteImage(image) {
    listOfImages.splice(image, 1);
}

export function getAllImages() {
    return listOfImages; 
}

export function clearList() {
    listOfImages = [];
}