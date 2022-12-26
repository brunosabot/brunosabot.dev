---
canonical: https://betterprogramming.pub/fetching-data-with-react-72df95683c70
creator: Bruno Sabot
date: 2022-02-01
lang: en
originalImage: https://storage.googleapis.com/brunosabot.dev/img/photo-1543946602-8496af5aaa53.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@sanderweeteling">Sander Weeteling</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2022/fetching-data-in-react/
platform: Medium
subtitle: From custom made code to powerful libraries
tags: Programming, React, JavaScript, Web Development, Software Engineering
title: Fetching data with React
---

# Introduction

When we create a React application, there are a lot of chances you will have to fetch data from a remote server.

Depending on your project, you will probably have to make simple calls or use advanced techniques to get your data cached or up to date.

In this blog post, we will discuss custom-made data fetching but also have a quick preview of [React Query](https://react-query.tanstack.com/) and [SWR](https://swr.vercel.app/). Let's take a tour of these common techniques so you can pick the right ones for your use cases.

# Basic Data Fetch

To explain how to make a custom data fetching, we will pass through a few steps to understand how to make the code robust enough, based on what it can be to think about the perfect loading system.

If you are not confident enough to manage it on your own, I recommend you go directly to the last sections on SWR and React Query.

# Using the JavaScript Fetch Method

To get a basic data fetching working, we only need a place that will contain the recovered data and a method to make the actual fetching.

Speaking of the code, it consists of the `useEffect` hook to make the data fetching and a `useState` hook that will store the data as soon as the request end.

`gist:brunosabot/70f06dc89a783020c6898c1873f4972c`

As you can see, you can get your data from your remote server in just a few lines of code. Gathering data is as simple as that with React.

# Separating Concerns

The previous code was very simple, but one common principle in web development is the separation of concerns which we didn't really respect in the previous section with the two hooks.

There are plenty of ways to make it done. For example, I will use a Provider component and the React contexts to handle this. You can find out more in my previous article [How I dropped Redux for the Context API](https://betterprogramming.pub/how-i-dropped-redux-for-the-context-api-7338d481e179).

To follow this way to separate concerns, I will now wrap the displaying component into another one that will manage the data fetching. Here's the code:

`gist:brunosabot/6b320eb96713eb906447d050c4d41230`

Our rendering code is now a bit cleaner since the logic has been extracted to another component in charge of the logic.

You can see that I choose to use a loadData callback along with the useEffect hook this time. This is because I consider improving the method with additional parameters - not in this tutorial though - to manage pagination, revalidation, and more.

In the same way, I have encapsulated the data inside a subobject `values`, to be prepared to support another sub-object `actions` for manual reload and more.

# Adding Loading and Error States

In many applications, we want to show the user that we are currently loading the data or if we encounter an error.

To do so, we just have to add two boolean states corresponding to the loading and the error.

These states are meant to work this way:

- By default, the loading state should be false since there is no operation made
- As soon as we launch the data loading, the loading state should switch to true
- The loading state should get back to false as the request end
- By default, the error state should be false since there are no errors yet (and hopefully, ever)
- As soon as we launch the data loading, the error state should be reset to false to remove an older error
- The error state should switch to true if the loading goes wrong

Here's a code sample:

`gist:brunosabot/a48185e09bac40b2044a5f64ceb91642`

Now, our application reports the loading and error states with a custom message to the user.

This solution stays pretty basic, but you are free to add additional data, such as a specific message for the error, better loading, or a skeleton of the page to make an even better interface.

A common mistake made on a lot of websites is to give no intel on what happened on a website. You can lose users because they think your app has crashed if there is no loading indicator, or they may think your service is simply not working if the error is not explicit enough.

My personal recommendations are:

- Add a skeleton of your page while loading the data
- If possible, show a loading progress indicator
- If the first point is too complicated, add a spinner or a text indicating the data is loading
- Cache the request to avoid unnecessary waiting from the server or propose a "Stale While Revalidate" behavior
- If you encounter an error, give your user precise information on what is going on., e.g., "Your data hasn't been saved because it is not valid" or "We encountered a problem loading this product… Please try again later."

# Factorize to Hooks

When developing an app, you will probably not have only one place where you will need to load data. Each one of your pages are candidates to fetch remote servers.

With the previous code, we can clearly see a lot of code that will be copied if we want to keep the same code structure, even if the only update we want to make is an URL change.

A good candidate to resolve this is to create a custom hook to contain the error, loading, and data state hook along with the data loading method. This hook will get an URL as a parameter, as shown below:

`gist:brunosabot/d9f87875cab301f8d2708700666f27aa`

Now, all the data fetching will be managed by the hook, and the provider code will be simpler to read.

Once again, this is a pretty simple use case, you might need to handle:

- Making POST request
- Adding, on a POST request, a body content
- Handle HTTP headers
- Manage authentication

# Do We Really Need the Separation Concern in a Component?

Our provider became a simple pass-through from the hook to the component and we can ask ourselves if it is still a relevant component to include in our code or if it is unnecessary.

I believe that the less component you have, the easier your code will be read by anyone else (validating the KISS principle). I choose then to remove the Provider part and only keep the view component and the hook. Here's the code:

`gist:brunosabot/a0a860d5324c91f5519744d6cd3883b4`

Why have all these steps to get there? It is a pretty common mistake I saw in many projects to keep legacy code layers. I'm hoping that you will avoid these mistakes by seeing a complete rewrite of the code the more features you are adding to your data fetching.

Depending on my needs, I can also remove the `useEffect` part that could have been done here since we obviously always want to load the data straightaway.

# Using a Data Fetching Library

Writing data fetching is very simple, but there are many reasons where coding all by yourself could become a huge pain. The preview code we just wrote could be easy to imagine in your mind, but what if you need to:

- Add a query caching system
- Handle an always up to date data
- Debug your requests
- Handle pagination and infinite loading
- Keep data available offline

Could you picture all the code required in your head right now? I personally can't, so I'm going to leave this to the greatest geniuses.

So our requirements give us a lot of work, not even including the code maintenance, and the security patches that will be required. Hopefully, there are a few open source libraries that already manage this for you, such as [React Query](https://react-query.tanstack.com/) and [SWR](https://swr.vercel.app/).

These libraries might be a (very little) bit more complicated to implement inside your apps than the hook we have previously coded, but they are also way more powerful.

Let's see how we can start using them.

# SWR

[SWR](https://swr.vercel.app/) is a lightweight library developed by [Vercel](https://vercel.com/).

SWR will however not handle the request itself. You will need to create a `fetcher` method, but the code stays pretty straightforward, as you can see below:

`gist:brunosabot/6dd2b044779868123fdbdd7c8f6bfa94`

Almost all the logic we previously wrote ourselves is managed by the useSWR hook. Don't think that the code magically disappeared!

You might ask yourselves why should we use SWR if we still have to handle the `fetcher` method? Because SWR has a lot of useful features including the following:

- It automatically caches your requests
- It handles React suspense
- It automatically revalidates data when focusing the window and/or on regular intervals
- It can manage pagination, SSR

# React Query

[React Query](https://react-query.tanstack.com/) is a little bit complicated to get started with: It will need a Provider component on the top of your application, combined with a query client.

Also, like SWR, the actual fetching is yours to make.

With that done, it will be as simple to use as everything we have covered so far, with only a different labelling system.

`gist:brunosabot/85be602e84f539e04c0d56eaba8893a8`

React query also have a lot of awesome features you can check in comparison to other systems, available on the [React Query website](https://react-query.tanstack.com/comparison), including:

- A powerful cache system
- Dedicated dev tools
- React Suspense support
- Auto-refreshing
- Pagination, SRR

# Conclusion

There are plenty of ways to load data in React - from managing our own code to using powerful libraries.

Personally, I would change the method I use depending on the size and nature of the project in the following conditions:

- When making a very small website with few requests, I will make my own fetching code (SWR and React Query came at a size cost)
- When the project gets bigger, I will go for SWR (Best size/features ratio)
- On big projects, I prefer to use React Query since it will cut me the work on many useful features (advanced features needed)

Thanks for reading. Please join me on [Twitter](https://twitter.com/brunosabot) if you want to learn other things about React and more.
