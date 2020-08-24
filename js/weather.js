function weatherOfDay() {
    let week = [2, 18, -1, 22, 30, 40, -10];
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