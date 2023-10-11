// Définition de l'objet Tueur
let Tueur = {
  nom: "Jason",
  pv: 100,
  // Fonction d'attaque prenant un survivant en paramètre
  attaquer: function (survivant) {
    let random = Math.random();
    // Si le nombre aléatoire est inférieur à 0.3, le survivant meurt
    if (random < 0.3) {
      return this.nom + " a tué " + survivant.nom + ".";
    } // Si le nombre aléatoire est entre 0.3 et 0.7, le survivant perd 10 points de vie
    else if (random < 0.7) {
      survivant.pv -= 10;
      return (
        this.nom + " a infligé 10 points de dégâts à " + survivant.nom + "."
      );
    } // Si le nombre aléatoire est entre 0.7 et 0.9, le survivant perd 15 points de vie mais tue le Tueur en le faisant
    else if (random < 0.9) {
      survivant.pv -= 15;
      return (
        this.nom +
        " a infligé 15 points de dégâts à " +
        survivant.nom +
        " mais y a perdu la vie mskn"
      );
    } // Si le nombre aléatoire est supérieur à 0.9, le survivant esquive l'attaque
    else {
      return survivant.nom + " a esquivé l'attaque de " + this.nom + ".";
    }
  },
};

// Définition de l'objet Survivant avec une méthode d'initialisation
let Survivant = {
  init: function (nom, caractéristique) {
    this.nom = nom + " (" + caractéristique + ")";
    this.pv = 100;
  },
};

// Tableaux de noms et de caractéristiques pour les survivants
let nomsSurvivants = ["Nerd", "Sportif", "Blonde", "bogoss", "timide"];
let caractéristiques = ["intelligent", "fort", "blonde", "charo", "rêveur"];

// Création de cinq survivants avec des noms et caractéristiques aléatoires
let survivants = [];

for (let i = 0; i < 5; i++) {
  let nom = nomsSurvivants[Math.floor(Math.random() * nomsSurvivants.length)];
  let caractéristique =
    caractéristiques[Math.floor(Math.random() * caractéristiques.length)];
  let survivant = Object.create(Survivant);
  survivant.init(nom, caractéristique);
  survivants.push(survivant);
}

// Le tueur passe a l'attaque
while (Tueur.pv > 0 && survivants.some((survivant) => survivant.pv > 0)) {
  // pense bête: some est utilisée pour déterminer si au moins un élément dans un tableau satisfait une condition donnée
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
