# Correctif notifications Mikadodo

Remplace dans ton dépôt GitHub :
- `index.html`
- `sw.js`

Le correctif :
- utilise `ServiceWorkerRegistration.showNotification()` au lieu de `new Notification()` pour Android ;
- évite les doublons après rechargement ;
- revérifie les rappels au retour dans l'application ;
- vérifie les rappels toutes les 5 secondes quand la page est active ;
- ajoute le clic sur une notification pour rouvrir Mikadodo.

Important : une application web seule ne peut pas garantir un rappel lorsque Chrome a complètement arrêté la page. Pour des notifications fiables même application fermée, il faudra ensuite ajouter un vrai système Push avec un serveur.
