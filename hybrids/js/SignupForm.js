import { define, html } from "hybrids";

export default define({
  tag: "hs-signup-form",
  name: '',
  render: ({name}) => html`
    <h1>
      Hello, ${name}!
    <h1>
  `,
});
