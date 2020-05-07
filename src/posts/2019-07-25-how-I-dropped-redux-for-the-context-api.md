---
path: /posts/2019/how-i-dropped-redux-for-the-context-api
date: 2019-07-25
title: How I dropped Redux for the Context API
subtitle: React 16 introduced a new Context API to replace the deprecated one… Here is my way to replace Redux with this new API.
creator: Bruno Sabot
thumbnail: https://storage.cloud.google.com/brunosabot.dev/img/1__NyHpepOw2vFFKVFdeRvzWg.png
canonical: https://medium.com/@brunosabot/how-i-dropped-redux-for-the-context-api-7338d481e179
---

![](https://storage.cloud.google.com/brunosabot.dev/img/1__NyHpepOw2vFFKVFdeRvzWg.png)

React 16 introduced a new Context API to replace the deprecated one. OK, it’s been more than a year since the release of version 16.3, but it still seems fresh in the React ecosystem.

This new API came with the promise to solve a lot of problems with the previous experimental way to use contexts. To me, it did a lot more; it changed the way I make React applications. This is the story of how I managed it.

I won’t give a course on how Redux works. If you want a refresher, you can check [the amazing course from Dan Abramov on Egghead](https://egghead.io/courses/getting-started-with-redux). Plus, you’ll eventually remove Redux from your apps, so do we need a full course on it?

There are a few requirements to understand the code: I will use [React hooks](https://en.reactjs.org/docs/hooks-intro.html) and [React fragments](https://en.reactjs.org/docs/fragments.html) in the short form `<>`.

OK, let’s say we have an app that tells if I’m available for a beer. It consists of the following:

`gist:brunosabot/31b74e415c0709fbd48120aac58885d1`

<figcaption>How to have a beer status in React with Redux.</figcaption>

In my sample code, I created four files to handle the parts of a Redux application:

- `actions/beer.js`: A file that contains a constant for every action in my app. This could be inlined directly in the other files, but I like to keep things clear and concerns separated.
- `dispatchers/beer.js`: The home of every action my Redux model has. In this case, I only have one `toogleBeerAvailability` method, which dispatches the action from the previous file.
- `reducers/beer.js`: The storage engine of my Redux model, which changes the value of my availability if the `TOGGLE_AVAILABILITY_FOR_BEER` dispatcher is called.
- `components/beer.jsx`: The component that shows and toggles my availability. We use `react-redux` to map the redux properties to my component props.

That’s a lot of code, but it’s necessary for a robust system with Redux. Now, we’re going to drop Redux with the same result. But first, why do we want to drop Redux?

I made that move simply to reduce weight in my application by removing two dependencies: `redux` and `react-redux`. I’m also not a big fan of having multiple dependencies in my applications, so I’m jumping on the possibility to remove two of them.

So here’s how it works. Keep in mind that it may not be a perfect solution or even a recommended one, but it’s the one I use in my projects and works. But let’s stop chatting and dive into the code.

I’m working with a single state file I call _Provider_. It contains everything to handle the state. In this first sample, it’s just a getter and a setter I receive from a state hook.

`gist:brunosabot/3152a94a3ae10ab9eb2816844a4ede89`

<figcaption>How to have a beer status with the Context API</figcaption>

This looks much simpler and more efficient, but there are still a few issues to improve it:

- The getters and setters are in the same object, which is a bit of a mess.
- The `toggleAvailability` method is managed in the children component, which is not functional.
- We will probably encounter performance issues due to our state change.

For the first one, I like to cut the object into two sub-objects, `actions` and `values` , like dispatchers and states in Redux. It eventually looks like this:

`gist:brunosabot/06304e257e0a76c3a78ca634c12f8dc4`

<figcaption>How to have a beer status with the Context API and a bit of structure</figcaption>

For the second one, we just need to move the call into the parent component and add the action in our new actions section. It will make our `Beer` component a lot simpler.

`gist:brunosabot/f279be98e49c76c53c02398590747248`

<figcaption>How to have a beer status with the Context API, structure, and consistency</figcaption>

As for performance, we still have two issues in our component:

- The `toggleAvailability` method will be re-evaluated every time the `Provider` component is updated
- The value object which contains the state will also be updated every time the `Provider` component has a change.

Fortunately, React provides two hooks to handle a cache of our data.

We will first encapsulate the `toggleAvailability` method in the `useCallback` hook. It will ensure the returned method will always be the same when the data in the second parameter has not changed. This will be possible because React’s `useState` hook guaranteed its set method would be the same despite the renders.

Then we’ll use the `useMemo` hook to encapsulate the `value` object. This hook is almost the same as `useCallback` but for objects. It will also get a second parameter to show what data it depends on.

`gist:brunosabot/ae9c659645e08cce2549f64a59838d62`

And that’s all, folks! We no longer have Redux in our application and have a clean Context usage. I hope you give the Context API a try!

![A new way for my React projects. Photo credit to me.](https://storage.cloud.google.com/brunosabot.dev/img/1__ucBcf14roFs8__c4Nc9Dp9Q.jpeg)
A new way for my React projects. Photo credit to me.

### **References**

<footer>
  <section><a href="https://en.reactjs.org/docs/hooks-reference.html">Hooks API Reference - React</a></section>
  <section><a href="https://kentcdodds.com/blog/how-to-use-react-context-effectively">How to use React Context effectively</a></section>
</footer>
