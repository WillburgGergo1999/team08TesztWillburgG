"use strict";
exports.__esModule = true;
//1.feladat
function DiakInfo(nev, csoport, tipus) {
    var nev = "Minta Márton";
    var csoport = 08;
    if (tipus == true) {
        console.log("Junior Frontend");
    }
    else {
        console.log("Webprogramozó");
    }
}
//2.feladat
var ertek;
ertek = [2, "Hanyag, Hanyag", 3, "Változó, Változó", 4, "Jó, Jó", 5, "Példás, Példás"];
console.log(ertek[0]);
//3.feladat
//tomb generálás

function HarommalOszhatokSzama(vizsgalandoSzam) {
    if (vizsgalandoSzam % 3 == 0) {
        return true;
    }
    return false;
}
