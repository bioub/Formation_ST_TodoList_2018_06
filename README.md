TodoList
--------

# Installation

`npm install` pour installer les dépendances

# Dépendances de dev

* `eslint` pour vérifier les conventions de code
* `webpack` : bundler, outil de build
* `webpack-dev-server` : serveur de dev qui ne rebuild en RAM que le nécessaire (et raffraichir le browser comme `live-server`)
* `html-webpack-plugin` : plugin de webpack qui va copier le fichier HTML dans dist et insérer une balise script
* `babel-core` transpilateur (coquille vide)
* `babel-preset-env` l'ensemble des plugins à jour
sur ES6, ES7, ES8, ES9, une partie d'ESNext
* `babel-loader` l'intégration entre babel et webpack

# Lancer le build

En dev : `npm run build:dev`

En prod : `npm run build:prod`

# Lancer le serveur de dev

En dev : `npm run serve:dev`


# Exercice

## 1 - Envoyer avec axios : POST http://localhost:8080/api/todos

Envoyer la requete pour stocker la todo sur le serveur au submit du formulaire

## 2 - Envoyer avec axios : DELETE http://localhost:8080/api/todos/{object-id}

Envoyer la requete pour supprimer la todo du serveur au clic du bouton -


## 3 - Envoyer avec axios : PATCH http://localhost:8080/api/todos/{object-id}

Au clic des checkboxes et sur l'événément blur des champs de la liste
(au moment ou le curseur quitte le champs), envoyer les requetes PATCH vers l'API REST pour mettre à jour les todos


## 4 - Stocker le contenu

Sur l'événement unload de window, stocker les todos dans le localStorage et les réafficher plus rapidement au chargement de l'appli (synchrone vs la requete axios qui est async)


