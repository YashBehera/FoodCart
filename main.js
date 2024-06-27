const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

/*Buttons functionality added by DeveloperChinmaya */

let total = 0;
let crunchybuttons = document.getElementsByClassName("btn btn-outline-success");
let softbuttons = document.getElementsByClassName("btn btn-outline-info");
let totaltab = document.getElementById("totaltab");
let tval = document.getElementById("tval");

for (let i = 0; i < crunchybuttons.length; i++) {
    crunchybuttons[i].addEventListener('click', (e) => {
        if (e.target.innerHTML == "1") {
            total += 1.5;
        }
        if (e.target.innerHTML == "2") {
            total += 2.5;
        }
        if (e.target.innerHTML == "3") {
            total += 3.25;
        }
    });
}

for (let i = 0; i < softbuttons.length; i++) {
    softbuttons[i].addEventListener('click', (e) => {
        if (e.target.innerHTML == "1") {
            total += 2;
        }
        if (e.target.innerHTML == "2") {
            total += 3.5;
        }
        if (e.target.innerHTML == "3") {
            total += 4.5;
        }
    });
}

let salsa = document.getElementById("salsabtn");
salsa.addEventListener('click', (e) => {
    total += 2;
});

let order = document.getElementById("orderbtn");
order.addEventListener('click', function() {
    totaltab.style.display = 'flex'; 
    tval.innerHTML = total; 
    total = 0; 
});