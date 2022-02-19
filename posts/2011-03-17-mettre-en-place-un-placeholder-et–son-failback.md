---
creator: Bruno Sabot
date: 2011-03-17
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/el-alce-web-njX7_Ixraio-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@elalceweb">el alce web</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2011/mettre-en-place-un-placeholder-et–son-failback
platform: Blog
subtitle: "Le HTML5 apporte un nouvel attribut aux champs input text et assimilés : placeholder. Mais que faire sur les vieux navigateurs ?"
tags: html5, javascript, jquery, placeholder
title: Mettre en place un placeholder et son failback
---

Le HTML5 apporte un nouvel attribut aux champs input text et assimilés : placeholder.

Le principe de cet attribut est simple : lorsqu’un champ est vide, on affiche un texte de remplacement pour indiquer ce que doit contenir le champ. Il est très utilisé au niveau applicatif, comme dans l’omnibar de Firefox par exemple :

![Placeholder de l'omnibar de Firefox](https://storage.googleapis.com/brunosabot.dev/img/placeholder1.jpeg)

Le HTML5 nous permet de l’utiliser nativement. Cependant, cet attribut n’est pas encore disponible sous tout les navigateurs. L’objectif fixé par cet article est de mettre en place le système ainsi qu’un bon failback.

Pour effectuer tout ceci, j’utiliserais jQuery. Le script peut bien entendu être étendu à tout les framework, et je vous invite à mettre en commentaire le système avec d’autres systèmes.

Si l’on veut faire simple et tout gérer en JavaScript, il suffit d’écrire un code tel que le suivant :

```javascript
$('input[type="text"]')
  .blur(function () {
    if (this.value == "") {
      this.value = this.defaultValue;
    }
  })
  .focus(function () {
    if (this.value == this.defaultValue) {
      this.value = "";
    }
  });
```

Ce modèle présente une limitation, mais nous verons ça plus tard.

Le premier point à mettre en place est la reconnaissance de la présence du placeholder. On va ici utiliser la même méthode que Modernizr :

```javascript
var input = document.createElement("input");
if (!("placeholder" in input)) {
  // Faire ici le traitement pour les navigateurs ne reconnaissant pas le placeholder
  // Il suffit d'y placer le code précédent par exemple !
} else {
  // On supporte le placeholder : on vide la valeur par défaut
  $('input[type="text"]').val("");
}
```

Et voilà, le système est en place et il suffit de mettre en application le placeholder sur le champ input :

```html
<input type="text" placeholder="Exemple" />
```

Aller plus loin :

Les plus perspicaces vont tout de suite remarquer la limitation de cette méthode : Obligation de vider la valeur du champ de formulaire, dont pas de valeur par défaut possible, Impossible de rentrer le même texte que le placeholder, …

On peut aussi parler du l’interdiction du JavaScript, mais je considèrerais cela comme un détail sans importance : les plus grands sites (gmail, facebook, …) obligeant à l’utiliser, j’ommetrais les visteurs récalcitrants.

Les problèmes exposés, attaquons la première amélioration :

Afin d’éviter les problèmes de valeurs par défaut, je vais utiliser la trop peu connue fonction de jQuery data.

```javascript
$('input[type="text"]').each(function () {
  var $this = $(this);
  var $default = $this.data("placeholder");
  if ($default === undefined) {
    return;
  }
  $this.data("placeholderactive", true);
  $this
    .focus(function () {
      if ($this.data("placeholderactive") === true && $this.val() == $default) {
        $this
          .val("")
          .removeClass("placeholderactive")
          .addClass("placeholderinactive");
        $this.data("placeholderactive", false);
      }
    })
    .blur(function () {
      if ($this.data("placeholderactive") === false && $this.val() == "") {
        $this
          .val($default)
          .removeClass("placeholderinactive")
          .addClass("placeholderactive");
        $this.data("placeholderactive", true);
      }
    })
    .val($default)
    .removeClass("placeholderinactive")
    .addClass("placeholderactive");
});
```

Et son nouveau champ input associé :

```html
<input type="text" data-placeholder="Exemple" />
```

Pour mettre un style différent sur le champ placeholder, j’ai utilisé deux classes : placeholderactive et placeholderinactive qui s’occupent respectivement d’avoir un style en mode « placeholder » et un style hors de ce mode.

A vous de jouer et d’implémenter ce nouvel attribut HTML5 sur vos site !

N’hésitez pas à partager vos méthodes pour les autres framework JS ou les améliorations à apporter à mon script jQuery.
