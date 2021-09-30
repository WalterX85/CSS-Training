/*
Toutes ces transformations ne fonctionnent que pour les éléments de type block! Ne fonctionne pas pour les éléments inline.
Transform comme la position absolute crée un nouveau contexte d'empilement. Ces éléments seront automatiquement positionnés au dessus des éléments qui ne sont pas positionnés.
Voici les principales propriétés de transform:
TRANSLATE:
transform: translate(50px, 50px);
= Déplace x de 50px, y de 50px.
transform: translateY(200px);
= Déplace seulement y de 200px.
transform: translateZ();
= Déplace sur un axe 3D.
ROTATE:
transform: rotate(45deg);
= Rotation de 45 degrés.
SCALE: (echelle)
transform: scale(1);
= 1 vaut 100%, permet de gérer l'échelle d'un élément.
SKEW: (distorsion)
transform: skew(50deg, 40deg);
= Applique une distorsion du x de 50° et de 40° sur y.
---------------------------------------------------
Les Transitions:
Des qu'un élément change d'état, cad qu'une de ses propriétés va changer de valeur. Souvent avec des pseudos classes ou des pseudos éléments.
Exemple: Une couleur qui change lors d'un survol.
.box{
  transition-duration: 0.4s;
  transition-property: background, width;
  transition-timing-function: linear;
  transition-delay: 1s;
}
= le changement d'état s'applique en 0.4s.
= la largeur du background s'étirera a 500px pdt le hover en plus du changement de couleur.
On liste dans property tout ce qui va changer.
= Indique a quelle vitesse se passe la transition, linear, ease-in, ease-out etc.
= Indique un délai d'1s avant l'éxécution de la transition.
.box:hover{
  background: forestgreen;
  width: 500px;
}
---------------------------------------------------
Les Animations:
animation-iteration-count: 2;
= répète une animation, possibilité de lui passer infinite.
animation-fill-mode: forwards;
= garde toutes les valeurs de propriétés que tu as en fin d'animation, a 100%. Par opposition au comportement par défaut backward qui replace l'élément par défaut.
animation-direction: reverse;
= l'animation se lance a l'envers.
animation-direction: alternate;
= s'utilise avec iteration count: infinite pour alterner entre le début et la fin de l'animation.
animation-timing-function: linear, ease-in etc...
= vitesse d'animation.
*/