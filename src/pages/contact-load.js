import headerLoad from './header-load.js';
import clock from '../media/clock.svg';
import mapMarker from '../media/map-marker.svg';
import { create } from 'lodash';

export default function contactLoad() {
    console.log('contactLoad() ran');   
    headerLoad();

    const content = document.querySelector('#content');

    

    let div = document.createElement('div');
    div.classList.add('num-and-email');


    
    div.append(createLink('(123)-456-7890', 'tel:1234567890'));
    div.append(createLink('Email us!', 'mailto: @gmail.com'));

    content.append(div);

    //<a href = "mailto: abc@example.com">Send Email</a>
    //<a href="tel:5554280940">Call us at 555-428-0940</a>
}

function createLink(text, href) {
    let link = document.createElement('a');
    link.textContent = text;
    link.setAttribute('href', href);
    return link;
}