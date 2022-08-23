import headerLoad from "./header-load.js";

export default function menuLoad() {
    headerLoad();
    const content = document.querySelector('#content');

    let div = document.createElement('div');
    div.classList.add('first-div')
    div.classList.add('menu');
    
    let para = document.createElement('p');
    para.textContent = 'Image of restaurant menu here';

    div.append(para);
    content.append(div);
}