---
canonical: https://betterprogramming.pub/javascript-spread-and-rest-operators-when-to-why-to-and-how-to-use-them-bfd65436c8f1
creator: Bruno Sabot
date: 2022-04-01
lang: en
originalImage: https://storage.googleapis.com/brunosabot.dev/img/scott-webb-pdlZrtuy-Dw-unsplash.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@scottwebb">Scott Webb</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2022/javascript-spread-and-rest-operators-when-to-why-to-and-how-to-use-them/
platform: Medium
subtitle: Understand two of the most useful JavaScript features
tags: JavaScript, Software Development, Software Engineeering, Web Development, Programming
title: "JavaScript Spread and Rest Operators: When To, Why To, and How to Use Them"
---

Ecmascript has introduced the rest and spread operators a few years ago. It is a powerful tool that helps a lot our code to be more concise and cleaner.

However, it is not that easy to understand how it works at first and what is the main reason they do not have the same name.

In this blog post, I will explain the naming, how it is working, and in which situation it is a time saver.

# Assignment shortcuts

Before we talk about the rest operator, you need to understand a new variable assignment method to shorten the code declaration.

It consists of using an array or an object on the declaration part of an assignment.

The code looks like this:

`gist: brunosabot/9b3632841673b46370817b038f3d0779`

As you can see, we are creating an array naming the indexes directly in the assignment part. This code is actually a shortcut and the same of the following code:

`gist: brunosabot/3f74a2dafb703f9567861db64028f803`

If this code is pretty simple, it might be a bit longer and therefore complex- when having a dozen of items in the array.

This is working the same with objects. Here is the code:

`gist: brunosabot/92f610ba615b0c6f04b9b07c71c5297d`

The only difference with the array is that the naming is very important since we are extracting the object from its keys.

If for any reason, you need to change the name (it could be a duplicate key), you can use the `:` operator to change the name. Here is an example:

`gist: brunosabot/49aa78f8bc47f9fca3f568aa440b20ab`

As you can see, we have a duplicate red key that we had assigned to a `frenchRed` variable and a `belgianRed` variable.

If you acknowledge this, you can now start the next part about the rest operator, that uses this variable assignment method.

# The rest operator

The name has been chosen wisely, the rest operator is a method to select the rest of the data that hasn't been already assigned.

This operator uses three dots `...` as a symbol to tell the JavaScript parser that we are using the rest feature.

But one point is really important to understand: the rest operator is only used on the assignment part of a JavaScript code. We saw the new assignment method in the previous chapter, but the reason it is important to link rest and assignment will be discussed later.

The rest operator works on the array since the beginning of the feature introduction, and a bit later on objects. If you managed to make it work on other JavaScript types, you are using coercion which I recommend you not to use. But this might be the content of another blog post.

Now that the basics are ok, let's see some code on how it looks:

`gist: brunosabot/1953d864555fcbdadd1d1deb819c6468`

As you can see in the previous code, the assignment is the same than the first chapter, but we add a single variable name with three dots `...` instead of the whole elements left.

This will tell the JavaScript parser to create an array with anything else in the first assignment, and an object with anything else in the second one.

# Why do we need the rest operator?

We mainly need this operator to extract a part of the array for a specific behavior and use the rest for something else.

Imagine you have an array with every soccer player of a team and you want to separate the goalkeeper from the field players, so you can give them the instruction to go full attack. You can do it with the following code:

`gist: brunosabot/59e4000e5ef58b486042bd89bb25ac84`

Of course, you can select two items if you want to keep a defender in the field:

`gist: brunosabot/2345665f931723d0a55e9af04944bf5e`

You can add as many variable declarations in the assignment, but you can not skip some variables in the rest argument. For this, you will need the spread method we'll see later.

For objects, the rest operator is very useful when you want to remove an element from the object you want to forward.

Imagine you are developing a Node.js service to manage users, and you want to send to the client everything from the object except the password and the password's salt... In this case, the rest operator will help you.

Here is the code:

`gist: brunosabot/52db659b2f4df71c6e16de618d132582`

With this, you can simply return the right data for the client's request

# The spread operator

Like the rest operator, the spread operator also uses the three dots `...` as a syntax.

The way to make the difference is to understand that the spread operator will be on the operation part of the variable assignment.

The goal is pretty the same as the rest operator, but instead of recovering the rest of a variable, we are adding the rest of another variable to a declaration.

Code speaks better, here is an example of how it works:

`gist: brunosabot/d18b75153aecd5c27602c8366d24083a`

On the previous example, we have combined two objects with the rest operator. If it's still not clear, here is an example that could help.

`gist: brunosabot/dac18f7eb862b33bcb0326d5a2fae1c5`

The syntax is not valid JavaScript, but it illustrates what is done under the hood.

As seen in that example, using the spread is kind of removing the brackets from our variable. Since it is something invalid in JavaScript, we need to put that in another array, making an array duplication in the meantime.

In arrays, the position of the rest operator is very important as it places the elements in the specified position.

Here is an illustration of that:

`gist: brunosabot/def326b3fda8c91f949dcc2ea5d42207`

In the previous sample, I also have another item in my array which is non-spread operator data. It is a perfectly valid thing to do if you want to complete your object with a unitary value. It could be having an array with the last execution result, complete with the previous results.

For objects, the spread operator works the same. However, as objects are key value items, the order does not really matter but you need to make sure your keys are not duplicated or they will be erased.

Here is an exemple:

`gist: brunosabot/1c90778188505dc22d9304ca647c6777`

As you can see in the previous example, the position of the spread operator is very important in case of duplicated keys.

As it's the case for arrays, the spread operator removes the braces from the object, but since it's invalid syntax, we are putting it back in another object duplicating it at the same time.

`gist: brunosabot/d7a818075cc5fcd4261527be3f83c3a5`

# When do we need the spread operator

As we have seen in one of the previous examples, the spread operator is mainly used to merge arrays from different sources or having defaults key/values when using objects.

You might find plenty of other usages while developing your JavaScript application.

# Combining rest and spread and more

Since it rest and spread are not on the same part of the assignment, you can combine both their usage in the same line of code. You should however take care of not using this to make your code harder to read: it will be counterproductive.

You can also apply the spread operator on a function return, as long as the value returned matches an array or an object depending on your usage.

Here is an example:

`gist: brunosabot/393fe888dadb25cd11461a01b2b39325`

# Conclusion

Rest and spread operator are very powerful features you can bring to your web application starting today.

If it is a bit hard to understand at first, it will make your code cleaner and more robust.

---

> Want to Connect?
>
> If you want to learn more about JavaScript and React, feel free to follow me on [Twitter](https://twitter.com/brunosabot).
