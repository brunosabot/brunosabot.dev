---
color: "#52585A"
creator: Bruno Sabot
date: 2011-03-20
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/erik-odiin-nfQk1YdGoNc-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@odiin">Erik Odiin</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2011/load-average-enorme/
platform: Blog
subtitle: Quelles solutions pour détecter, analyser, reporter et corriger les problèmes de charge CPU ?
tags: cron, linux, load average, monitoring, uptime
title: Load average énorme !
---

Ce matin, j’ai été confronté à des problèmes de lenteur serveur. Des temps de réponses excessivement hauts, d’énormes latences en SSH, un load average énorme.

Quel a été la démarche pour résoudre ce problème ? C’est l’objectif de ce billet de présenter les problèmes rencontrés.

Tout d’abord, il faut savoir que j’ai mis en place un script de surveillance de la charge serveur. Celui-ci, qui tourne sur un cron, me prévient lorsque le _load average_ dépasse 1.

J’ai volontairement mis la valeur assez basse, pour anticiper au mieux tout problème.

Si vous voulez en apprendre un peu plus sur ce qu’est le load average, je vous recommande [cet article](http://blog.scoutapp.com/articles/2009/07/31/understanding-load-averages).

Le script que j’utilise est le suivant :

```bash
max_loadavg=1

date=`date '+%d-%m-%Y'`
loadavg=$(cat /proc/loadavg | awk '{print $1}')

if [ $(echo "$loadavg >= $max_loadavg"|bc) -eq 1 ]
then

SUBJECT="`hostname` ALERT LOAD AVERAGE $loadavg(>$max_loadavg)"
EMAIL="xxxxxxxxxxxx@xxxxxxx.xx"
EMAILMESSAGE="Load Average : $loadavg on `date`"

echo $EMAILMESSAGE | mail -s "$SUBJECT" "$EMAIL"

fi

exit
```

Ce matin donc, je reçoit un mail pour me prévenir que la charge est trop importante. En effet, le message est le suivant:

```text
Load Average : 29.28 on dimanche 20 mars 2011, 07:08:01 (UTC+0100)
```

Je lance mon putty, et j’execute la commande suivante :

```text
root@r00000:~$ uptime
07:15:59 up 7:06, 2 users, load average: 26.09, 29.07, 31.01
```

Le problème est bien toujours présent. Je commence ma recherche :

```bash
top -b -n 1 | awk '{if (NR <=7) print; else if ($8 == "D") {print; count++} } END {print "Total status D: "count}'
```

Cette commande [trouvée sur le net](http://www.linuxquestions.org/questions/red-hat-31/high-load-average-low-cpu-usage-615506/) me permet d’obtenir une liste de processus source du problème.

Et là bingo, j’ai une liste considérable de processus _cron_ dans ma liste : le problème vient de là, il ne me reste plus qu’à vérifier et à résoudre.

Je prend mon mal en patience, le temps d’ouvrir l’édition de _crontab_, je commente toutes les lignes, et je relance.
Plus de problème, la charge se remet à baisser, le soucis provient bien de là. Il ne me reste plus qu’à fouiner un peu les executions du cron pour trouver le problème et le corriger.

_crontab_ se relance… et pour l’instant, je touche du bois !
