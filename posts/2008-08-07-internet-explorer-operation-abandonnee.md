---
creator: Bruno Sabot
date: 2008-08-07
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/wonderlane-V_fSbpUQSmQ-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@wonderlane">Wonderlane</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2008/internet-explorer-operation-abandonnee
platform: Blog
subtitle: Si l’on prend des navigateurs différents, on n’obtient pas forcement la même chose avec le même code. C’est régulièrement le cas avec Internet Explorer et Mozilla Firefox.
tags: Javascript
title: "Internet Explorer : Opération abandonnée"
---

Si l’on prend des navigateurs différents, on n’obtient pas forcement la même chose avec le même code. C’est régulièrement le cas avec Internet Explorer et Mozilla Firefox.

J’ai récemment eu des complications avec un code JavaScript. Le message indiquait « Internet Explorer ne peut pas ouvrir le site » « Opération abandonnée ! »

La raison de se problème réside dans le fait que du code JavaScript est exécuté avant le chargement complet de la page. Internet Explorer ne le supporte pas et bloque son chargement. Pour parer ce problème, il existe plusieurs méthodes, suivant s’il l’on utilise un Framework tel que prototype.js ou si l’on n’insère que quelques bout indépendant de script dans ses pages.

Pour la première solution, je pars du principe que l’on utilise propotype.js comme framework.

Il suffit de remplacer le code actuel par :

```javascript
event.observe(window, "load", function () {
  // Insérer le script ici
});
```

Ainsi, la fonction faisant planter Internet Explorer ne s’exécute qu’après le chargement de la page et l’on peut souffler.

La deuxième manière consiste à modifier soi-même le load de la fonction.

```javascript
window.onload = function () {
  // Insérer le script ici
};
```

Afin de coder proprement et permettre des ajouts futurs simple, nous allons ajouter la fonction au chargement de la page et non la remplacer comme il est habituellement fait et comme je l’ai montré ci-dessus. A la première syntaxe, préférez :

```javascript
window.onload += function () {
  // Insérer le script ici
};
```

Nous faisons ici une concaténation et la fonction est ajoutée aux autres exécutés en cas de chargement de la page.

Et voilà, un problème de compatibilité réglé !
