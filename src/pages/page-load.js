import '../styles.css';
//media imports
import alc from '../media/alc.jpg';
import clock from '../media/clock.svg';
import mapMarker from '../media/map-marker.svg';
//function imports
import createImage from '../functions/create-image.js';
//page imports
import headerLoad from '../pages/header-load.js';

export default function pageLoad() {
    console.log('pageLoad() ran');
    
    const content = document.querySelector('#content');

    //header load
    headerLoad();

    //first div
    let firstDiv = document.createElement('div');
    firstDiv.classList.add('first-div');
    let para = document.createElement('p');
    para.textContent = "Morbi hendrerit convallis magna quis iaculis. Morbi convallis metus eget mattis elementum. Quisque id commodo elit. In vel sodales lorem. Fusce vulputate ante et fermentum placerat. Pellentesque ut metus augue. Aliquam erat volutpat. Vivamus ut nibh nunc. Nam nec urna rhoncus, aliquam ipsum in, eleifend libero. Nulla fermentum semper metus, nec fermentum tellus rhoncus id. Integer interdum id lectus sed mollis. Praesent orci quam, mattis at porta semper, ultricies quis purus. Quisque eu turpis id odio interdum rutrum.";

    firstDiv.append(para, createImage(alc, 'alcohol being poured'));

    content.append(firstDiv);

    //hours and address
    let hoursAndAddress = document.createElement('div');
    hoursAndAddress.classList.add('hours-and-address');

    let hours = document.createElement('div');
    hours.classList.add('hours');
    hours.append(createImage(clock, 'clock'));

    let ul2 = document.createElement('ul');
    let li4 = document.createElement('li');
    li4.textContent = 'Mon-Thurs: 6pm-9pm';
    let li5 = document.createElement('li');
    li5.textContent = 'Fri-Sun: 6pm-12am';
    
    ul2.append(li4,li5);
    hours.append(ul2);

    let address = document.createElement('div');
    address.classList.add('address');
    address.append(createImage(mapMarker, 'map marker'));

    
    content.append(hoursAndAddress);
    let para2 = document.createElement('p');
    para2.textContent = '218 Euclid Street Englishtown, NJ 07726';
    address.append(para2);


    hoursAndAddress.append(hours, address);
    console.log('page is actually loaged');
}
