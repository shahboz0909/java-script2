var yoshi = 16;
var kiritish =parseInt(prompt("yoshingizni kiriting"), 10);

if (kiritish >= yoshi) {
  var start = document.createElement("p");
  start.textContent = "Siz musoboqada ishtirok etishingiz mumkin";
  console.log(start)
  document.body.append(start)
}

else {
  var end = document.createElement("p");
  end.textContent = `Uzr! yoshingiz yetmadi ${yoshi - kiritish} yildan so'ng qatnashishingiz mumkin`;
  console.log(end);
  document.body.append(end);
}
