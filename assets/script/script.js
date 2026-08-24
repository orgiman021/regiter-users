const form = document.getElementById("Form");
const firstName = document.getElementById("nameInput");
const lastName = document.getElementById("lastNameInput");
const mail = document.getElementById("mailInput");
const job = document.getElementById("jobInput");
const phoneNumber = document.getElementById("phoneNumberInput");
const gender = document.getElementById("genderInput");
const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')
let users = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newPerson = {
    firstName : firstName.value.trim(),
    lastName : lastName.value.trim(),
    mail : mail.value.trim(),
    job : job.value.trim(),
    phoneNumber : phoneNumber.value.trim(),
    gender : gender.value
  }
  users.push(newPerson)
  form.reset();
})
