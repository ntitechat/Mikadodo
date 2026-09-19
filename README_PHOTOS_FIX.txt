CORRECTION PHOTOS v3

Le problème venait du chargement des anciennes photos idb: : l’application essayait de faire fetch() sur des fichiers locaux. Sur Android/Chrome, fetch(file://...) est bloqué.

La version v3 utilise directement les chemins relatifs image_001.jpeg ... image_055.jpeg pour l’affichage, tout en conservant les références idb:.

Vérification : 55/55 fichiers JPEG présents et lisibles.
