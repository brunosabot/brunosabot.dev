---
canonical: https://betterprogramming.pub/loading-gists-in-a-nextjs-application-cb60e3f9d523
creator: Bruno Sabot
date: 2022-03-01
lang: en
originalImage: https://storage.googleapis.com/brunosabot.dev/img/roman-synkevych-wX2L8L-fGeA-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@synkevych">Roman Synkevych</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2022/loading-gists-in-a-nextjs-application
platform: Medium
subtitle: A tutorial on how to load GitHub Gists from inside markdown pages of a NextJS blog
tags: Programming, React, JavaScript, Web Development, NextJS
title: Loading Gists in a NextJS Application
---

# Introduction

All my blog posts are available on my [personal website](https://brunosabot.dev). Under the hood, they are saved as markdown files.

It allows me to easily write the posts, but when I’m cross-posting on other platforms, I don’t have the luxury to get the syntax highlighting and the right colors for the code snippets.

To make it prettier on every platform, I’m using Github Gists. It renders well everywhere, but I don’t want to have Github’s code blocs styles on my blog but I prefer something that match my website design. To do so, I have to adapt the markdown parser I use to load and render the code from gists in the way I prefer.

In this post, we will see how to create a blog post using markdown files, how to create and integrate a remark plugin, highlight the recovered code it with `react-syntax-highlighter` and keep the performances as good as possible.

# Initial Situation: Loading Markdown in a NextJS Page

Before getting into the code for loading gists, we first need to make the blog to load markdown files. To do so, it needs two different items:

- A markdown file containing the blog post
- A NextJS page containing the markdown loading, parsing and rendering

Let’s start with the markdown file

## What Does The Markdown File Looks Like

The markdown file is separated in two different parts: the metadata and the content itself.

The metadata are here to give informations on the author, the date, the language used (I have posts both in french and english), the URL path, tags, etc.

These informations are isolated from the content by three dashes --- at the begin and three and the end.

Here is a light sample of what a blog post can look like:

`gist:brunosabot/69e418227ae80e3844348a522fa9fbbb`

The file is very simple. If you are not familiar with markdown, you can [read this doc from Github](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) to get started: you will learn how to create lists, links, add image and more.

In the reality of my bog, I have more metadata fields to handle canonical links, image, tags and more. I removed them from that post as it is unnecessary noise for its topic.

## Loading The Markdown File

The first part to render a markdown file is to load it. We are using basic NodeJS code to:

- Lookup all files in a folder
- Filter the md/mdx files only
- Load the file

It might be overkill, but on my blog, I need to get every posts to find the most similar posts of my current article, based on a calculation on every common tags they have. I will have to load every post to find out anyway.

Here is the code:

`gist:brunosabot/d1415002ea8e916cee28ca5c11ef8803`

If you are creating a simpler blog, you might prefer to directly load the right file instead of all of them. To do so, you just need to use the `fs.readFileSync` function to get your file.

Now the posts are loaded, we need to search inside the file which one is the right one for our current page.

To do so, I’m looking for the post with same path as requested, but I first need to parse my markdown for metadata. I’m using a package called `grey-matter` to get them.

Here is the code:

`gist:brunosabot/c5faec177d6a35826d65a3c759ee6458`

The `loadGreyMatterPost` is a function returning a file representing our markdown at the grey-matter format. We still have to transform it into an HTML code to use it. As explained earlier, I am also returning all the posts to make matches based on the tags. It will however not explained in this post.

Since I’m using NextJS, I can now use the package `next-mdx-remote` which can make the transformation from the grey-matter format to a MDX one.

Here is the code:

`gist:brunosabot/19298ac37429acba5234b7d6e416910b`

## Adding The Loaded Data Inside a NextJS Route

To avoid enormous and slow payload, the loading part is added inside the NextJS route’s `getStaticProps` method. It will only parse the files at the compile time, which is OK with markdown, and serve static pages the faster possible.

Here is the code:

`gist:brunosabot/4653bf5059006b804ef3da778c04de51`

## Display the blog post in the page

Now we have all the required informations, we can include them in the NextJS page.

It will need two external components:

- `MDXProvider` which is a component that can handle defaults informations for every children markdown document
- `MDXRemote` which transform the MDX content to HTML React components

Here is the code:

`gist:brunosabot/dd0de643a61b47668b47debf6858feb8`

And it is done! We are now able to write markdown blog post and get them rendered as HTML in our NextJS application!

# Creating a Remark plugin

## The AST transformation

A remark plugin is a function that return another function. That last one gets an AST -Abstract Syntax Tree- representing the markdown document.

The AST can get numerous fields, but here is a simple typescript interface of how it is structured:

`gist:brunosabot/bd30f8a6c30d230c3e7a8dc12789f1d6`

When using markdown, the AST for code does not have children or attributes, while the paragraph AST does not have any value. To understand how it is built, imagine the following markdown:

`gist:brunosabot/a514c47f2b011f3465815cb8cac489a7`

The associated AST will be:

`gist:brunosabot/c3ef93154908d6fc7ec9e559dd80227f`

With this in mind, we can think about how we are going to include our gist.

## Fetching a Gist From Github

I chose to include the gist in an inline block code, with a prefix `gist:` and then the username and ID. It will look like this:

```
gist:brunosabot/00000000000000000000000000000000
```

When rendering this content, the generated AST will be composed of a `paragraph` node with an `inlineCode` child. What we need to do is to replace the paragraph the loaded code from Github.

As we need code from Github, we will also need to fetch the gist. A gist can be made of one to several files: we will first need to iterate on the file list then load each one of them.

Here is the code:

`gist:brunosabot/0452d814c076b772dbb91ada500e999d`

The first fetch query gets a JSON containing metadata for the gist, especially the file list in the gist.

When the list is recovered, we iterate them to load as text the code associated to every file.

## Visiting And Updating The AST

The gist plugin should alter the content of the original AST. We are going to visit the document nodes and update it as we want.

To visit the different nodes, we use the `async-unist-util-visit` package. it will apply a method on every AST child that match the requested type.

As explain before, we are going to look for `inlineCode`, starting with `gist:`, inside a `paragraph` node, then parse it and load the gist.

But let’s focus on the visiting code:

`gist:brunosabot/7c438152e946327b4493ca62e562ff69`

One important thing to notice is that the AST must be mutated and not returned. Since `visit` is a promise but does not wait for the callback to resolve, we need to use a hack consisting on adding the work in a promise list and wait them to resolve before the plugin method to end.

In the code snippet:

- The `node.children.some` method is looking for a gist snippet in the code
- The `Object.assign` method is the way to update the content of the object without loosing the reference
- The `delete` is not mandatory, but I like to keep a clear object with only the required fields.

In the plugin, we are using a `loadAndTransformGist` method that is called when we detect a gist snippet in the code.

As it written in the function name, this method will load the gist and make the proper transformation to be included in the AST.

Here its code:

`gist:brunosabot/cbfecba9765c20c48a25815df7cb2578`

In this snippet, the first part is to check it the snippet is valid, which is basically checking if the AST value is empty or not.

I could make few more checks, including one to validate that the gist value is correct. I choose not to since I’m often checking the rendering of my post: I can see very quick when the ID is wrong since the app will either crash or don’t show anything.

I’m then extracting the gist ID, load it with the previously created `loadGist` method.

Then, I have two possibilities:

First, there is only one file in the gist. I will just replace the current paragraph with a bock sample. The `getGistAST` will give me the code AST that I will return for the calling method.

Second, there is multiple files in the gist. I will iterate on them and add them as children of the paragraph node.

The `getGistAST` is basically a mapping method with the following code:

`gist:brunosabot/98cf6ddccc3cd6d3d0c5e5efb0f80f1d`

Translated to english, this AST node is a `<Gist>` component, with:

- A file attribute representing the file name
- A code attribute which is the actual code
- A lang attribute containing the file language, calculated from a mapping method

And here is the mapping method:

`gist:brunosabot/8f7dcb1cb5f595b5c754b66c8423cbf8`

And everything is done, we just need to update our `transformGreyMatterToMDX` method, adding the plugin:

`gist:brunosabot/5dcd2b0374bb7445b1248d3ec0fdad78`

# Using a Custom Rendering Component

Now the markdown is able to read gist snippets, there is a last step to make the actual code rendering: we need to create a `Gist` component to make the proper display.

To do so, I will use the [React Syntax Highlighter](https://www.npmjs.com/package/react-syntax-highlighter) package.

Here what the component looks like:

`gist:brunosabot/983ed6698517b94caff8f884a3f56dd5`

We first have a single div, if the file name is available to display it.

Then, we use `Prism` from `react-syntax-highlighter` with the following attributes:

- `language`: the programming language the snippet is on. If not available, we set `text` which a a default and non highlighted language
- `showLineNumbers`: this display line numbers on the side. If text, it is better not to have them
- `wrapLines` and wrapLongLines: activate, when the code is `text` wrapping the lines. I found it not easy to read on highlighted code.

To be recognized, this Gist component needs to be included in the components given to the `MDXProvider`

Here the code:

`gist:brunosabot/4fc512dc3bdc5b3ac637f942c26c0466`

In bonus, you can see I’m rewriting the img component to add the `loading="lazy"` attribute. I will help my blog post to have better performances.

# Keep The Performances As Good As Possible

One problem with React Syntax Highlighter is that it will load a lot of language you might never need.

Hopefully, there is a way to use a lighter version of the library, but it require us to load the languages manually.

Here is the `<Gist>` component code with the loading system:

`gist:brunosabot/9b54f6191dd73013648e75c954b3f32e`

# Conclusion

Creating a Gist plugin for a NextJS blog requires us to know about and manipulate the AST format which might not be trivia.

I hope this post can help you understand how it works and how you can also add your gists files right into your blog.

> If you want to learn more about JavaScript and React, feel free to follow me on [Twitter](https://twitter.com/brunosabot).
