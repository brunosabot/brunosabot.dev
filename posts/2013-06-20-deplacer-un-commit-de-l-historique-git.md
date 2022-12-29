---
color: "#292C3F"
creator: Bruno Sabot
date: 2013-06-20
lang: fr
originalImage: https://storage.googleapis.com/brunosabot.dev/img/yancy-min-842ofHC6MaI-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@yancymin">Yancy Min</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2013/deplacer-un-commit-de-l-historique-git/
platform: Blog
subtitle: Couper coller des commits d'une branche à une autre
tags: branch, git, rebase
title: Déplacer un commit de l'historique GIT
---

Il m’est arrivé récemment de vouloir déplacer un commit de mon historique sur une autre branche : à la base, il ne s’agissait que d’un petit correctif, qui s’est transformé en une fonctionnalité à part.

J’ai en revanche passé beaucoup de temps à trouver comment faire pour effectuer cette modification dans mon dépot.
Vous trouverez ci-dessous la liste de commandes que j’ai utilisé afin d’arriver à mes fins.

Attention, si vous avez déjà poussé les modifications sur un autre dépôt, vous risquez d’avoir des problèmes.
J’utilise par ailleurs le raccourci `git lg` que vous pourrez retrouver dans le dépot [dotfiles](https://github.com/brunosabot/dotfiles) de mon [github](https://github.com/brunosabot/).

```text
[09:53] bruno@PC-Bruno:~/git/project[master]$ git lg
* 034bcdf – (HEAD, master) Update on new functionality (Bruno Sabot 10 minutes ago)
* d39bc5b – New functionality (Bruno Sabot 10 minutes ago)
* 4102855 – Small bugfix (Bruno Sabot 10 minutes ago)
* 768cd9a – Initial commit (Bruno Sabot 10 minutes ago)
[09:55] bruno@PC-Bruno:~/git/project[master]$ git checkout 4102855
Note: checking out ‘4102855’.
You are in ‘detached HEAD’ state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.
If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:
git checkout -b new_branch_name
HEAD is now at 4102855… Small bugfix
[09:56] bruno@PC-Bruno:~/git/project[(4102855…)]$ git branch project
[09:56] bruno@PC-Bruno:~/git/project[(4102855…)]$ git checkout master
Previous HEAD position was 4102855… Small bugfix
Switched to branch ‘master’
[09:56] bruno@PC-Bruno:~/git/project[master]$ git lg
* 034bcdf – (HEAD, master) Update on new functionality (Bruno Sabot 12 minutes ago)
* d39bc5b – New functionality (Bruno Sabot 12 minutes ago)
* 4102855 – (project) Small bugfix (Bruno Sabot 12 minutes ago)
* 768cd9a – Initial commit (Bruno Sabot 13 minutes ago)
[09:56] bruno@PC-Bruno:~/git/project[master]$ git rebase –onto 768cd9a 4102855 master
First, rewinding head to replay your work on top of it…
Applying: New functionality
Applying: Update on new functionality
[09:56] bruno@PC-Bruno:~/git/project[master]$ git lg
* 1aa8de7 – (HEAD, master) Update on new functionality (Bruno Sabot 4 seconds ago)
* 4afb8d3 – New functionality (Bruno Sabot 4 seconds ago)
* 768cd9a – Initial commit (Bruno Sabot 13 minutes ago)
[09:56] bruno@PC-Bruno:~/git/project[master]$ git checkout project
Switched to branch ‘project’
[09:56] bruno@PC-Bruno:~/git/project[project]$ git lg
* 4102855 – (HEAD, project) Small bugfix (Bruno Sabot 13 minutes ago)
* 768cd9a – Initial commit (Bruno Sabot 13 minutes ago)
[09:56] bruno@PC-Bruno:~/git/project[project]$ git checkout master
Switched to branch ‘master’
[09:56] bruno@PC-Bruno:~/git/project[master]$ git merge project
Merge made by recursive.
0 files changed, 0 insertions(+), 0 deletions(-)
create mode 100644 project2
[09:56] bruno@PC-Bruno:~/git/project[master]$ git lg
* 66b91dd – (HEAD, master) Merge branch ‘project’ (Bruno Sabot 1 seconds ago)
|
| * 4102855 – (project) Small bugfix (Bruno Sabot 13 minutes ago)
* | 1aa8de7 – Update on new functionality (Bruno Sabot 25 seconds ago)
* | 4afb8d3 – New functionality (Bruno Sabot 25 seconds ago)
|/
* 768cd9a – Initial commit (Bruno Sabot 13 minutes ago)
```

Toute la magie s’opère à la commande `git rebase –onto 768cd9a 4102855 master` :

- Le **rebase** signifie que l’on veut déplacer des commits de notre arbre
- **–onto 768cd9a** indique que les commits déplacés le seront à la suite du commit #768cd9a
- **4102855 master** sélectionne tous les commits entre 4102855 (exclu) et master (inclus)

A vous de jouer !
