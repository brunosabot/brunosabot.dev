---
path: /posts/2020/how-to-debug-a-react-context-api-app
date: 2020-03-17
title: How to Debug a React Context API App
subtitle: Using the Redux DevTools extension
thumbnail: https://storage.cloud.google.com/brunosabot.dev/img/0__fOZCyvfBcdHuXOQk.jpg
creator: Bruno Sabot
canonical: https://medium.com/better-programming/how-to-debug-a-react-context-api-app-547b75818754
---

<figure>
  <img src="https://storage.cloud.google.com/brunosabot.dev/img/0__fOZCyvfBcdHuXOQk.jpg" alt="Photo by Barn Images on Unsplash."/>
  <figcaption>Photo by <a href="https://unsplash.com/@barnimages">Barn Images</a> on <a href="https://unsplash.com">Unsplash</a>.</figcaption>
</figure>

Some time ago, I shared how [I dropped Redux for the Context API](https://medium.com/better-programming/how-i-dropped-redux-for-the-context-api-7338d481e179) when I’m creating a React application. The post got some great feedback, but I also had some people saying that it’s pretty hard to debug compared to the [Redux DevTools](https://github.com/reduxjs/redux-devtools) and asking me if there is an easy method to do it.

The answer is yes. Actually, if there is something awesome about Redux, it’s the DevTools. The great part is we can link them easily with our Redux-free app — and with everything we like, really.

Let’s now see how it works!

### Redux DevTools API

When we have Redux DevTools installed, the extension automatically injects a special object (`__REDUX_DEVTOOLS_EXTENSION__`) in the window. A weird name for sure, but it prevents any conflicts with your existing code.

And that’s where everything starts: This object gives us everything we need — `connect` and `disconnect` methods that link our code with the Redux DevTools.

However, if you just try to run these functions, you will still see nothing in the DevTools because we first need to initiate the session.

To do so, we take advantage of the object that returns the `connect` method. It possesses an init method that launches the DevTools session.

Basically, it looks like this:

`gist:brunosabot/16b83292b1f9abf5e7f6e3ef7174802b`

<figcaption>Simple Redux DevTools connection.</figcaption>

Even if this works, you will still see nothing in the DevTools because the session is closed as soon as we create it.

### A DevTools Provider

To make the session permanent when you are developing your app, you will need a `Provider`, which looks like this:

`gist:brunosabot/02fd13b082f19105005818b3ef166139`

<figcaption>A basic Redux DevTools Provider.</figcaption>

If you add this piece of code at the very top of your application, you will see the startup session in the Redux DevTools that you can identify with the `@@INIT` event that pops in.

<figure>
  <img src="https://storage.cloud.google.com/brunosabot.dev/img/1__1__Ee__Cxvnmx1bAgstmX3jA.png" alt="The INIT event that pops in."/>
  <figcaption>The INIT event that pops in.</figcaption>
</figure>

### Sending Events to the DevTools

Now that we are able to start a session, the next step is to send an event to the DevTools, which is as simple as we can imagine: The `devTools` object that we have created also provides a `send` method, which takes a name and some data to illustrate the change.

Basically, it looks like this:
`gist:brunosabot/4fbaec5625c6bd0b77ce233a0be6836c`

<figcaption>Simple Redux DevTools connection with a sent event.</figcaption>

### Putting Everything Together

We now have everything to make it work. We will just add a few things in our `Provider` to make it truly usable:

- A hook to allow simple event sending to the DevTools session.
- A Context API so the DevTools can be available in the whole project.
- A simple sending method with default name values.

`gist:brunosabot/39e8176a7aebaf36696f0841b0e7dba2`

The usage is now pretty simple in the application. We need to call the `useReduxDevtools` hook we created in the `Provider` file to wrap the initial method into a high-order function that handles the debug session:

`gist:brunosabot/44795880a4029b46d84b3255db71f740`

<figcaption>Look how useReduxDevtools is called on line 10.</figcaption>

<figure>
  <img src="https://storage.cloud.google.com/brunosabot.dev/img/1__ZRD7PZ36M__dTOFaRBU6aRQ.png" alt="And voilà, our Context API inside Redux DevTools!"/>
  <figcaption>And voilà, our Context API inside Redux DevTools!</figcaption>
</figure>

Now when we are calling the `setTheme` method, it pops in the DevTools so you can inspect what is going on!

### Conclusion

It is very easy to connect any app to the Redux DevTools, and you can start debugging any app without Redux right now.

Also, let’s revisit something I said in my previous post about the Context API: It’s an easy API to use and can replace Redux in many cases, but keep in mind that Redux is much larger than the Context API. Choose wisely if you need to make the switch.
