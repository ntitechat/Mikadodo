Optimisations appliquées
- L'interface est rendue immédiatement, sans attendre IndexedDB.
- Les migrations de photos passent en arrière-plan.
- Décodage image asynchrone pour éviter de bloquer l'affichage.
- Les images visibles sont prioritaires; les autres sont chargées en lazy-loading.
- Service worker avec cache-first pour images et fichiers statiques, avec actualisation en arrière-plan.
- Le cache est versionné (v3) pour éviter de conserver les anciennes ressources.
