let week = [2, 18, -1, 22, 30, 40, -10];
function weatherOfDay() {
    let offers = ["Forró Csoki", "Meleg Tea", "Finom Süti", "Fagyi", "Jéghideg Limonádé"];
    let maxDegree = [0, 15, 20, 25, 100];
    let weekSelect = document.getElementById("days-of-week");
    let valueSelectedDay = parseInt(weekSelect.options[weekSelect.selectedIndex].value);
    let showDegree = document.querySelector("span#today-degree");
    showDegree.innerHTML = week[valueSelectedDay];
    let showDegreeFa = document.querySelector("span#today-degreefa");
    showDegreeFa.innerHTML = week[valueSelectedDay]*9 / 5 + 32;
    let showOffer = document.querySelector("span#today-offer");

    for (let i = 0; i < maxDegree.length; i++) {

        if (week[valueSelectedDay] < maxDegree[i]) {
            showOffer.innerHTML = offers[i];
            break;
          
        }
    
    }
  
}

let max = week[0];
for (let i=0; i < week.length; i++) {
if(week[i]>max){
    max = week[i];
}
}
document.getElementById("max-temp").innerHTML = "A héten várható legmagasabb hőmérséklet: " + max + "°C"

let min = week[0];
for (let j =0; j < week.length; j++) {
    if (week[j] < min) {
        min = week[j];
    }
}
document.getElementById("min-temp").innerHTML = "A héten várható legalacsonyabb hőmérséklet: " + min + "°C"

let sum = 0;
for (let k = 0; k< week.length; k++) {
sum += week[k]
avg = sum/week.length
}
document.getElementById("avg-temp").innerHTML = "A héten várható átlaghőmérséklet: " + avg.toPrecision(4) + "°C"

/*
Szélsőérték keresés algoritmusa

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
