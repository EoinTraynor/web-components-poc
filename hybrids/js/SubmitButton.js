// Importing this module registers <mwc-button> as an element that you
// can use in this page.
//
// Note this import is a bare module specifier, so it must be converted
// to a path using a server such as Web Dev Server.
import '@material/mwc-button';
// import '@material/mwc-textfield';

// Standard DOM APIs work with Web Components just like they do for
// built-in elements.
const button = document.querySelector('#myButton');
button.addEventListener('click', () => {
  alert('You clicked!');
});
