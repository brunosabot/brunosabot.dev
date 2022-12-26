---
creator: Bruno Sabot
date: 2011-05-10
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/tim-trad-AIwlyvpQJ18-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@timtrad">Tim Trad</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2011/hauteur-d-un-block-de-texte/
platform: Blog
subtitle: La taille d'un bloc de texte est toujours plus grande que le texte lui même... Pourquoi ?
tags: css, font-size, line-height
title: Hauteur d'un bloc de texte
---

Piqûre de rappel pour certains, découverte pour d’autres, vous avez peut-être déjà remarqué que dans ce cas :

```css
.bloc {
  font-size: 20px;
}
```

La hauteur du block div n’est pas de 20 pixel, mais « plus ». Ceci est, dans des cas d’intégration assez courants (positionnements relatifs) la source de problèmes.

Il est néanmoins assez difficile de définir ce « plus », qui semble être variable en fonction de la police utilisée et du navigateur.

Par exemple sous Chrome et Firefox avec Arial :

|           |     |     |     |     |     |     |     |     |     |     |     |
| --------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| font-size | 30  | 29  | 28  | 27  | 26  | 25  | 24  | 23  | 22  | 21  | 20  |
| height    | 36  | 35  | 34  | 33  | 31  | 31  | 30  | 28  | 27  | 25  | 25  |
| font-size | 19  | 18  | 17  | 16  | 15  | 14  | 13  | 12  | 11  | 10  | 9   |
| height    | 23  | 22  | 20  | 20  | 18  | 16  | 16  | 15  | 14  | 12  | 11  |

Le ratio est donc un calcul approximatif, probablement avec des arrondis, pas évident de connaitre donc la bonne hauteur du bloc.

C’est là que l’on fait intervenir le line-height. Il suffit de le rajouter Pour résoudre le problème :

```css
.bloc {
  font-size: 20px;
  line-height: 20px;
}
```

A présent, le div a bien une hauteur de 20 pixels de haut !
