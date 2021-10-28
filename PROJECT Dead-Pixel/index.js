const showVideo = document.querySelector(".link-video");
const response = document.querySelector(".linkDispo");



showVideo.addEventListener("mouseenter", () => {
  response.classList.add("linkDispoVisible");
})

showVideo.addEventListener("mouseout", () => {
  response.classList.remove("linkDispoVisible");
})

// -----------------------------------------------------------------------

const home1 = document.querySelector(".home1");

window.addEventListener('scroll', () => {
  // console.log(window.scrollY);

  if(window.scrollY > 55) {
    home1.style.top = 0;
  } 
})

// -----------------------------------------------------------------------
// Les évènements du formulaire


const inputName = document.querySelector('input[type="text"]');
let pseudo = "";
const select = document.querySelector("select");
let oeuvre = "";
const form = document.querySelector("form");


inputName.addEventListener("input", (e) => {
  // console.log(e.target.value);
  pseudo = e.target.value;
});

 select.addEventListener("input", (e) => {
   // console.log(e.target.value);
   oeuvre = e.target.value;
 });

// form.addEventListener("submit", (e) => {
//   e.preventDefault(); 
  // méthode qui empèche les comportement par défault. Par défaut, un event de type submit recharge la page.
  
  // console.log(cgv.checked);
  // affiche true ou false lorsque l'on submit.

  // Nous arrivons avec cgv.checked à connaitre la valeur de checkbox sans jamais l'avoir déclarer. Nous y arrivons grace a l'id (cgv) de cet input. avec cette méthode nous pouvons savoir si l'id cgv est checké sur le dom. Javascript connait l'id, un autre cas éxiste aussi pour les boutons ou vous pouvez mettre un id sans avoir à les déclarer.
  
//   if (cgv.checked) {
//     document.querySelector('form > div').innerHTML = `
//       <h3>Tu as bon gout ${pseudo}, ${oeuvre} est un bon choix!</h3>
//     `;
//   } else {
//     alert('Veuillez accepter les CGV')
//   }
// });

// .innerHTML va nous permettre 

const message = document.querySelector('form > div');
const selection1 = document.querySelector('.img1');
const selection2 = document.querySelector('.img2');
const selection3 = document.querySelector('.img3');
const selection4 = document.querySelector('.img4');
const selection5 = document.querySelector('.img5');
const selection6 = document.querySelector('.img6');
const selection7 = document.querySelector('.img7');
const selection8 = document.querySelector('.img8');
const selection9 = document.querySelector('.img9');


form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  
  console.log(oeuvre);

  if (cgv.checked)  {

    switch(oeuvre) {
      case 'Tokyo Attack':
        message.innerHTML = `
          <h3>Bien joué ${pseudo}, ${oeuvre} est vraiment un excellent choix!</h3>
        `;
        selection1.style.background='gold';
        break;

      case 'Silver Tower':
        message.innerHTML = `
          <h3>Franchement ${pseudo}, cette ${oeuvre} est ma préférée, on a des points communs!</h3>
        `;
        selection2.style.background='gold';
        break;

      case 'Good Time':
        message.innerHTML = `
          <h3>Mon ou ma cher(e) ${pseudo}, en choisissant ${oeuvre} on imagine que t'es une personne sociable!</h3>
        `;
        selection3.style.background='gold';
        break;

      case 'Eclipse':
        message.innerHTML = `
          <h3>Rien à ajouter ${pseudo}, l'${oeuvre} est grandiose!</h3>
        `;
        selection4.style.background='gold';
        break;

      case 'Stuff':
        message.innerHTML = `
          <h3>Tu déconnes ${pseudo}, faut lacher la manette, trouve du ${oeuvre} pour construire ta vie, la vraie!</h3>
        `;
        selection5.style.background='gold';
        break;

      case 'Japanese Sanctuary':
        message.innerHTML = `
          <h3>Ok ${pseudo}, bon bah là c'est classe, bravo, ${oeuvre} a un style de fou!</h3>
        `;
        selection6.style.background='gold';
        break;

      case 'Luke Skywalker':
        message.innerHTML = `
          <h3>Je te dirais bien que tu es un peu ringard ${pseudo}, ${oeuvre} est plus dans le coup. Je t'invite à vivre avec ton époque.</h3>
        `;
        selection7.style.background='gold';
        break;

      case 'Hollywood':
        message.innerHTML = `
          <h3>Moi aussi ${pseudo} je l'aime bien, ${oeuvre} est riche de détail, on peut passer des heures à la comtempler non?</h3>
        `;
        selection8.style.background='gold';
        break;

      case 'Gun Action':
        message.innerHTML = `
          <h3>${oeuvre} c'est pour les nostalgiques de metal slug ou d'outrun, ça te rappelle toi aussi des souvenirs ${pseudo}</h3>
        `;
        selection9.style.background='gold';
        break;      
    }
  } else {
    alert('Veuillez accepter les CGV')
  }
});

