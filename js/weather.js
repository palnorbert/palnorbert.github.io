let week = [2, 18, -1, 22, 32, 40, -10];
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

let negTemp = false;
for (let l = 0; l < week.length && negTemp==false; l++) {
    if(week[l]<0) {
        negTemp = true;
    }
}
document.getElementById("neg-temp").innerHTML = "A következő héten lesznek minuszok."

let hotTemp = 0;
for (let m = 0; m<week.length; m++) {
    if(week[m] > 30) {
        hotTemp++;
    }
}
document.getElementById("hot-temp").innerHTML = "A következő héten " + hotTemp + " nap lesz kánikula.";

// /*
// Összegzés algoritmusa:

// összeg = 0
// CIKLUS AMÍG van még szám, ADDIG
//     szám = következő elem
//     összeg = összeg + szám
// CIKLUS VÉGE
// */
// let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
// let sum = 0;
// for (let i = 0; i < numericArray.length; i++) {
//     sum += numericArray[i];
// }
// console.log("Sum: ", sum);


// /*
// Számlálás algoritmusa:

// db = 0
// CIKLUS AMÍG van még szám, ADDIG
// szám = következő elem
// HA igaz a feltétel a számra, AKKOR
//     db = db+1
// FELTÉTEL VÉGE
// CIKLUS VÉGE
// */

// let db = 0
// for (let i = 0; i < numericArray.length; i++) {
//     if (numericArray[i] % 2 == 0) {
//         db++;
//     }

// }
// console.log("Even numbers: ", db);

// let numericArray2 = [1, 3, 2, 6, 5, 3, 4, 6, 7];
// let count = 0;
// for (let i = 0; i < numericArray2.length; i++) {
//     if (numericArray2[i] > 3) {
//         count++;
//     }
// }
// console.log(count);

// /*
// Szélsőérték keresés algoritmusa

// legnagyobb = első elem
// CIKLUS AMÍG van még szám, ADDIG
//     szám = következő szám
//     HA szám > legnagyobb, AKKOR
//         legnagyobb = szám
//     FELTÉTEL VÉGE
// CIKLUS VÉGE
// */

// let biggest = numericArray[0];
// for (let i = 0; i < numericArray.length; i++) {
//     if (numericArray[i] > biggest) {
//         biggest = numericArray[i]
//     }
// }
// console.log("The biggest element: ", biggest);

// let smallest = numericArray[0];
// for (let i = 0; i < numericArray.length; i++) {
//     if (numericArray[i] < smallest) {
//         smallest = numericArray[i]
//     }
// }
// console.log("The smallest element: ", smallest);

// /*
// Eldöntés algoritmusa

// találat = HAMIS
// CIKLUS AMÍG van elem ÉS NEM találat (= hamis)
// szám = következő elem
// HA igaz a feltétel a számra, AKKOR
//     találat = IGAZ
// FELTÉTEL VÉGE
// CIKLUS VÉGE
// */

// let contains = false;
// for (let i = 0; i < numericArray.length && contains == false; i++) {
//     if (numericArray[i] == 15) {
//         contains = true;
//     }
// }
// console.log("This array contains 15: ", contains);