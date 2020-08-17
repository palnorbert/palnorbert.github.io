let homersekletek = [12, 15, 2, 16, 24, 30, 17];

let ajanlat = ["forró csoki",
               "finom süti",
               "meleg tea",
               "fagyi",
               "jéghideg limonádé",
               "whisky" ,          
               "tavaszi saláta" ];

function idoApp() {
    let sel = document.querySelector('.form-control').value;
    let nap = document.querySelector('.show-temp');
    let fa = document.querySelector('.fahr');
    let napAjanl = document.querySelector('.ajanlat');
    napAjanl.innerHTML = ajanlat[sel];
    nap.innerHTML = homersekletek[sel]; 
    fa.innerHTML = homersekletek[sel]* 9 / 5 + 32; 
 
}
