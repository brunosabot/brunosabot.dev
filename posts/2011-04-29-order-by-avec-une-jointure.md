---
color: "#899290"
creator: Bruno Sabot
date: 2011-04-29
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/benjamin-lehman-GNyjCePVRs8-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@benjaminlehman">benjamin lehman</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2011/order-by-avec-une-jointure/
platform: Blog
subtitle: Le saviez-vous ? Le choix de l'ordre du tri a un incidence sur les performance du tri
tags: index, myisam, mysql, order
title: ORDER BY avec une jointure
---

# Le saviez-vous ?

Le choix des champs pour l’ordre de tri est important dans une requête SQL.

Prennez par exemple la requête suivante :

```sql
SELECT *
FROM `ma_table_a` a
INNER JOIN `ma_table_b` b ON (a.`aid` = b.`aid`)
ORDER BY b.`aid` DESC
```

En plaçant un index sur le champ b.`aid`, celui-ci sera utilisé dans la requête, et celle-ci sera très rapide.

En réalité, ce n’est pas le cas. L’utilisation de cet index n’est absolument pas bon et vous allez probablement autant de temps à executer la requête que s’il n’y en avait pas.

# Pourquoi ?

Dans ce genre de requête, vous avez le tri qui est executé à la fin de la requête, juste avant le renvoi des données.

Le tri est executé sur une table temporaire qui ne contient pas d’index, et donc pas celui de la table `ma_table_b`.

# Comment corriger le problème ?

Si l’on choisit un index de la première table `ma_table_a`, celle de la close FROM, le tri sera effectué avant la jointure, et l’on peut ainsi bénéficier totalement de l’index de la table placé sur `aid` :

```sql
SELECT *
FROM `ma_table_a` a
INNER JOIN `ma_table_b` b ON (a.`aid` = b.`aid`)
ORDER BY a.`aid` DESC
```

Sur ce problème, en changeant la close ORDER BY par celle de la première table, je passe d’une requête de plus de 5 secondes… à 10ms.

- Moteur utilisé : MyISAM
- Nombre d’enregistrements : 130 000 / table
