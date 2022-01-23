// We want to set it so as soon as you leave the field, validation occurs
// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

// Regular Expressions
// begins with / and ends with /
// ^ beginning of an input
// $ end of an input
// () used for grouping, {} used by a quantifier with specific limits [] define a character class

// Create functions  ADD the class of 'is-invalid' to activate bootstrap's 'invalid-feedback' text that we added
function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;
  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}
function validateZip() {
  const zip = document.getElementById("zip");
  // Note: The dash between the 5 and 4 digits (no \)
  // A question mark makes everything before it optional
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}
function validateEmail() {
  const email = document.getElementById("email");
  // emails can use lower case and upper case letters, numbers, underscore, dash, and period. Use \ to indicate that - is literal (allowed character).
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}
function validatePhone() {
  const phone = document.getElementById("phone");
  // allowed formats will be 10digits (nospaces), zip in parenthesis, space between, dash btwn all, dot between all
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  // \(? and \)? means parenthesis optional
  // [-. ]? means dash, dot or space are acceptable and optional
  // \d{3} means 3 digits, \d{4} means 4 digits
  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
