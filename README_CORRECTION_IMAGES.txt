MIKADODO — CORRECTION DE PERSISTANCE DES IMAGES

Corrections apportées :
- Cache du service worker versionné en v6 pour forcer le renouvellement de l'ancien cache.
- Les 55 images de secours (image_001.jpeg à image_055.jpeg) sont maintenant précachées.
- Les références IndexedDB disposent d'un chemin de secours explicite vers les fichiers fournis.
- Les données photo restent dans IndexedDB quand le navigateur le permet.

Installation :
1. Décompresser ce ZIP et publier TOUT le contenu du dossier Mikadodo-repare sur le même hébergement que la version actuelle.
2. Remplacer les anciens fichiers par ceux de cette archive, sans supprimer les images image_001.jpeg à image_055.jpeg.
3. Fermer puis rouvrir l'application. Si elle est installée comme PWA, la fermer complètement puis la relancer afin que le service worker v6 s'active.
4. Dans l'application, créer régulièrement une sauvegarde complète et conserver le fichier hors du téléphone.

Important :
Aucun navigateur ne peut garantir la conservation si l'utilisateur efface les données du site, désinstalle l'application ou si le stockage est supprimé par le système. Une sauvegarde exportée reste la protection la plus fiable. Ce correctif a été vérifié sur les fichiers du projet, mais ne peut pas être testé sur votre appareil/hébergement depuis cette archive seule.
