---
creator: Bruno Sabot
date: 2008-08-11
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/breana-panaguiton-P4vFfdGl_8s-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@bmpanaguiton">Breana Panaguiton</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2008/php-warning-include_once-1
platform: Blog
subtitle: "Lors de la créations de vos sites Internet, vous avez peut-être un jour obtenu l’erreur suivante : Warning: include_once(1)"
tags: php
title: "PHP : Warning: include_once(1)"
---

Lors de la créations de vos sites Internet, vous avez peut-être un jour obtenu l’erreur suivante :

```
Warning: include_once(1) [function.include-once]: failed to open stream: No such file or directory in Votre chemin
```

Cette erreur est due à l’utilisation des fonction `die` ou `exit` combinée à `include`, `include_once`, `require` ou `require_once` dans votre code. Un exemple vaut mieux que de longues explications :

```
<?php
include_once('fichier.php') or die('Impossible d'ouvrir le fichier');
?>
```

L’exemple ci-dessus est incorrect, préférez-lui donc le code suivant :

```
<?php
if (!include_once('fichier.php')) {
  echo 'Impossible d'ouvrir le fichier';
}
?>
```

La seule explication que j’ai pu trouver de cette erreur est que la fonction include peut s’écrire

```
<?php
include 'fichier.php';
?>
```

ce qui ne correspond pas à l’appel d’une fonction. Ainsi, PHP interprèterais d’abord `'fichier.php' or die('Erreur');`, puis ferrait une inclusion de ce résultat (qui vaut toujours le booléen VRAI).
