

export default function createImage(src, alt) {
    console.log('createImage function called');
    let img = document.createElement('img');
    img.setAttribute('src', src);
    //img.setAttribute('alt', alt);
    return img;
}