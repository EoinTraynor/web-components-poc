import { define, html } from "hybrids";
import SubmitButton from './SubmitButton';

customElements.define("submit-button", SubmitButton);

function formSubmission(host, event) {
  event.preventDefault();
  const {firstName, lastName, email} = host;
  console.log({firstName, lastName, email});
  // sendData('api.com/create', { value: host.value });
}

export default define({
  tag: "hs-signup-form",
  firstName: '',
  lastName: '',
  email: '',
  render: ({ firstName, lastName, email }) => html`
    <div>
      <form onsubmit="${formSubmission}">
        <label for="first-name">First Name</label>
        <input type="text" defaultValue="${firstName}" id="first-name" name="first-name" required onchange="${html.set('firstName')}">
        <label for="first-name">First Name</label>
        <input type="text" defaultValue="${lastName}" id="last-name" name="last-name" required onchange="${html.set('lastName')}">
        <label for="email">Email</label>
        <input type="email" defaultValue="${email}" id="email" name="email" required onchange="${html.set('email')}">
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
});
