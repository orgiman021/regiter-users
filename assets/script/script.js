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
// افزودن کاربران به لیست
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
// نمایش کاربران در لیست
document.getElementById("showUsers").addEventListener("click", () => {
  if (users.length <= 0) {
    modal.innerHTML = `<h3>هنوز کاربری ثبت نام نکرده است❌</h3>`;
  } else {
    modal.innerHTML = `<h3>لیست کاربران :</h3>`;
    const list = document.createElement("ul");

    users.forEach((personas, index) => {
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
  overlay.style.opacity = 1;
  overlay.style.visibility = "visible";
  modal.style.opacity = 1;
  modal.style.visibility = "visible";
});
// کنار گذاشتن مدال با کلبک در پس زمینه
overlay.addEventListener("click", () => {
  overlay.style.opacity = 0;
  overlay.style.visibility = "hidden";
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
});

//پیدا کردن با ایمیل

document.getElementById("findWithEmail").addEventListener("click", () => {
  const emailToFind = prompt("ایمیل فرد مورد نظر را وارد کنید : ");
  const person = users.filter((p) => p.mail === emailToFind.trim());
  if (person.length > 0) {
    let res = "کاربر مورد نظر پیدا شد✅";
    person.forEach((person, index) => {
      const { firstName, lastName, mail, job, phoneNumber, gender } = person;
      res += ` 
      ${index + 1} <p>نام : ${firstName}</p>
      <p>نام خانوادگی : ${lastName}</p>
      <p>ایمیل : ${mail}</p>
      <p>شغل : ${job}</p>
      <p>شماره تلفن : ${phoneNumber}</p>
      <p>جنسیت : ${gender}</p>
      `;
      modal.innerHTML = res;
    });
  } else {
    modal.innerHTML = `<h3>متاسفانه فرد مورد نظر یافت نشد❌</h3>`;
  }

  overlay.style.opacity = 1;
  overlay.style.visibility = "visible";
  modal.style.opacity = 1;
  modal.style.visibility = "visible";
});
// اطلاعات راجب شاغل بودن همه
document.getElementById("allWorker").addEventListener('click',()=>{
   users.every(p=>p.job.trim() !== "" )
   ? modal.innerHTML = "همه شاغل اند✅"
   : modal.innerHTML = "همه شاغل نیستند❌"

   
   overlay.style.opacity = 1;
   overlay.style.visibility = "visible";
   modal.style.opacity = 1;
  modal.style.visibility = "visible";
});
// بودن یک مرد حداقل بین ثبت نام کنندگان
document.getElementById("is1man").addEventListener('click',()=>{
  users.some(p=>p.gender == "آقا")
  ? modal.innerHTML = "بله مرد وجود دارد ✅"
  : modal.innerHTML = "خیر هیچ مردی وجود ندارد❌"

  overlay.style.opacity = 1;
  overlay.style.visibility = "visible";
  modal.style.opacity = 1;
  modal.style.visibility = "visible";
})

