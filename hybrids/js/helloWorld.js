import { define, html } from 'hybrids';

export const HelloWorld = {
  name: 'World',
  render: ({name}) => html`Hello, ${name}!`;
};

define('hello-world', HelloWorld);
