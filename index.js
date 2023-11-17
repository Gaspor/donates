const textKeyFlavia = document.getElementById("key_flavia");
const copyKeyFlavia = document.getElementById("copy_key_flavia");

const textKeyMoh = document.getElementById("key_moh");
const copyKeyMoh = document.getElementById("copy_key_moh");

copyKeyFlavia.addEventListener("click", () => {
    navigator.clipboard.writeText(textKeyFlavia.textContent);
});

copyKeyMoh.addEventListener("click", () => {
    navigator.clipboard.writeText(textKeyMoh.textContent);
});