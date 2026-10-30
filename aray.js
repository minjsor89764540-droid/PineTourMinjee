//dasgal1
// const days = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"];
// console.log ( days[0]);
// console.log(days[2]);
// console.log(days[6]);
// console.log(days.length - 1);
//dasgal2
// const songs = ["Өглөө", "Хавар", "Тал нутаг", "Бороо", "Од"];
// let current = 2;
// console.log(`› ⏮ Өмнөх: ${songs[current - 1]}`);
// console.log(`› ▶️ Одоо:${songs[current + 0]}`);
// console.log(`› ⏭ Дараагийн: ${songs[current + 1]}`);
//dasgal3
// const students = ["Бат", "Сараа", "Тэмүүлэн", "Ану", "Болд"];
// let current = 1;
// for (i = 0; i < students.length; i++) {
//   console.log(`${i + 1}. ${students[i]}`);
// }
//dasgal4
// const menu = ["Цуйван", "Хуушуур", "Банштай шөл", "Гурилтай шөл"];
// menu[2] = "buuz";
// console.log(menu);
//dasgal5
// const scores = [85, 92, 78, 64, 96, 80];
// let sum = 0;
// for (let i = 0; i, scores.length; i++) {
//   sum = sum + scores[i];
//   console.log(sum);
// }
// console.log(sum / scores.length);
//dasgal6
// const days = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан"];
// const temps = [-12, -18, -25, -9, -15];
// for (let i = 0; i < days.length; i++) {
//   if (temps[i - 1] > temps[i + 1]) {
//     console.log(days[i + 1] + temps[i + 1]);
//   }
// }
//dasgal7
// const votes = ["Бат", "Сараа", "Бат", "Ану", "Бат", "Сараа", "Ану", "Бат"];
// let count = 0;
// for (let i = 0; i < votes.length; i++) {
//   if (votes[i] === "Бат") {
//     count++;
//   }
// }

// console.log("Bat oldson too: ", count, "Niit: ", votes.length);
//dasgal8
// const bus = ["Бат", "Сараа", "Тэмүүлэн", "Ану"];
// for (let i = bus.length - 1; i >= 0; i--) {
//   console.log("🚪" + bus[i] + " " + "буулаа");
// }
//dasgal9
// const shelf = ["🍎", "🥛", "🍞", "🧀", "🍌", "🥚"];
// const wanted = "🧀";
// for(let i = -1; i<shelf.length ; i)
// function greetByHour(name, hour) {
//   if (hour > 6 && hour<12) {
//     console.log("☀️ Өглөөний мэнд, ", `${name}`);
//   } else if ( hour <18) {
//     console.log("🌤 Өдрийн мэнд ,", `${name}`);
//   } else {
//     console.log("🌙 Оройн мэнд ,", `${name}`);
//   }
// }

// greetByHour("Бат", 9);
// greetByHour("Сараа", 14);
// greetByHour("Ану", 20);

// function stars(count) {
//   let result = "";
//   for (let i = 0; i < count; i++) {
//     result = result + "⭐️";
//   }
//   console.log(result);
// }
// stars(3);
// stars(5);
// stars(1);
// function countdown(from) {
//   for (let i = from; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("hoorloo");
// }
// countdown(3);
// countdown(1);
// function ticketPrice(age) {
//   if (age < 6) {
//     console.log("unegvi");
//   } else if (age < 18) {
//     console.log("3000");
//   } else if (age > 18 && age < 60) {
//     console.log("6000");
//   } else {
//     console.log("2000");
//   }
// }
// ticketPrice(4);
// ticketPrice(12);
// ticketPrice(30);
// ticketPrice(65);
// function table(undsenToo, urjver) {
//   for (let i = 1; i <= urjver; i++) {
//     console.log(`${undsenToo} x ${i} = ${undsenToo * i}`);
//   }
// }
// table(8, 3);
// table(5, 2);
// function evens(from, to) {
//   let box = "";
//   for (let i = from; i <= to; i++) {
//     if (i % 2 === 0) {
//       box = box + ", " + i;
//     }
//   }
//   console.log(box);
// }
// evens(1, 10);
// evens(15, 20);
// function countDivisible(n, d) {
//   let box = "";
//   for (let i = 1; i <= n; i++) {
//     if (i % d === 0) {
//       box++;
//     }
//   }
//   console.log(`Хуваагч${d} :1– ${n} хооронд ${box} тоо`);
// }
// countDivisible(20, 3);
// countDivisible(100, 7);
// countDivisible(5, 6);
// function sumList(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   console.log(`Нийлбэр ${sum}`);
// }
// sumList([1, 2, 3]);
// sumList([10, 20, 30, 40]);
// sumList([]);

/////////////////////////////////shine sedew METHOD//////////////////////////////////////////////////
////dasgal1
// const raw = "   BaT_ErDeNe   ";
// const real = raw.trim().toLowerCase();
// console.log(real);
// console.log(`${real.length} temdegt`);
////dasgal2
// const email = "bat@gmail.com";
// const corrextEmail = email.includes("@") && email.includes(".");
// if (corrextEmail === true) {
//   console.log(`zow bna `);
// } else {
//   console.log(`bitgiii hudlaa yri`);
// }
////dasgal3
// const phone = "99112233";
// if (phone.length === 8) {
//   console.log(`${phone.slice(0, 4)}**** `);
// } else {
//   console.log(`sorry it is fake`);
// }
////dasgal4
// const fullName = "Бат Эрдэнэ".split(" ");
// const copy = fullName[0][0] + "." + fullName[1][0] + ".";
// console.log(copy);
/////dasgal5
// const template = "Сайн уу, {name}! Таны захиалга {time}-д бэлэн болно.";
// const name = "Бат";
// const time = "14:30";
// const nam = "Saraa";
// console.log(template.replace("{name}", nam).replace("{time}", time));
/////dasgal6
// const cart = ["🍎", "🥛"];
// cart.push("🍞");
// cart.push("🧀");
// cart.pop();
// console.log(`${cart.join(" ")}${cart.length} baraa`);
//////dasgal7
// const playlist = ["Өглөө", "Бороо", "Од"];
// const song = "Бороо";
// const chekedPlaylist =
///////////////////////////matrits/////////////////////////////////////////////////////////
////dsgal1
// const seats = [
//   ["🟩", "🟩", "🔴", "🟩"],
//   ["🔴", "🟩", "🟩", "🟩"],
//   ["🟩", "🟩", "🟩", "🔴"],
// ];
// const row = 3;
// const seat = 1;
// if (seats[row - 1][seat - 1] === "🔴") {
//   console.log(`› ❌ Эгнээ ${row}, суудал ${seat} захиалагдсан`);
// } else {
//   console.log(`› ✅ Эгнээ ${row}, суудал ${seat} сул байна`);
// }
/////dasgal2
// const classroom = [
//   ["Бат", "Сараа", "Ану"], // урд эгнээ
//   ["Болд", "Тэмүүлэн", "Нараа"], // арын эгнээ
// ];
// const suudal = classroom[0].length;
// const egnee = classroom.length;
// console.log(` 🏫 ${egnee} эгнээ × ${suudal} ширээ = 6 сурагч`);
// console.log(`↘️ Хамгийн ард, баруун талд:${classroom[1][2]}`);
// console.log(`⬆️ Урд эгнээний голд:${classroom[0][1]}`);
/////dasgal3
// const pixels = [
//   [0, 1, 0, 1, 0],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [0, 1, 1, 1, 0],
//   [0, 0, 1, 0, 0],
// ];
// for (let i = 0; i < pixels.length; i++) {
//   let mur = "";
//   for (let j = 0; j < pixels[i].length; j++) {
//     if (pixels[i][j] === 0) {
//       mur = mur + "⬜️";
//     } else {
//       mur = mur + "🟥";
//     }
//   }
//   console.log(mur);
// }
//////dasgal4
//dom*massiw-20dasgal
// const dayNames = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан"];
// const schedule = [
//   ["Математик", "Англи хэл", "Түүх"],
//   ["Монгол хэл", "Физик"],
//   ["Математик", "Биеийн тамир", "Хими", "Англи хэл"],
//   ["Биологи", "Уран зохиол", "Математик"],
//   ["Мэдээлэл зүй", "Хөгжим"],
// ];
// const day = document.getElementById("day");
// const lessons = document.getElementById("lessons");
// const count = document.getElementById("count ");
// for (let i = 0; i < dayNames.length; i++) {}
// function showDay(i) {
//   day.textContent = `📅 ${dayNames[i]}`;
//   lessons.textContent = `${schedule[i]}`;
//   count.textContent = `${schedule[i].length} хичээл`;
// }
const districts = [
  "Сүхбаатар",
  "Чингэлтэй",
  "Баянгол",
  "Хан-Уул",
  "Баянзүрх",
  "Сонгинохайрхан",
];
const fees = [3000, 3000, 4000, 5000, 4000, 6000];
