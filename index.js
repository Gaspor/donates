const textPhoneFlavia = document.getElementById("phone_flavia");
const copyPhoneFlavia = document.getElementById("copy_phone_flavia");

const textPhoneMoh = document.getElementById("phone_moh");
const copyPhoneMoh = document.getElementById("copy_phone_moh");

copyPhoneFlavia.addEventListener("click", () => {
    navigator.clipboard.writeText(textPhoneFlavia.textContent);
});

copyPhoneMoh.addEventListener("click", () => {
    navigator.clipboard.writeText(textPhoneMoh.textContent);
});