import headerLoad from './header-load.js';
import clock from '../media/clock.svg';
import mapMarker from '../media/map-marker.svg';

export default function contactLoad() {
    console.log('contactLoad() ran');   
    headerLoad();

    const content = document.querySelector('#content');

    let test = document.createElement('p');
    test.textContent = 'contact page loaded!';
    content.append(test);

    let div = document.createElement('div');
    let numLink = document.createElement('a');
    numLink.textContent = '(123)-456-7890';
    numLink.setAttribute('href', 'mailto: @gmail.com');
    div.append(numLink);


    content.append(div);

    //<a href = "mailto: abc@example.com">Send Email</a>
    //<a href="tel:5554280940">Call us at 555-428-0940</a>
}