---
color: "#947C88"
creator: Bruno Sabot
date: 2013-07-02
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/tomas-sobek-plwud_FPvwU-unsplash.jpg
originalImageAlt: Photo by <a href="https://unsplash.com/@tomas_nz">Tomas Sobek</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2013/optimisation-des-images-comprendre-la-dirty-transparency/
platform: Blog
subtitle: sur un PNG-24, avec de la semi-transparence, on se retrouve confronté à un gros surplus d'informations, appelé « dirty transparency ».
tags: Webperf, PNG, PHP, Programming
title: "La « dirty transparency »"
---

Les consignes webperf un peu partout vous recommanderont de réduire la taille de vos images. Pour cela, il suffit d'utiliser des logiciels appropriés afin de supprimer toutes les méta-données qui pourrait alourdir le composant graphique.

Lorsque l'on travaille sur une image de type PNG-24, avec de la semi-transparence, on se retrouve confronté à un gros surplus d'informations causés par la transparence, appelé « dirty transparency » par les anglophones.

Avant d'expliquer ce dont il s'agit, il faut revoir la structure du format PNG :
Le PNG-24 est composé de trois informations de couleur : Rouge-Vert-Bleu, avec chacune de ces informations codé sur... 24/3 = 8 bits, soit 256 (28) teintes différentes.

En fait, le fonctionnement est identique aux couleurs hexadécimales que l'on utilise en CSS par exemple, mais répété pour chaque point.

- Premier point : R-255, V-255, B-255
- Deuxième point : R-253, V-254, B-255
- Troisième point : R-251, V-253, B-255
- etc.

Une fois l'image traitée dans sa totalité, le PNG est compressé afin d'obtenir une image de plus petite taille.

Jusque là, la seule optimisation possible de la taille de l'image résulte de l'utilisation de différentes options pour que la compression des données brutes soit optimale.

Lorsque l'on induit la transparence, On ajoute en une information de plus : le niveau de transparence, sur 8 bits soit 256 (28) niveaux de transparence.

- Premier point : R-255, V-255, B-255, A-30
- Deuxième point : R-253, V-254, B-255, A-0
- Troisième point : R-251, V-253, B-255, A-0
- etc.

Quelle est la différence ? Seulement le canal "Alpha" qui donne l'information du niveau de transparence pour le pixel.
L'image continue d'exister avec toutes les informations de couleur, même si le pixel est déclaré "totalement transparent", et, si toutes ces informations sont différentes comme dans l'exemple montré ci-dessous, la compression ne sera jamais optimale.

Heureusement, ce problème du format PNG est facile à contourner : Il suffit de remplacer tout les pixels transparents (Soit alpha = 0) par une même couleur, totalement transparente :

- Premier point : R-255, V-255, B-255, A-30
- Deuxième point : R-0, V-0, B-0, A-0
- Troisième point : R-0, V-0, B-0, A-0
- etc.

Ainsi, la compression de l'image sera bien meilleure, car le pattern le pattern "pixel transparent" est le même dans toute l'image. J'ai personnellement réussi à diviser la taille de l'image jusqu'à 3.

Pour arriver à ceci, j'utilise le code php suivant, que je vous recommande d'utiliser une seule fois, à la mise en production par exemple, puisqu'il est assez coûteux en ressources :

```php
$i = '/path/to/png/file';
$o = '/path/to/output/file';

$in = imagecreatefrompng($i);

imagealphablending($in, false);
imagesavealpha($in, true);

$x = imagesx($in);
$y = imagesy($in);

$mx = 0;
while ($mx < $x) {
    $my = 0;
    while ($my < $y) {
        $c = imagecolorat($in, $mx, $my);
        if (($c & 0x7F000000) == 0x7F000000) {
            imagesetpixel($in, $mx, $my, 0x7F000000);
        }
        $my++;
    }
    $mx++;
}

imagepng($in, $o, 9);
```

Une fois le script passé, vous pouvez/devez aussi passer l'image dans votre compresseur classique afin de gagner encore quelques octets sur la taille de vos images.
