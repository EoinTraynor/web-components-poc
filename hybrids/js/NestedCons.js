import { define, html } from "hybrids";

export default define.compile({
  name: "",
  render: ({ name }) => html`
    <h3>${name}</h3>
    <ul>
      <li>
        Essentially just a wrapper on top of customElements
      </li>
      <li>
        Strongly opinionated, little scope differing patterns
      </li>
      <li>
        The abstraction layer makes it more difficult to work with the DOM directly
      </li>
      <li>
        Doesn't have a broad developer community
      </li>
    </ul>
  `,
});
