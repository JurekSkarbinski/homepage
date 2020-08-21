let header__naglowek = document.querySelector(".header__naglowek")
let przycisk = document.querySelector(".header__przycisk");
przycisk.addEventListener("click", () => {
 ;
 header__naglowek.remove();
});
let wzrost = document.querySelector(".form1__field--wzrost");
let waga = document.querySelector(".form1__field--waga");
let formularz2 = document.querySelector(".js-form");
let bmiElement = document.querySelector(".js-bmi");

formularz2.addEventListener("submit", (event) => {
 event.preventDefault();
 let height = wzrost.value;
 let weight = waga.value;
 let bmi = weight / ((height / 100) ** 2);
 
bmiElement.innerText = bmi.toFixed(2);
 
})
