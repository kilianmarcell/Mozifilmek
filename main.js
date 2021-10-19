     let filmTomb = [];
class Film {
     constructor(nev, rendezo, kiadasiEv) {
          this.nev = nev;
          this.rendezo = rendezo;
          this.kiadasiEv = kiadasiEv;
     }
}

function Hozzaad() {
     if (document.getElementById("inputNev").value == "" ||
     document.getElementById("inputRendezo").value == "" ||
     document.getElementById("inputkiadasiEv").value == "") {
          alert("Kérem");
     } else {
          let nev = document.getElementById("inputNev").value;
          let rendezo = document.getElementById("inputRendezo").value;
          let kiadasiEv = document.getElementById("inputkiadasiEv").value;
          let film1 = new Film(nev, rendezo, kiadasiEv);
          filmTomb.push(film1);

          document.getElementById("tablazatNev").innerHTML = "";
          document.getElementById("tablazetRendezo").innerHTML = "";
          document.getElementById("tablazatEv").innerHTML = "";

          for (let i = 0; i < filmTomb.length; i++) {
               document.getElementById("tablazatNev").innerHTML += filmTomb[i].nev + "<br>";
               document.getElementById("tablazetRendezo").innerHTML += filmTomb[i].rendezo + "<br>";
               document.getElementById("tablazatEv").innerHTML += filmTomb[i].kiadasiEv + "<br>";
          }

          document.getElementById("inputNev").value = "";
          document.getElementById("inputRendezo").value = "";
          document.getElementById("inputkiadasiEv").value = "";

          szamol = 0;
     }
}

document.getElementById("gombKuld").addEventListener("click", Hozzaad);