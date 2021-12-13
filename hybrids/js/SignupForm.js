import { define, html } from "hybrids";
import SubmitButton from './SubmitButton';

customElements.define("submit-button", SubmitButton);

function formSubmission(host, event) {
  event.preventDefault();
  const {firstName, lastName, email} = host;
  console.log({firstName, lastName, email});
  // sendData('api.com/create', { value: host.value });
}

function updateFirstName(host, event) {
  host.firstName = event.target.value
}

export default define({
  tag: "hs-signup-form",
  name: '',
  firstName: '',
  lastName: '',
  email: '',
  render: ({name, firstName }) => html`
    <div>
      <h1>
        Hello, ${name}!
      <h1>
      <form onsubmit="${formSubmission}">
        <label for="first-name">First Name</label>
        <input type="text" defaultValue="${firstName}" id="first-name" name="first-name" required oninput="${updateFirstName}">
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
});
