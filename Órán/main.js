class Film {
    #nev;
    #rendezo;
    #kiadasiev;

    constructor(nev, rendezo, kiadasiev) {
        this.#nev = nev;
        this.#rendezo = rendezo;
        this.#kiadasiev = kiadasiev;
    }

    get nev() {
        return this.#nev;
    }

    get rendezo() {
        return this.#rendezo;
    }

    get kiadasiEv() {
        return this.#kiadasiEv;
    }
}

let filmek = [];

function hozzaadKattintas() {
    let nev = document.getElementById("nev").value;
    let rendezo = document.getElementById("rendezo").value;
    let kiadasiEv = document.getElementById("kiadasiEv").value;

    let ujFilm = new Film(nev, rendezo, kiadasiEv);
    filmek.push(ujFilm);

    document.getElementById("nev").value = "";
    document.getElementById("rendezo").value = "";
    document.getElementById("kiadasiEv").value = "";
}

function filmOsszehasonlitas(egyik, masik) {
    if (egyik.nev > masik.nev) {
        return 1;
    } else if (egyik.nev < masik.nev) {
        return -1;
    } else {
        return 0;
    }
}

function nevSzerintRendezes() {
    filmek.sort(filmOsszehasonlitas);

    listazasKattintas();
}

function listazasKattintas() {
    let tablaElem = document.createElement("table");
    let elsoSorTrElem = document.createElement("tr");
    let headerNevElem = document.createElement("th");
    headerNevElem.innerHTML = "Név";
    let headerRendezoElem = document.createElement("th");
    headerNevElem.innerHTML = "Rendező";
    let headerKiadasiEvElem = document.createElement("th");
    headerNevElem.innerHTML = "Kiadási év";
    elsoSorTrElem.appendChild(headerNevElem);
    elsoSorTrElem.appendChild(headerRendezoElem);
    elsoSorTrElem.appendChild(headerKiadasiEvElem);

    tablaElem.appendChild(elsoSorTrElem);

    headerNevElem.addEventListener("click", nevSzerintRendezes);

    //let tablazatHTML = "<table>";
    //tablazatHTML += "<tr><th>Név</th><th>Rendező</th><th>Kiadási év</th></tr>";

    for (let film of filmek) {
        let trElem = document.createElement("tr");
        let nevElem = document.createElement("td");
        nevElem.innerHTML = film.nev;
        let rendezoElem = document.createElement("td");
        rendezoElem.innerHTML = film.rendezo;
        let kiadasiEvElem = document.createElement("td");
        kiadasiEvElem.innerHTML = film.kiadasiEv;
        tablaElem.appendChild(trElem);

        //tablazatHTML += "<tr>";
        //tablazatHTML += "<td>" + film.nev + "</td>";
        //tablazatHTML += "<td>" + film.rendezo + "</td>";
        //tablazatHTML += "<td>" + film.kiadasiEv + "</td>";
        //tablazatHTML += "</tr>";
    }
    tablazatHTML != "</table>";
    
    document.getElementById("tablazat").innerHTML = "";
    document.getElementById("tablazat").appendChild(tablaElem);
}

function init() {
    document.getElementById("hozzaad").addEventListener("click", hozzaadKattintas);
    document.getElementById("listazas").addEventListener("click", listazasKattintas);
}

document.addEventListener("DOMContentLoaded", init);