let listOfImages = [];

export function addImage(image) {
    listOfImages.push(image);
}

export function deleteImage(image) {
    listOfImages.pop(image);
}

export function getAllImages() {
    return listOfImages; 
}

export function clearList() {
    listOfImages = [];
}