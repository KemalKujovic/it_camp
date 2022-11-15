class Ucenik {
  predmeti = [];
  constructor(ime, prezime, razred, predmeti, slika) {
    this.ime = ime;
    this.prezime = prezime;
    this.razred = razred;
    this.predmeti = predmeti;

    this.slika = slika;
    console.log(this.slika);
  }

  displayMess() {
    let container = document.querySelector(".container");
    let html = `<div class="ucenikInfo"><div class="zaInfo"><h1 class="ucenikIme">Ime i Prezime: ${
      this.ime
    } ${this.prezime}</h1>
    <p>Razred: ${this.razred}</p>
    
    <ul id="clasPredm">Predmeti:${this.displayPredmeti(
      this.predmeti
    )}</ul></div>
    <div class="zaImg">
    <img id="logoSlika" src="${this.slika}"></div> 
    </div>`;
    container.insertAdjacentHTML("beforeend", html);
  }
  displayPredmeti(predme) {
    return predme.predme.join(" ");
  }
}
const amina = new Ucenik(
  "Kemal",
  "Kujovic",
  4,
  ["Infromacione Tehnologije", "IT", "Ekonomija"],
  "ucenik.jpg"
);
const temina = new Ucenik(
  "Kemal",
  "Kujovic",
  4,
  ["Infromacione Tehnologije", "IT", "Srpski"],
  "ucenik.jpg"
);
amina.displayMess();
temina.displayMess();
amina.displayPredmeti();
temina.displayPredmeti();
