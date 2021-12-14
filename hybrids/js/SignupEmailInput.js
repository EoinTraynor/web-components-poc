import { define, html } from "hybrids";

function updateName(host, event) {
  host.name = event.target.value
}

export default define.compile({
  email: "",
  render: ({ value }) => html`
    <label for="first-name">First Name</label>
    <input type="text" defaultValue="${value}" id="first-name" name="first-name" required oninput="${updateName}">
  `,
});
