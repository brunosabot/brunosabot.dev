---
color: "#FDFEFF"
creator: Bruno Sabot
date: 2010-10-27
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/ben-white-W8Qqn1PmQH0-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@benwhitephotography">Ben White</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2010/statsy-v2-quelques-ajouts/
platform: Blog
subtitle: De nouvelles fonctionnalités pour améliorer le rapport Statsy
tags: bookmarklet, javascript, statsy, tool, webperf
title: Statsy v2 – Quelques ajouts
---

[Stoyan Stefanov](http://www.phpied.com/) à présenté [Stasty](http://www.phpied.com/statsy-more-data-points-for-markup-quality/), un bookmarklet qui permet d’obtenir très rapidement des informations notamment sur les style et script présents en inline sur une page.

Cependant, il manque sur ce script quelques informations importantes, facilement récupérables.

J’ai donc créé un nouveau bookmarklet avec des infomations un peu plus complètes :

```javascript
(function() {
  var jsattribs = [
    'onbeforeunload',
    'onclick',
    'ondblclick',
    'onerror'
    'onload',
    'onmousedown',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onunload',
  ],
  cssattribs = [
    'style'
  ];

  var all_elems = document.getElementsByTagName('*');

  function getAttribsSize(attribs) {
    var value = '',
      attr = '',
      cnt = 0;

    for (var i = 0; i < all_elems.length; i++) {
      for (var j = 0; j < attribs.length; j++) {
        attr = attribs[j];
        value = all_elems[i].getAttribute(attr);
        if (value && typeof value === 'string') {
          cnt += attr.length;
          cnt += 3; // ="..."
          cnt += value.length;
        }
      }
    }
    return cnt;
  }

  function getInlineSize(tag) {
    var s = 0,
      all = document.getElementsByTagName(tag);
    for (var i = 0; i < all.length; i++) {
      s += all[i].innerHTML.length;
    }
    return s;
  }

  var jsatt = getAttribsSize(jsattribs);
  var cssatt = getAttribsSize(cssattribs);

  var msg = [];
  msg.push('JS in HTML attributes: '+jsatt+' bytes');
  msg.push('CSS in HTML attributes: '+cssatt+' bytes');
  msg.push('JS in SCRIPT tag: '+getInlineSize('script')+' bytes');
  msg.push('CSS in STYLE tag: '+getInlineSize('style')+' bytes');
  msg.push('All innerHTML: '+document.documentElement.innerHTML.length+' bytes');
  msg.push('# SCRIPT tag: '+document.getElementsByTagName('script').length);
  msg.push('# STYLE tag: '+document.getElementsByTagName('style').length);
  msg.push('# DOM elements: '+all_elems.length);
  msg.push('Cookie size: '+document.cookie.length+' bytes');

  alert(msg.join("n"));
})();
```

N’hésitez pas à faire vos suggestions !

** _UPDATE 30/11/2010_ **

Suite à la demande de jpvincent, petit explicatif des différentes informations remontées :

`JS in HTML attributes` : Cette information remonte tout le code JavaScript présent directement dans les balises HTML en tant qu’attribut. Par exemple, une page qui contiendrait `<h1 onmouseover="alert('H1');"></h1>` ajouterait 26 bits à JS in HTML attributes

`CSS in HTML attributes` : Même procédé que pour les JavaScript détaillés un peu plus haut, en utilisant cette fois le contenu des attributs style (ex. `style="color:#f00;"`)

`JS in SCRIPT tag` : Cette information remonte le nombre de bits du code JavaScript présent au sein de balises

`JCSS in STYLE tag` : Même principe que la propriété précédente, cette information remonte le nombre de bits du code CSS présent au sein de balises `<style></style>`

`# SCRIPT tag` : Compte le nombre d’occurrence d’utilisation des balises `<script>` au sein de la page

`# STYLE tag` : Compte le nombre d’occurrence d’utilisation des balises `<style>` au sein de la page

`# DOM elements` : Compte le nombre d’éléments DOM au sein de la page

`Cookie size` : Retourne la taille en bit des cookies présent sur le fichier HTML, et donc probablement sur tout les fichiers statiques s’ils ne sont pas sur un domaine externe
