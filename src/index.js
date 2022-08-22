import _ from 'lodash';
import pageLoad from './page-load';
import './styles.css';



console.log('Hello World');
const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);

/**function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');
 
    return element;
  }
 
  document.body.appendChild(component());*/

pageLoad();
