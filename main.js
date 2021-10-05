     let filmTomb = [];

class Film {
     constructor(nev, rendezo, kiadasiEv) {
          this.nev = nev;
          this.rendezo = rendezo;
          this.kiadasiEv = kiadasiEv;
     }
}

function Hozzaad() {
     let nev = document.getElementById("inputNev").value;
     let rendezo = document.getElementById("inputRendezo").value;
     let kiadasiEv = document.getElementById("inputkiadasiEv").value;
     let film1 = new Film(nev, rendezo, kiadasiEv);
     filmTomb.push(film1);

     document.getElementById("inputNev").value = "";
     document.getElementById("inputRendezo").value = "";
     document.getElementById("inputkiadasiEv").value = "";
}

document.getElementById("gombKuld").addEventListener("click", Hozzaad);