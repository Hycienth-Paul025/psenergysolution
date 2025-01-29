

emailjs.init("7V7OrweyRRnG4wlqU");

// script.js
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Initialize validation flag
  let isFormValid = true;

  // Name validation
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const nameParts = nameInput.value.trim().split(" ");
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    nameError.style.display = "block";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
    isFormValid = false;
  }
  else if (nameParts.length < 2) {
    nameError.textContent = "Please enter your full name (first and last name).";
    nameError.style.display = "block";
    nameInput.classList.add("error");
    nameInput.classList.remove("success");
    isFormValid = false;
  }
  else {
    nameError.style.display = "none";
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  }

  // Phone validation (11 digits required)
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");
  const phonePattern = /^[0-9]{11}$/;
  if (phoneInput.value.trim() === "" || !phonePattern.test(phoneInput.value)) {
    phoneError.textContent = "Phone number must be 11 digits.";
    phoneError.style.display = "block";
    phoneInput.classList.add("invalid");
    phoneInput.classList.remove("valid");
    isFormValid = false;
  } else {
    phoneError.style.display = "none";
    phoneInput.classList.add("valid");
    phoneInput.classList.remove("invalid");
  }

  // Email validation
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email address.";
    emailError.style.display = "block";
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
    isFormValid = false;
  } else {
    emailError.style.display = "none";
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
  }

  // Address validation
  const addressInput = document.getElementById("address");
  const addressError = document.getElementById("addressError");
  if (addressInput.value.trim() === "") {
    addressError.textContent = "Address is required.";
    addressError.style.display = "block";
    addressInput.classList.add("invalid");
    addressInput.classList.remove("valid");
    isFormValid = false;
  } else {
    addressError.style.display = "none";
    addressInput.classList.add("valid");
    addressInput.classList.remove("invalid");
  }

  // If the form is valid, you can submit it or proceed
  if (isFormValid) {
    emailjs.sendForm("service_e5qzot8", "template_xettf8k", this)
      .then(() => {
        window.location.href =  /* 'https://web3forms.com/success' */  'success.html';
        /*  alert("Form submitted successfully!"); */
        document.getElementById("contactForm").reset(); // Clear the form
      })

      .catch(error => {
        console.error('EmailJS Error:', error);
        formStatus.textContent = 'Failed to send your message. Please try again later.';
        formStatus.style.color = 'red';
      });
  }

});


// Reset form when page is loaded/revisited
window.onload = function () {
  document.getElementById("myForm").reset();
};


function goBack() {
  window.history.back();
};