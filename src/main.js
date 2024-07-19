const form = document.getElementById("form");
const emailErrorMessageElement = document.getElementById("email-error-text");
const input_field = document.getElementById("email-input");
const reg_card = document.getElementById("reg-card");
const success_card = document.getElementById("success-card");
const correct_email_text = document.getElementById("correct-email-text");

function handleSubmit(e) {
  e.preventDefault(); // prevent the default behaviour

  const formData = new FormData(e.target);
  const formDataObject = Object.fromEntries(formData.entries());
  const email = formDataObject.email;

  const emailErrorMessage = validateEmail(email);
  if (emailErrorMessage) {
    emailErrorMessageElement.innerText = emailErrorMessage;
    input_field.classList.add("bg-[#FFE8E6]");
    input_field.classList.add("border-red-400");
  } else {
    reg_card.classList.add("hidden");
    success_card.classList.remove("hidden");
    correct_email_text.innerText = `${email}.`;
  }
}

form.addEventListener("submit", handleSubmit);

function validateEmail(email) {
  if (!email) return "Valid email required";

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!isValidEmail.test(email)) {
    return "Please enter a valid email";
  }

  return "";
}
