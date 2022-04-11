// function sayHi (name = "foydalanuvchi") {
//   console.log (`salom,  ${name}`);
// }
// sayHi ("shahboz")

var yoshi = 16;
var kiritish =parseInt(prompt("yoshingizni kiriting"), 10);

if (kiritish >= yoshi) {
  var start = document.createElement("p");
  var start = "Siz musoboqada ishtirok etishingiz mumkin";
  console.log(start)
  document.body.append(start)
}

else {
  var end = document.createElement("p");
  var end = `Uzr! yoshingiz yetmadi ${yoshi - kiritish} yildan song qatnashishingiz mumkin`;
  console.log(end);
  document.body.append(end);
}
