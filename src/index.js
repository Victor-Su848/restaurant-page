import _ from 'lodash';
import pageLoad from './pages/page-load';
import './styles.css';



console.log('Hello World');
const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);



pageLoad();
