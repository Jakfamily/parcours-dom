console.log("hello world");
//---------------------------------------------------------------------------
//modife 1 titre

const changeTitle = () => {
  const h1Title = document.querySelector("h1"); //récupère le h1
  const SubTitle = document.querySelector("p.lead"); //récupère le p vac la class="lead"

  h1Title.textContent = "Ce que j'ai appris à THP"; //modifie le titre
  SubTitle.textContent =
    "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}; //modifie le sous-titre

changeTitle();
//-------------------------------------------------------------------------
// modife 2 text et lien du btn

const changeCallToActions = () => {
  const btnPrimary = document.querySelector(".btn-primary");
  const btnsecondary = document.querySelector(".btn-secondary");

  btnPrimary.textContent = "OK je veux tester !"; //modifie le texte du btn
  btnPrimary.href = "http://www.thehackingproject.org/"; //modifie le lien du btn

  btnsecondary.textContent = "NON Merci !";
  btnsecondary.href = "http://www.pole-emploi.fr/acceuil/";
};

changeCallToActions();

//-------------------------------------------------------------------------
//modife 3

const changeLogoName = () => {
  const logoText = document.querySelector(".navbar-brand strong");

  logoText.textContent = "The THP Experiences"; //modifie le texte du logo
  logoText.style.fontSize = "2em"; //modifie la taille du logo
};

changeLogoName();

//-------------------------------------------------------------------------
//modife 4

const populateImages = () => {
  const images = document.querySelectorAll(".card-img-top");
  let imagesArray = [
    "https://img.icons8.com/color/480/000000/html-5.png",
    "https://img.icons8.com/color/480/000000/css3.png",
    "https://img.icons8.com/color/480/000000/javascript.png",
    "https://img.icons8.com/color/480/000000/ruby-programming-language.png",
    "https://img.icons8.com/color/480/000000/bootstrap.png",
    "https://img.icons8.com/color/480/000000/github.png",
    "https://i.imgur.com/bJE9Pka.png",
    "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",
    "https://img.icons8.com/color/480/000000/heroku.png",
  ];

  images.forEach((image, index) => {
    //pour chaque image
    image.src = imagesArray[index]; //ajoute l'image sur la carte
  });
};

populateImages();

//-------------------------------------------------------------------------
//modife 5

const deleteLastDivs = () => {
  const divs = document.querySelectorAll(".col-md-4");
  const lastThreeDivs = Array.from(divs).slice(-3); // obtenir les trois dernières divs

  lastThreeDivs.forEach((div) => div.remove()); // supprimer chaque div
};

deleteLastDivs();

//-------------------------------------------------------------------------
//modife 6

const changeCardstext = () => {
  const cards = document.querySelectorAll(".card-text"); //récupère les cards
  cards[0].textContent =
    "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
  cards[1].textContent =
    "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML";
  cards[2].textContent =
    "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";
};

changeCardstext();

//-------------------------------------------------------------------------
//modife 7

const changeViewButtons = () => {
  const viewButtons = document.querySelectorAll(
    ".card-body .btn-group button.btn-outline-secondary"
  ); //récupère les boutons

  viewButtons.forEach((button) => {
    if (button.textContent.trim() === "View") {
      //methode .trim() pour supprimer les espaces
      button.classList.remove("btn-outline-secondary"); //supprime les classes
      button.classList.add("btn-success"); //ajoute les classes
    }
  });
};

document.addEventListener("DOMContentLoaded", changeViewButtons);

//-------------------------------------------------------------------------
//modife 8
