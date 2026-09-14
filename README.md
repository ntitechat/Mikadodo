# Mikadodo — version 14

Prototype PWA mobile de gestion des recettes, du stock, des courses, de l’agenda et des notes.

## Nouveautés
- Navigation principale conservée uniquement en bas de l’écran pour gagner de la place.
- Un seul bouton « + Ajouter » pour les recettes (bouton flottant).
- Interface recettes en liste alignée, avec photo à gauche et description à droite.
- Notes avec listes à cocher.
- Paramètres accessibles depuis la barre du bas.

## Protection des photos
- Jusqu’à 2 photos par recette sont conservées dans IndexedDB et protégées contre le remplacement automatique.
- Une photo existante ne peut être retirée qu’avec le bouton « Retirer » et une confirmation explicite.
- Le stockage persistant du navigateur est demandé pour réduire le risque d’éviction des photos.
