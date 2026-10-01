MIKADODO — PROTECTION DES PHOTOS V2

Cette version renforce la conservation des photos importées dans l'application.

- Chaque photo importée est enregistrée dans IndexedDB sous une référence idb:.
- IndexedDB devient la copie persistante de l'état de l'application.
- localStorage n'est plus indispensable pour conserver les références aux photos : s'il est plein ou indisponible, la sauvegarde IndexedDB continue.
- Une demande de stockage persistant est effectuée lorsque le navigateur le permet.
- La restauration relit l'état sauvegardé dans IndexedDB au démarrage.

IMPORTANT : aucune application web ne peut garantir la conservation si l'utilisateur efface les données du site/de l'application, désinstalle l'application, ou si le système supprime volontairement toutes les données de l'application. Il faut dans ces cas conserver une exportation de secours.
