---
color: "#623240"
creator: Bruno Sabot
date: 2008-08-07
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/markus-spiske-NctO2nqkWCY-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@markusspiske">Markus Spiske</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2008/voilabot-attaque-les-sites/
platform: Blog
subtitle: Depuis quelques temps, le robot de Voila, VoilaBot Beta 1.2, se met à crawler les sites Internet... Mais un peu trop.
tags: sysadmin, iptables
title: VoilaBot attaque les sites !
---

Depuis quelques temps, le robot de Voila, VoilaBot Beta 1.2, se met à crawler les sites Internet.

Normal me direz-vous… Cependant, la fréquence de crawl est bien trop élevée, on a ainsi une nouvelle connexion au serveur toutes les secondes.
Le nombre de connexions devient vite excessif, et le serveur surchargé prend trop de temps à répondre, voire même ne répond plus.

Les IP concernées par le VoilaBot sont les suivantes :

```text
193.252.149.15
193.252.149.16
81.52.143.15
81.52.143.16
```

Ces IP sont associées respectivement au noms de domaine suivants : natcrawlbloc03.net.s1.fti.net, natcrawlbloc01.net.s1.fti.net, natcrawlbloc04.net.s1.fti.net, natcrawlbloc02.net.s1.fti.net

Les autres adresses de VoilaBot semblent être inactives depuis un moment.

La première solution censée bloquer les bot des moteurs de recherche est de créer un fichier robots.txt, et d’interdire l’accès au site pour certains moteur. Il faut donc uploader un fichier nommé robots.txt à la racine du site qui contiendrait le code suivant :

```text
User-agent: VoilaBot
Disallow: /
```

Malheureusement, cette solution semble inutile puisque VoilaBot semble passer à travers et ignore donc les normes définies par l’ensemble des moteurs de recherche.

La solution suivante serait de bloquer l’accès au niveau du fichier .htaccess, de la manière suivante :

```text
deny from 193.252.149.15
deny from 193.252.149.16
deny from 81.52.143.15
deny from 81.52.143.16
```

Cette solution est maintenant efficace, mais le problème est que le serveur va tout de même recevoir la connexion des IP désignées et donc, il y aura quand même de la surcharge au niveau du serveur.

La dernière solution et la plus efficace est d’utiliser le firewall IPTABLES. Il faut pour cela être sur serveur dédié Linux et avoir les accès root puisque nous allons configurer le firewall.

La documentation pour le télécharger et l’installer est disponible sur netfilter.org

Une fois installé, on rejette les adresses de VoilaBot en entrant les commandes shell suivantes:

```text
iptables -I INPUT -s 193.252.149.15 -j DROP
iptables -I INPUT -s 193.252.149.16 -j DROP
iptables -I INPUT -s 81.52.143.15 -j DROP
iptables -I INPUT -s 81.52.143.16 -j DROP
```

Cette fois, VoilaBot ne peut plus accèder au serveur, le problème est réglé, et tout à coup, les pages se chargent enfin à une vitesse normale.

On peut aussi créer un fichier de configuration pour exécuter automatiquement ces requêtes au démarrage du serveur qui, dans l’hypothèse de création d’un fichier de configuration /etc/init.d/firewall, peut ressembler à ceci :

```bash
#!/bin/sh
# chkconfig: 3 21 91
# description: Firewall
IPT=/sbin/iptables
case "$1" in
start)
$IPT -I INPUT -s 193.252.149.15 -j DROP
$IPT -I INPUT -s 193.252.149.16 -j DROP
$IPT -I INPUT -s 81.52.143.15 -j DROP
$IPT -I INPUT -s 81.52.143.16 -j DROP
echo "Lancement du firewall ... OK"
exit 0
;;
stop)
$IPT -F INPUT
echo "Arrêt du firewall ....... OK"
exit 0
;;
restart)
/etc/init.d/firewall stop
/etc/init.d/firewall start
exit 0
;;
*)
echo "Usage: /etc/init.d/firewall {start|stop|restart}"
exit 1
;;
esac
```

Il suffit donc d’exécuter les commandes :

- Pour démarrer le firewall : /etc/init.d/firewall start
- Pour arrêter le firewall : /etc/init.d/firewall stop
- Pour redémarrer le firewall : /etc/init.d/firewall restart

Pour conclure, on peut dire qu’il est dommage qu’un moteur de recherche français nuise ainsi aux sites Internet… Pour rattraper son retard ? Parce qu’il est mal configuré ? Des questions à poser aux développeurs du VoilaBot…
