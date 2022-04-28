export{};
//1.feladat
function DiakInfo(nev:string, csoport:number, tipus:boolean):void {
    var nev:string="Minta Márton";
    var csoport:number=08;
    if (tipus==true) {
        console.log("Junior Frontend");
    }
    else{
        console.log("Webprogramozó");
    }
}

//2.feladat

var ertek:[number, string, number,string, number,string, number,string];
ertek=[2, "Hanyag, Hanyag", 3, "Változó, Változó", 4,"Jó, Jó", 5, "Példás, Példás"];
console.log(ertek[0]);

//3.feladat

function HarommalOszhatokSzama(vizsgalandoSzam:number):boolean{
    if(vizsgalandoSzam%3==0){
        return true;
    }
    return false;  
}

//4.feladat

