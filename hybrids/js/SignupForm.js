import { define, html } from "hybrids";
import SubmitButton from './SubmitButton';
import { validateForm } from './utils/formUtils';

customElements.define("submit-button", SubmitButton);

const FORM_ENDPOINT = 'https://api.hubspotqa.com/signup/v1/';

const formSubmission = (host, event) => {
  event.preventDefault();
  const {firstName, lastName, email} = host;
  const isFormValid = validateForm({firstName, lastName, email});
  if (isFormValid) {
    console.log('Form Submitted');
  } else {
    console.log('invalid form');
  }
}

// Nested Templates
const submit = (fn) => html`
  <button type="submit" onclick=${fn}>Signup for a HubSpot Account</button>
`;
const clickCallback = (host, event) => {
  // Access to the host context of hs-signup-form
  console.log('clicked', {host, event});
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
        ${submit(clickCallback)}
      </form>
    </div>
  `,
});
