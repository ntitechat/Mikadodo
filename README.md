# Mikadodo — prototype fonctionnel

Application web mobile-first qui fusionne :
- recettes et catégories
- fiche recette avec temps, coût, ingrédients, préparation et conservation
- stockage réfrigérateur / congélateur / placard
- calcul automatique de la date de conservation quand une recette est ajoutée au stock
- agenda matin / midi / soir
- calcul automatique de l'heure de début pour que le repas soit prêt à l'heure choisie
- notifications navigateur lorsque l'application est ouverte et que les permissions sont accordées
- liste de courses avec quantités, prix unitaire, total, acheté / pas acheté
- génération des ingrédients d'une recette vers les courses
- données persistantes dans localStorage
- export JSON des données

## Lancer

Ouvrir `index.html` dans un navigateur moderne. Pour l'installation PWA et les notifications, servir le dossier via HTTPS ou localhost (par exemple un petit serveur local).

## Limites de ce prototype

C'est un MVP front-end autonome : pas encore de compte utilisateur, synchronisation cloud, base de données distante, scanner de codes-barres, partage familial, notifications en arrière-plan garanties par le système, ni publication Play Store/App Store.
