import { create } from "lodash";
import tabSwitch from "../functions/tab-switch.js";

import pageLoad from "./page-load.js";
import menuLoad from "./menu-load.js";
import contactLoad from "./contact-load.js";

export default function headerLoad() {
    const content = document.querySelector('#content');

    //header
    let header = document.createElement('header');

    let h1 = document.createElement('h1');
    h1.textContent = 'Restaurant Page';
    h1.addEventListener('click', function() {
        tabSwitch();
        pageLoad();
    });

    header.append(h1);

    let ul = document.createElement('ul');

    let li1 = createListBtn('Home', pageLoad);
    let li2 = createListBtn('Menu', menuLoad);
    let li3 = createListBtn('Contact', contactLoad)
    ul.append(li1, li2, li3);

    header.append(ul);
    content.append(header);
}

function createListBtn(text, tab) {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.textContent = text;
    btn.addEventListener('click', function() {
        tabSwitch();
        tab();
    });
    
    li.append(btn);
    return li;
}