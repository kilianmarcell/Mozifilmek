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

function listazasKattintas() {
    let tablazatHTML = "<table>";
    tablazatHTML += "<tr><th>Név</th><th>Rendező</th><th>Kiadási év</th></tr>";
    for (let film of filmek) {
        tablazatHTML += "<tr>";
        tablazatHTML += "<td>" + film.nev + "</td>";
        tablazatHTML += "<td>" + film.rendezo + "</td>";
        tablazatHTML += "<td>" + film.kiadasiEv + "</td>";
        tablazatHTML += "</tr>";
    }
    document.getElementById("tablazat").innerHTML = "";
}

function init() {
    document.getElementById("hozzaad").addEventListener("click", hozzaadKattintas);
    document.getElementById("listazas").addEventListener("click", listazasKattintas);
}

document.addEventListener("DOMContentLoaded", init);