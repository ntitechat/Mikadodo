MIKADODO — PROTECTION DES PHOTOS V4

Cette version ajoute une vraie sauvegarde externe des photos.

1. Ouvrir Mikadodo > Paramètres.
2. Cliquer « 🛡️ Créer la sauvegarde ZIP des photos ».
3. Le ZIP contient :
   - manifest.json : correspondance exacte des références idb: vers les fichiers ;
   - state.json : recettes, stock, agenda, etc. ;
   - photos/ : les vrais fichiers image présents dans IndexedDB ;
   - testImages/ : les images des recettes de test, si présentes.
4. Pour restaurer : Paramètres > « ♻️ Restaurer une sauvegarde » puis choisir le ZIP.

La restauration réécrit les images dans IndexedDB avec leurs clés d'origine : les recettes retrouvent donc leurs emplacements exacts.

La sauvegarde JSON exportée par « Exporter toutes mes données » contient également les vraies images en base64 (et non des blob: URLs).

La version demande aussi au navigateur un stockage persistant lorsque celui-ci le permet. Aucune application web ne peut cependant empêcher une suppression complète des données du site par l'utilisateur, une désinstallation ou une action du système. Le ZIP externe est donc la copie de secours à conserver.
