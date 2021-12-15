import { define, html } from "hybrids";

export default define.compile({
  name: "",
  render: ({ name }) => html`
    <h3>${name}</h3>
    <ul>
      <li>
        Native store for state management
      </li>
      <li>
        Native Router for global navigation
      </li>
      <li>
        Data binding pretty straightforward.
      </li>
      <li>
        Support for Scoped Styles, Nested Template Styles and External Stylesheets
      </li>
      <li>
        Support for TypeScript
      </li>
    </ul>
  `,
});
