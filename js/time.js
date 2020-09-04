function addZero(x) {
  return x < 10 ? "0" + String(x) : String(x);
}

function printTime() {
  let d = new Date();
  let hours = addZero(d.getHours());
  let mins = addZero(d.getMinutes());
  let secs = addZero(d.getSeconds());
  document.getElementById("currentTime").innerHTML = "A pontos idő : " + hours + ":" + mins + ":" + secs;
}
setInterval(printTime, 1000);

/* Pszeudokód
Vegyük a jelenlegi dátumot, abból nézzük meg a hétnek hanyadik napja van,
switch-el nézzük meg aznap mi a nyitvatartás
vegyük az órát percet és nézzük meg nyitva vagy zárva felirat jelenik-e meg
*/

function isItOpen() {
  date = new Date();
  let dayOfWeek = date.getDay(); //számot kaptunk, a hét hanyadik napja van 5. nap és 6. nap más nyitvatartás
  console.log(dayOfWeek);
  let isItOpen; 
}
document.getElementById("storeStatus").innerHTML = isItOpen;