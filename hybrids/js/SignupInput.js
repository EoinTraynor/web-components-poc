import { define, html } from "hybrids";

function updateName(host, event) {
  host.name = event.target.value
}

export default define.compile({
  firstName: "",
  render: ({ name }) => html`
    <label for="first-name">First Name</label>
    <input type="text" defaultValue="${name}" id="first-name" name="first-name" required oninput=-"${updateFirstName}">
  `,
});
