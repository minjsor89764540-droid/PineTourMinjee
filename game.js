// const star = document.getElementById("starContainer");
// const rightBtn = document.getElementById("rightBtn");
// const leftBtn = document.getElementById("lefttBtn");
// const vildel = document.getElementById("vildel");
// const bayrmaa = document.getElementById("bayrmaa");
// let starposition = 1;
// let vildliinToo = 0;
// buildTrack();
// function buildTrack() {
//   star.textContent = "";
//   for (num = 1; num <= 10; num++) {
//     if (num === starposition) {
//       star.textContent += "⭐️";
//     } else {
//       star.textContent += "🦷";
//     }
//   }
// }

// function moveStarRight() {
//   if (starposition < 10) {
//     starposition++;
//     vildliinToo++;

//     vildel.textContent = "Vildliin too :" + vildliinToo;
//     console.log(vildliinToo);
//     if (starposition === 10) {
//       bayrmaa.textContent = "Bayr hvrgey ta chadlaa👍🏼💐";
//     }
//   }
//   buildTrack();
// }
// function moveStarLeft() {
//   if (starposition > 1) {
//     starposition--;
//     vildliinToo++;
//     vildel.textContent = "Vildliin too :" + vildliinToo;
//     console.log(vildliinToo);
//   }
//   buildTrack();
// }
// function restart() {
//   bayrmaa.textContent = "";
//   starposition = 0;
//   vildliinToo = 0;
//   vildel.textContent = "Vildliin too :" + vildliinToo;
//   console.log(vildliinToo);
//   buildTrack();
// }
// const honh = document.getElementById("message");
// console.log(honh);

// function ring() {
//   honh.textContent = "🔔 Дин дон! Хэн нэгэн ирлээ";
// }
// const gerel = document.getElementById("light");
// const ulaan = document.getElementById("redButton");
// const shar = document.getElementById("yellowButton");
// const nogoon = document.getElementById("greenButton");
// function showRed() {
//   gerel.textContent = "🔴 Зогс";
// }
// function showYellow() {
//   gerel.textContent = "🟡 Бэлд";
// }
// function showGreen() {
//   gerel.textContent = "🟢 Яв";
// }
// const badge = document.getElementById("badge");
// const ner = document.getElementById("nameInput");
// function makeBadge() {
//   badge.textContent = "👋 Намайг" + " " + ner.value + " " + "гэдэг";
// }
// const ayga = document.getElementById("cup");
// const ner = document.getElementById("nameInput");
// const uuhZvil = document.getElementById("drinkInput");
// function order() {
//   ayga.textContent = ner.value + " " + "-" + " " + uuhZvil.value;
// }
// const result = document.getElementById("result");
// const nas = document.getElementById("ageInput");
// function nextYear() {
//   age = Number(nas.value) + 1;
//   result.textContent = "Ирэх жил" + result.textContent + age + "нас хүрнэ 🎉";
// }
// const likes = document.getElementById("likes");
// const too = document.getElementById("too");
// let people = 0;
// function like() {
//   people = people + 1;
//   likes.textContent = "❤️" + people;
// }
// const duu = document.getElementById("volume");
// const sul = document.getElementById("downButton");
// const changa = document.getElementById("upButton");
// let hogjim = 5;
// function volumeUp() {
//   hogjim = hogjim + 1;
//   duu.textContent = "🔊" + hogjim;
// }
// function volumeDown() {
//   hogjim = hogjim - 1;
//   duu.textContent = "🔊" + hogjim;
// }
// const buuznuuud = document.getElementById("order");
// console.log(addBuuz.textContent);
// let buuz = 0;
// function addBuuz() {
//   buuz = buuz + 1;

//   buuznuuud.textContent = buuz + " " + "бууз " + " . " + Number(buuz * 1500);
//   console.log(buuznuuud.textContent);
// }
// function clearOrder() {
//   buuznuuud.textContent = "🥟 0 бууз · 0₮";
// }
// const gerel = document.getElementById("lamp");
// let too = 0;

// function toggleLamp() {
//   too = too + 1;
//   if (too % 2 === 0) {
//     gerel.textContent = "💡 Асаалттай";
//   } else {
//     gerel.textContent = "🌑 Унтарсан";
//   }
// }
// const tseneg = document.getElementById("battery");
// const levelInput = document.getElementById("levelInput");
// function showBattery() {
//   const level = Number(levelInput.value);
//   if (level === 1) {
//     tseneg.textContent = "🔋 🟩⬜⬜⬜⬜";
//   } else if (level === 2) {
//     tseneg.textContent = "🔋 🟩🟩⬜️⬜️⬜️";
//   } else if (level === 3) {
//     tseneg.textContent = "🔋 🟩🟩🟩⬜⬜";
//   } else if (level === 4) {
//     tseneg.textContent = "🔋 🟩🟩🟩🟩⬜";
//   } else if (level === 0) {
//     tseneg.textContent = "🔋 ⬜⬜⬜⬜⬜";
//   } else {
//     tseneg.textContent = "🔋 🟩🟩🟩🟩🟩";
//   }
// }
// const cart = document.getElementById("cart");
// const product = document.getElementById("product");
// const quantity = document.getElementById("quantity");
// let niit = 1;
// function checkout() {
//   if ((niit = Number(product.value) * quantity.value)) {
//     cart.textContent = niit;
//   } else if (quantity.value >= 5) {
//     niit = (niit * 10) / 100;
//     cart.textContent = niit + " " + "(10% хөнгөлөлттэй)";
//   }
//   console.log(niit);
// }
//time dasgal 8////
// const ilgeeh = document.getElementById("status");
// function messageSending() {
//   ilgeeh.textContent = "✅ Илгээгдлээ";
// }
// function sendMessage() {
//   ilgeeh.textContent = "⏳ Илгээж байна… ";
//   setTimeout(messageSending, 2000);
// }
// const copyBtn = document.getElementById("copyButton");
// function copyCoding() {
//   copyBtn.textContent = "✅ Хуулагдлаа";
// }
// function copyCode() {
//   copyBtn.textContent = "📋 Хуулах";
//   setTimeout(copyCoding, 2000);
// }
// const kettle = document.getElementById("kettle");
// let current = 20;
// let isOn = false;
// let timer = 0;

// function heatWaterBy20() {
//   if (current < 100) {
//     current += 20;
//     kettle.textContent = "☕️" + current;
//   } else {
//     isOn = false;
//     clearInterval(timer);
//   }
// }

// function turnOn() {
//   if (isOn === false) {
//     isOn = true;
//     timer = setInterval(heatWaterBy20, 1000);
//   } else {
//     isOn = false;
//     clearInterval(timer);
//   }
// }
// const parking = document.getElementById("parking");
// const meter = document.getElementById("meter");
// let time = 0;
// let money = 0;
// let orGar = false;
// function enter() {
//   if (orGar === false) {
//     orGar = true;
//     time = setInterval(heree, 1000);
//   }
// }
// function heree() {
//   if ((orGar = true)) {
//     time++;
//     money += 100;
//     parking.textContent = `${time} second ${money}`;
//   }
// }
// function leave() {
//   orGar = false;
//   clearInterval(time);
//   parking.textContent = `${time} second ${money}`;
// }
