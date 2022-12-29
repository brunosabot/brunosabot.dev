---
color: "#CDD3D2"
creator: Bruno Sabot
date: 2010-12-29
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/michal-balog-ci4jDRiIIYE-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@mikbutcher">Michal Balog</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2010/les-includes-et-les-require-de-php/
platform: Blog
subtitle: "Vous êtes peut-être déjà tombés sur le problème suivant : lorsque l’on utilise un include, le caractère « null » coupe l’inclusion du fichier."
tags: include, php, require, sécurité
title: Les « includes » et les « require » de PHP
---

Avez-vous déjà utilisé les includes et les require de PHP ?

Si oui, vous êtes peut-être déjà tombés sur le problème suivant : lorsque l’on utilise un include, le caractère « null » coupe l’inclusion du fichier.

Le problème est principalement posé lors de l’inclusion dynamique d’un fichier. Imaginez un simple sur le site example.com :

```php
include $_GET['file'];
```

Il suffit d’utiliser l’URL http://example.com/?file=.htaccess%00 pour accéder au contenu du fichier .htaccess, et éventuellement bien pire !

Pour résoudre le problème ? Vérifier que le fichier inclus est bien un fichier que l’on autorise à l’inclusion, avec éventuellement un tableau des fichiers autorisés, tester que le fichier est bien un fichier PHP (et donc que le contenu sera interprété), et toute autre vérification, qui bien entendu ne sera pas superflue.

Mais évidement, vous faites déjà les vérifications nécessaires 😉
