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
