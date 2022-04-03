const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validationName() {
  const name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerText = `Name is required`;
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerText = `Write full name`;
    return false;
  }
  nameError.innerHTML = `<i class="fas fa-circle-check"></i>`;
  return true;
}

function validationPhone() {
  const phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerText = `Phone is required`;
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerText = `Phone no should be 10 digits`;
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = `Only digits please`;
    return false;
  }
  phoneError.innerHTML = `<i class="fas fa-circle-check"></i>`;
  return true;
}

function validationEmail() {
  const email = document.getElementById("contact-email").value;
  
  if (email.length == 0) {
      emailError.innerText = `Email is required`;
      return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerText = `Email Invalid`;
        return false;
    }
    emailError.innerHTML = `<i class="fas fa-circle-check"></i>`;
    return true;
}



function validationMessage(){
    const message = document.getElementById("contact-message").value;

}