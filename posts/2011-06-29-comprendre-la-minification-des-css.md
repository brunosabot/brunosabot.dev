---
creator: Bruno Sabot
date: 2011-06-29
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/pankaj-patel-6JVlSdgMacE-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@pankajpatel">Pankaj Patel</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2011/comprendre-la-minification-des-css/
platform: Blog
subtitle: Comment fonctionne la minification réellement et pourquoi est-ce un vrai gain ?
tags: css, performance, minification
title: Comprendre la minification CSS
---

Minifier son CSS a bien entendu pour avantage de réduire le nombre de caractères présents dans une feuille de style, et donc son poids.

Il existe plusieurs types de compression. La plus simple consiste à supprimer les caractères superflus du CSS. Par exemple :

- Suppression des blancs multiples
- Suppression des retour à la ligne
- Replacement des 0px par 0
- Suppression des » ou ‘ dans une URL (ex. background:url(toto.jpg))

Il est néanmoins possible d’aller plus loin dans nos optimisations. En quoi ça consiste ?

# Regrouper les mêmes règles

```css
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h1 {
  color: #369;
}
```

Ici, on peut simplifier le code (de 9 octets) en

```css
h1 {
  font-size: 2em;
  color: #369;
}
h2 {
  font-size: 1.5em;
}
```

Sans compter les répétitions éventuelles de certains attributs

# Réécrire les règles CSS

```css
h1 {
  margin-top: 10px;
  margin-bottom: 20px;
}
```

Dans cet exemple, regrouper les attributs peut faire gagner 17 octets :

```css
h1 {
  margin: 10px 0 20px;
}
```

De même que pour le moyen précédent, les répétitions de certains attributs peuvent encore plus diminuer la taille de la feuille de style.

# Décomposer les CSS

```css
h1 {
  font-size: 2em;
  color: #369;
}
h2 {
  font-size: 1.5em;
  color: #369;
}
h3 {
  font-size: 1.2em;
  color: #369;
}
```

En décomposant les règles on gagne 7 octets :

```css
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.2em;
}
h1,
h2,
h3 {
  color: #369;
}
```

Certes le gain est moins important, mais reporté sur une feuille de style complète, il devient intéressant

# Que faire ?

Effectuer ces modifications peuvent casser la mise en page du site, du fait de la gestion des priorités de CSS. Il faut donc savoir le faire avec précaution.

Il existe bien entendu des outils pour gérer ce genre de problématique de compression :

- [Clean CSS](http://www.cleancss.com/)
- [CSS Compressor](http://www.codenothing.com/css-compressor/)

Ces deux outils permettent de faire des optimisations très avancées, tout en étant capable de gérer des niveaux plus où moins élevés de compression.
