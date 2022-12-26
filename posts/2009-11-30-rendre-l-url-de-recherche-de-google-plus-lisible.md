---
creator: Bruno Sabot
date: 2009-11-30
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/katie-moum-3FVeCbX6OrY-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@katiemoum">Katie Moum</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2009/rendre-l-url-de-recherche-de-google-plus-lisible/
platform: Blog
subtitle: Matt Cutts, responsable de la webspam team de google à posté sur son twitter Une méthode pour rendre les URL de recherche de Google plus jolies.
tags: bookmarklet, javascript, tool
title: Rendre l’URL de recherche de Google plus lisible
---

Matt Cutts, responsable de la webspam team de google à posté sur son twitter [Une méthode pour rendre les URL de recherche de Google plus jolies](http://twitter.com/mattcutts/status/6188628631).

Lorsque vous faites une recherche, vous tombez facilement sur une URL du type http://www.google.com/search?source=ig&hl=en&rlz=&q=google&aq=f&oq=&aqi=g-p3g7 qui n’est au final pas très lisible. Cette méthode permet de transformer cette URL en une plus compréhensible pour l’humain et aillant les mêmes résultats : http://www.google.com/search?q=google.

Malheureusement, dans l’exemple que je donne, cette méthode est buggée et ne retourne pas un bon résultat. J’ai donc corrigé ce bookmarklet afin d’avoir un résultat correct en toute situation.

Pour les personnes qui voudraient éventuellement analyser le code, le voici en version non minimifiée :

```javascript
javascript: (function () {
  var windowLocationHref = window.location.href;
  var domainName = window.location.hostname;
  var myPathname = window.location.pathname;
  var searchArray = windowLocationHref.split("&");
  var mySearch = "";

  for (myElement in searchArray) {
    if (searchArray[myElement].match(/^q=/)) {
      mySearch = searchArray[myElement];
    }
  }

  var searchOnly = domainName + myPathname + "?" + mySearch;

  self.location.href = "http://" + searchOnly;
})();
```
