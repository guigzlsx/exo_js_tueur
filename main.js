let Tueur = {
  nom: "Jason",
  pv: 100,
  attaquer: function (survivant) {
    let random = Math.random();
    if (random < 0.3) {
      return this.nom + " a tué " + survivant.nom + ".";
    } else if (random < 0.7) {
      survivant.pv -= 10;
      return (
        this.nom + " a infligé 10 points de dégâts à " + survivant.nom + "."
      );
    } else if (random < 0.9) {
      survivant.pv -= 15;
      return (
        this.nom +
        " a infligé 15 points de dégâts à " +
        survivant.nom +
        " mais est mort en le faisant."
      );
    } else {
      return survivant.nom + " a esquivé l'attaque de " + this.nom + ".";
    }
  },
};

let Survivant = {
  init: function (nom, caractéristique) {
    this.nom = nom + " (" + caractéristique + ")";
    this.pv = 100;
  },
};

let nomsSurvivants = ["Nerd", "Sportif", "Blonde", "bogoss", "timide"];
let caractéristiques = ["intelligent", "fort", "blonde", "charo", "rêveur"];
let survivants = [];

for (let i = 0; i < 5; i++) {
  let nom = nomsSurvivants[Math.floor(Math.random() * nomsSurvivants.length)];
  let caractéristique =
    caractéristiques[Math.floor(Math.random() * caractéristiques.length)];
  let survivant = Object.create(Survivant);
  survivant.init(nom, caractéristique);
  survivants.push(survivant);
}

while (Tueur.pv > 0 && survivants.some((survivant) => survivant.pv > 0)) {
  let survivant = survivants[Math.floor(Math.random() * survivants.length)];
  let action = Tueur.attaquer(survivant);
  console.log(action);
}

console.log("Morts :");
survivants.forEach((survivant) => {
  if (survivant.pv <= 0) {
    console.log(`${survivant.nom}`);
  }
});
if (Tueur.pv <= 0) {
  console.log("Jason est mort. Les survivants ont gagné !");
}
