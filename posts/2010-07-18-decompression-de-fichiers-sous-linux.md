---
creator: Bruno Sabot
date: 2010-07-18
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/tim-johnson-20FJ6prKm28-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@mangofantasy">Tim Johnson</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2010/decompression-de-fichiers-sous-linux
platform: Blog
subtitle: Les formats de décompressions sous Linux sont assez compliqués à retenir, surtout étant donné le nombre de formats de compression existants.
tags: décompression, linux, shell
title: Décompression de fichiers sous Linux
---

Les formats de décompressions sous Linux sont assez compliqués à retenir, surtout étant donné le nombre de formats de compression existants.

Dans un de ses tweets, [@zeroload](http://twitter.com/zeroload/status/17777627644) pose ce problème.

J’utilise personnellement un script pour effectuer le travail. Celui-ci, récupéré il y a longtemps sur Internet et ajusté à mes besoins, il choisi son mode de décompression en fonction des formats du fichier, et exécute la commande associée.

Pour l’utiliser, il suffit de placer les lignes suivantes dans le fichier .bashrc :

```
extract () {
	if [ -f $1 ] ; then
		case $1 in
			*.7z) 7z x $1 ;;
			*.bz2) bunzip2 $1 ;;
			*.gz) gunzip $1 ;;
			*.rar) rar x $1 ;;
			*.tar) tar xvf $1 ;;
			*.tar.bz2) tar xvjf $1 ;;
			*.tar.gz) tar xvzf $1 ;;
			*.tbz2) tar xvjf $1 ;;
			*.tgz) tar xvzf $1 ;;
			*.Z) uncompress $1 ;;
			*.zip) unzip $1 ;;
			*) echo "Le format de compression de '$1' n'est pas supporté..." ;;
		esac
	else
		echo "'$1' n'est pas un fichier !"
	fi
}
```

On peut bien entendu ajouter très facilement un nouveau format géré par le script, et pourquoi pas créer une autre fonction pour gérer la compression suivant plusieurs formats !

NB: Pour recharger le fichier .bashrc, il suffit de se reconnecter au compte, ou de faire :

```
cd
. .bashrc
```
