// const firstName = document.getElementById("firstName");
// const lastName = document.getElementById("lastName");
// const hariu = document.getElementById("hariu");

// function showName() {
//   const buten = "Сайн уу!" + " " + firstName.value + " " + lastName.value;
//   greeting.textContent = buten;
// }
// const nameInput = document.getElementById("nameInput");
// const yearInput = document.getElementById("yearInput");
// const cardName = document.getElementById("cardName");
// const cardAge = document.getElementById("cardAge");

// function updateCard() {
//   cardName.textContent = nameInput.value;
//   const a = 2026 - Number(yearInput.value);
//   cardAge.textContent = a;
// }
// const billInput = document.getElementById("billInput");
// const tipInput = document.getElementById("tipInput");
// const peopleInput = document.getElementById("peopleInput");
// const tip = document.getElementById("tip");
// const total = document.getElementById("total");
// const each = document.getElementById("each");

// function split() {
//   const gariinMungu = (Number(billInput.value) * Number(tipInput.value)) / 100;
//   const niit = Number(billInput.value) + Number(gariinMungu);
//   const negHun = Number(niit) / Number(peopleInput.value);
//   console.log(gariinMungu, niit, negHun);
//   tip.textContent = " Gariin Mungu: " + gariinMungu;
//   total.textContent = " Niit: " + niit;
//   each.textContent = " Neg hun: " + negHun;
// }
// const urt = document.getElementById("lengthInput");
// const orgon = document.getElementById("widthInput");
// const ondor = document.getElementById("heightInput");
// const m2BudahVne = document.getElementById("priceInput");
// const hanaTalbai = document.getElementById("wallArea");
// const shalTalbai = document.getElementById("floorArea");
// const budVne = document.getElementById("cost");
// function calculate() {
//   const haniinTalbaiOloh =
//     2 * (Number(urt.value) + Number(orgon.value)) * Number(ondor.value);
//   const shalniiTalbaiOloh = Number(urt.value) * Number(orgon.value);
//   const budgiinVneOloh = Number(m2BudahVne.value) * haniinTalbaiOloh;
//   console.log(budgiinVneOloh);
//   console.log(shalniiTalbaiOloh);
//   console.log(haniinTalbaiOloh);
//   hanaTalbai.textContent = " Haniin talbai: " + haniinTalbaiOloh;
//   shalTalbai.textContent = " Shalnii talbai: " + shalniiTalbaiOloh;
//   cost.textContent = "Budgiin une ?: " + budgiinVneOloh;
// }
// const ajiltniiNer = document.getElementById("nameInput");
// const tsagiinHols = document.getElementById("wageInput");
// const ajliinTsag = document.getElementById("hoursInput");
// const hedenOdor = document.getElementById("daysInput");
// const tatwar = document.getElementById("taxInput");
// const ajiltan = document.getElementById("slipName");
// const niitTsalin = document.getElementById("gross");
// const tatwarText = document.getElementById("tax");
// const gartOlgoh = document.getElementById("net");
// function makeSlip() {
//   const niitTsalinOloh =
//     Number(tsagiinHols.value) *
//     Number(ajliinTsag.value) *
//     Number(hedenOdor.value);
//   const tatwarOloh = (niitTsalinOloh * Number(tatwar.value)) / 100;
//   const gartOchih = niitTsalinOloh - tatwarOloh;
//   console.log(gartOchih);
//   console.log(tatwarOloh);
//   console.log(niitTsalinOloh);
//   ajiltan.textContent = "Ajiltan:" + " " + ajiltniiNer.value;
//   tatwarText.textContent = "Tatwar:" + " " + tatwarOloh;
//   niitTsalin.textContent = "Niit tsalin:" + " " + niitTsalinOloh;
//   gartOlgoh.textContent = "Gart ochih: " + " " + gartOchih;
// }
// const garchig = document.getElementById("title");
// const tugrug = document.getElementById("tugrikInput");
// const dollar = document.getElementById("usd");
// const yani = document.getElementById("cny");
// function exchange() {
//   const dollarTogrog = Number(tugrug.value) * 3500;
//   const yaniTogrog = Number(tugrug.value) * 500;
// dasgal1
// }
// const age = document.getElementById("ageInput");
// const nasInput = document.getElementById("result");
// function check() {
//   if (Number(age.value) >= 21) {
//     nasInput.textContent = "orj bolno";
//   } else {
//     nasInput.textContent = "haalgaa gadnaas ni haa";
//   }
// }
// const nuutsVgOruulah = document.getElementById("result");
// const nuutsVg = document.getElementById("passwordInput");
//  const a = "pinecone";
// function login() {
//   if (a === nuutsVg.value) {
//     nuutsVgOruulah.textContent = "Нэвтэрлээ 🎉";
//   } else {
//     nuutsVgOruulah.textContent = "Нууц үг буруу ❌";
//   }
// }
// const ihNi = document.getElementById("result");
// const firstNumber = document.getElementById("firstInput");
// const secondNumber = document.getElementById("secondInput");
// function compare() {
//   const a = Number(firstNumber.value);
//   const b = Number(secondNumber.value);
//   if (a > b) {
//     ihNi.textContent = "Их нь" + " " + Number(firstNumber.value);
//   } else {
//     ihNi.textContent = "Их нь" + " " + Number(secondNumber.value);
//   }
// }
// const dvn = document.getElementById("result");
// const onoo = document.getElementById("scoreInput");
// function grade() {
//   const awsanOnoo = Number(onoo.value);
//   if (awsanOnoo >= 90) {
//     dvn.textContent = "A";
//   } else if (awsanOnoo >= 80) {
//     dvn.textContent = "B";
//   } else if (awsanOnoo >= 70) {
//     dvn.textContent = "C";
//   } else if (awsanOnoo >= 60) {
//     dvn.textContent = "D";
//   } else {
//     dvn.textContent = "F";
//   }
// }
// const nas = document.getElementById("ageInput");
// const tasalbar = document.getElementById("result");
// function price() {
//   const nasniiToo = Number(nas.value);
//   if (nasniiToo <= 4) {
//     tasalbar.textContent = "Тасалбар:" + " " + "Unegvi";
//   } else if (nasniiToo <= 12) {
//     tasalbar.textContent = "Тасалбар:" + " " + "5000";
//   } else if (nasniiToo <= 60) {
//     tasalbar.textContent = "Тасалбар:" + " " + "10000";
//   } else tasalbar.textContent = "Тасалбар:" + " " + "3000";
// }
// const result = document.getElementById("result");
// const odor = document.getElementById("dayInput");
// function checkDay() {
//   const garagiinOdor = Number(odor.value);
//   if (garagiinOdor >= 1 && garagiinOdor <= 5) {
//     result.textContent = "Ажлын өдөр 💼";
//   } else if (garagiinOdor <= 7) {
//     result.textContent = "Амралтын өдөр 🎉";
//   } else result.textContent = "1-ээс 7 хүртэл тоо бич";
// }
let i = 1;
