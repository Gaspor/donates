const textKeyFlavia = document.getElementById("key_flavia");
const copyKeyFlavia = document.getElementById("copy_key_flavia");

const textKeyMoh = document.getElementById("key_moh");
const copyKeyMoh = document.getElementById("copy_key_moh");

const progressBar = document.getElementById("progress_bar");
const goal = (9000.00).toFixed(2);
const valueNow = donates.donates.map(donate => donate.value).reduce((acc, amount) => acc + amount).toFixed(2);
const percent = ((valueNow/goal) * 100).toFixed(2);

const valueInProgress = document.getElementById("value_now");
const labelValue = `R$${valueNow}/${goal}`;
valueInProgress.textContent = labelValue;

progressBar.style = `width: ${percent}%`;
progressBar.textContent = percent + "%";

copyKeyFlavia.addEventListener("click", () => {
    navigator.clipboard.writeText(textKeyFlavia.textContent);
});

copyKeyMoh.addEventListener("click", () => {
    navigator.clipboard.writeText(textKeyMoh.textContent);
});