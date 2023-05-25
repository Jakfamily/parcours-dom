// question 1
const paragraphs = document.getElementsByTagName("p");
const paragraphCount = paragraphs.length;

document.addEventListener("DOMContentLoaded", () => {
  // Affiche le nombre de <p> trouvés
  console.log(`Le nombre de <p> trouvés : ${paragraphCount}`);
});

// question 2
const element = document.getElementById("coucou");

document.addEventListener("DOMContentLoaded", () => {
  // Affiche le contenu de l'élément avec l'ID "coucou"
  console.log(
    `Le contenu de l'élément avec l'ID "coucou" : ${element.innerHTML}`
  );
});

// question 3
const links = document.getElementsByTagName("a");

document.addEventListener("DOMContentLoaded", () => {
  if (links.length >= 3) {
    // Récupère le 3ème lien
    const thirdLinkURL = links[2].href;
    // Affiche l'URL du 3ème lien
    console.log(`URL du 3ème lien : ${thirdLinkURL}`);
  } else {
    console.log("Aucun lien trouvé.");
  }
});

// question 4
const elementsByClass = document.getElementsByClassName("compte-moi");
const elementsCount = elementsByClass.length;

document.addEventListener("DOMContentLoaded", () => {
  // Affiche le nombre d'éléments avec la classe "compte-moi"
  console.log(
    `Le nombre d'éléments avec la classe "compte-moi" : ${elementsCount}`
  );
});

// question 5
const elements = document.querySelectorAll("li.compte-moi");
const liCount = elements.length;

document.addEventListener("DOMContentLoaded", () => {
  // Affiche le nombre d'éléments <li> avec la classe "compte-moi"
  console.log(
    `Le nombre d'éléments <li> avec la classe "compte-moi" : ${liCount}`
  );
});

// question 6
const elementLi = document.querySelectorAll("ol li.compte-moi");
const count = elementLi.length;

document.addEventListener("DOMContentLoaded", () => {
  // Affiche le nombre d'éléments <li> avec la classe "compte-moi"
  console.log(
    `Le nombre d'éléments <li> avec la classe "compte-moi" : ${count}`
  );
});

// question 7
const searchElements = document.querySelectorAll("div ul:nth-child(2) li");

document.addEventListener("DOMContentLoaded", () => {
  searchElements.forEach((element) => {
    // Affiche le contenu des éléments cachés
    console.log("L'élément caché est : " + element.innerHTML);
  });
});
