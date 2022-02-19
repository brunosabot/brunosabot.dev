---
creator: Bruno Sabot
date: 2011-04-22
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/clay-banks-myomBTc85dI-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@claybanks">Clay Banks</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2011/optimisation-de-boucles-javascript
platform: Blog
subtitle: Parfois, le code le plus simple n'est pas le plus performant. C'est le cas des boucles JavaScript.
tags: boucles, dynatrace, javascript, statsy, webperf
title: Optimisation de boucles JavaScript
---

N’étant pas resté au bout de la [soirée webperf](https://sites.google.com/a/survol.fr/webperf-user-group/actualites/soireedu21avril) du 21 avril, je ne me risquerais pas à faire un compte rendu qui risquerait d’être incomplet.

Néanmoins, lors de cette soirée nous avons découvert un morceau de code assez surprenant.

Pour se mettre dans le contexte, nous étions en train d’analyser le site de [20 minutes](http://www.20minutes.fr/), et Vincent Voyer à décidé de lancer un Dynatrace.

En regardant les résutlats, nous avons remarqué qu’un script avait un temps d’execution de… 1.1s, ce qui est bien entendu énorme ! Ce script vennait du tag xiti. Celui-ci sera peut-être corrigé, mais il pourra servir de cas d’exemple sur une mauvaise pratique.

En fouillant dans le code on découvre (en réindenté) le code suivant :

```javascript
var elts = target.getElementsByTagName("*");
for (var i = 0; i < elts.length; i++) {
  //...
}
```

Pourquoi est-ce un problème ? Avant de commencer à expliquer le problème, il est important de connaitre un point important. Pour celui-là, j’ai utilisé [statsy](/posts/2011/statsy-v2-quelques-ajouts).

```
JS in HTML attributes: 1351 bytes
CSS in HTML attributes: 2790 bytes
JS in SCRIPT tag: 4111 bytes
CSS in STYLE tag: 69039 bytes
All innerHTML: 215207 bytes
# SCRIPT tag: 54
# STYLE tag: 1
# DOM elements: 2143
Cookie size: 340 bytes
```

Dans la liste des résultats ci-dessus, on remarque que la page comporte 2143 élements. Le problème est simple :

Le `getElementsByTagName` récupère tout les éléments DOM. Ce qui demande beaucoup de traitement sur une page kilométrique comme celle d’un site de news.

Second problème, la boucle effectuée sur ces éléments recalcule cette selection à chaque itération de la boucle. Les élements sont donc recalculés 2143 fois. C’est simplement énorme.

Comment corriger le problème ? Pour le premier, il faut savoir si cette selection est vraiment importante. Qu’à-t-on besoin de faire sur tout l’arbre DOM ?

Pour le second, il suffit de mettre en cache la taille du tableau, par exemple comme ceci :

```javascript
var elts = target.getElementsByTagName("*");
for (var i = 0, len = elts.length; i < len; i++) {
  //...
}
```

Et dans ces conditions, le recalcul ne sera pas refait pour chaque itération.

Conclusion :

De plus en plus, les sites sont remplis de JavaScript. Ces améliorations peuvent sembler superflues, mais c’est ce qui peut faire la différence entre deux site.

Si vous n’en êtes pas convaincus, pensez aux utilisateurs de netbook, de tablettes ou de mobile : Vous allez leur faire gagner un temps fou !
