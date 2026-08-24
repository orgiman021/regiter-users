const form = document.getElementById("Form");
const firstName = document.getElementById("nameInput");
const lastName = document.getElementById("lastNameInput");
const mail = document.getElementById("mailInput");
const job = document.getElementById("jobInput");
const phoneNumber = document.getElementById("phoneNumberInput");
const gender = document.getElementById("genderInput");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const errorMsg = document.getElementById("errorMsg");
let users = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newPerson = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    mail: mail.value.trim(),
    job: job.value.trim(),
    phoneNumber: phoneNumber.value.trim(),
    gender: gender.value,
  };
  if (!firstName.value || !lastName.value || !mail.value) {
    errorMsg.innerHTML = "لطفا نام و نام خانوادگی و ایمیل را وارد نمایید";
    return;
  } else {
    errorMsg.innerHTML = "";
    users.push(newPerson);
    form.reset();
  }
});
document.getElementById("showUsers").addEventListener("click", () => {
  if (users.length <= 0) {
    modal.innerHTML = `<h3>هنوز کاربری ثبت نام نکرده است❌</h3>`;
  } else {
    modal.innerHTML = `<h3>لیست کاربران :</h3>`;
    const list = document.createElement("ul");

    users.map((personas, index) => {

      const { firstName, lastName, mail, job, phoneNumber, gender } = personas;
      const li = document.createElement("li");
      li.innerText = `${index + 1} .  نام : ${firstName}
      نام خانوادگی : ${lastName}
      ایمیل : ${mail}
      شغل : ${job || "---"}
      شماره تلفن : ${phoneNumber || "---"}
      جنسیت : ${gender || "---"}
      `;
      list.appendChild(li);
    });
    modal.appendChild(list);
  }

  overlay.style.opacity = 1
  overlay.style.visibility ="visible"
  modal.style.opacity = 1
  modal.style.visibility ="visible"
});

overlay.addEventListener('click',()=>{
  
  overlay.style.opacity = 0
  overlay.style.visibility ="hidden"
  modal.style.opacity = 0
  modal.style.visibility ="hidden"
})