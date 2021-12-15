import { define, html } from "hybrids";
import NestedCons from './NestedCons';
import NestedPros from './NestedPros';
import { commonStyles } from "./styles";
import { validateForm } from './utils/formUtils';

customElements.define("nested-pros", NestedPros);
customElements.define("nested-cons", NestedCons);


const formSubmission = async (host, event) => {
  event.preventDefault();
  const {firstName, lastName, email} = host;
  const isFormValid = await validateForm({firstName, lastName, email});
  if (isFormValid) {
    console.log('Form Submitted');
  } else {
    console.log('invalid form');
  }
}

// Nested Templates
const submit = (fn) => html`
  <button id="submit" type="submit" onclick=${fn}>Signup for a HubSpot Account</button>
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
    <div id="wrapper">
      <div id="subscribeBox">
        <h2><span class="thin">Web Components POC</span> Hybrids</h2>
        <p>The component model is based on plain objects and pure functions, still using the Web Components API under the hood</p>

        <nested-pros name="Pros"></nested-pros>
        <nested-cons name="Cons"></nested-cons>

        <form class="subscribeForm" name="Subscription Form" onsubmit="${formSubmission}">
          <label for="first-name">First Name</label>
          <input type="text" defaultValue="${firstName}" id="first-name" name="first-name" required onchange="${html.set('firstName')}">
          <label for="last-name">Last Name</label>
          <input type="text" defaultValue="${lastName}" id="last-name" name="last-name" required onchange="${html.set('lastName')}">
          <label for="email">Email</label>
          <input type="email" defaultValue="${email}" id="email" name="email" required onchange="${html.set('email')}">

          <!-- Nested Templates -->
          ${submit(clickCallback)}

        </form>
      </div> <!-- end subscribeBox -->
    </div> <!-- end subscribeBox -->
    <!-- External Stylesheets -->

    ${commonStyles}
  `
});
