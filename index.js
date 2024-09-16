// 1
let day = parseInt(prompt("Enter the number for the day in the week"));
switch (day) {
  case 1:
    alert("вибрано день:понеділок");
    break;
  case 2:
    alert("вибрано день:вівторок");
    break;
  case 3:
    alert("вибрано день:середа");
    break;
  case 4:
    alert("вибрано день:четверг");
    break;
  case 5:
    alert("вибрано день:пятниця");
    break;
  case 6:
    alert("вибрано день:субота");
    break;
  case 7:
    alert("вибрано день:неділя");
    break;
  default:
    alert("невірний номер дня");
}
// 2
let month = parseInt(prompt("напишіть число для порироку"));
switch (month) {
  case 1:
  case 2:
  case 3:
    alert("зима");
    break;
  case 4:
  case 5:
  case 6:
    alert("весна");
    break;
  case 7:
  case 8:
  case 9:
    alert("літо");
    break;
  case 10:
  case 11:
  case 12:
    alert("осінь");
    break;
}
// 3
let age = parseInt(prompt("ведіть свій вік"));
let result;
switch (age) {
  case (result = 1):
  case (result = 2):
  case (result = 3):
  case (result = 4):
  case (result = 5):
  case (result = 6):
  case (result = 7):
  case (result = 8):
  case (result = 9):
  case (result = 10):
  case (result = 11):
  case (result = 12):
    alert("дитина");
    break;
  case (result = 13):
  case (result = 14):
  case (result = 15):
  case (result = 16):
  case (result = 17):
    alert("підліток");
    break;
  case (result = 18):
  case (result = 19):
  case (result = 20):
  case (result = 21):
  case (result = 22):
  case (result = 23):
  case (result = 24):
  case (result = 25):
  case (result = 26):
  case (result = 27):
  case (result = 28):
  case (result = 29):
  case (result = 30):
  case (result = 31):
  case (result = 32):
  case (result = 33):
  case (result = 34):
  case (result = 35):
  case (result = 36):
  case (result = 37):
  case (result = 38):
  case (result = 39):
  case (result = 40):
  case (result = 41):
  case (result = 42):
  case (result = 43):
  case (result = 44):
  case (result = 45):
  case (result = 46):
  case (result = 47):
  case (result = 48):
  case (result = 49):
  case (result = 50):
  case (result = 51):
  case (result = 52):
  case (result = 53):
  case (result = 54):
  case (result = 55):
  case (result = 56):
  case (result = 57):
  case (result = 58):
  case (result = 59):
  case (result = 60):
  case (result = 61):
  case (result = 62):
  case (result = 63):
  case (result = 64):
  case (result = 65):
    alert("дорослий");
    break;
  default:
    alert("пенсіонер");
}
// 4
let num1 = parseInt(prompt("напишіть перше число"));

let num2 = parseInt(prompt("напишіть друге число"));

let action = prompt("оператор (/,+,*,-)");
let results;
switch (action) {
  case "+":
    results = num1 + num2;
    alert(`${num1} + ${num2} = ${results}`);
    break;
  case "-":
    results = num1 - num2;
    alert(`${num1} - ${num2} = ${results}`);
    break;
  case "*":
    results = num1 * num2;
    alert(`${num1} * ${num2} = ${results}`);
    break;
  case "/":
    results = num1 / num2;
    alert(`${num1} / ${num2} = ${results}`);
    break;
  default:
    alert("Invalid operator");
    break;
}
// 5
let months =prompt("напишіть місяць");
switch (months) {
  case "січень":
    alert("вибрано місяць: 1");
    break;
  case "лютий":
    alert("вибрано місяць: 2");
    break;
  case "березень":
    alert("вибрано місяць: 3");
    break;
  case "квітень":
    alert("вибрано місяць: 4");
    break;
  case "травень":
    alert("вибрано місяць: 5");
    break;
  case "червень":
    alert("вибрано місяць: 6");
    break;
  case "липень":
    alert("вибрано місяць: 7");
    break;
  case "серпень":
    alert("вибрано місяць: 8");
    break;
  case "вересень":
    alert("вибрано місяць: 9");
    break;
  case "жовтень":
    alert("вибрано місяць:10");
    break;
  case "листопад":
    alert("вибрано місяць:11");
    break;
  case "грудень":
    alert("вибрано місяць:12");
    break;
  default:
    alert("невірний місяць");
}
// 6
let tip;
const subscription = prompt("tip?");
switch (subscription) {
  case "norm":
    tip = 10;
    alert("10%")
    break;
  case "good":
    tip = 15;
    alert("15%")
    break;
  case "wonderful":
    alert("20%")
    tip = 20;
    break;
  default:
    console.log("you don`t have any subscription");
}
console.log(tip);
