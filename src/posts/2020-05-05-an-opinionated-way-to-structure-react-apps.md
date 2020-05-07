---
path: /posts/2020/an-opinionated-way-to-structure-react-apps
date: 2020-05-05
title: An Opinionated Way to Structure React Apps
subtitle: Based on my experience acquired building several big projects
thumbnail: https://storage.cloud.google.com/brunosabot.dev/img/0__maZNyBAhbf1Ol2Uj.jpg
creator: Bruno Sabot
canonical: https://medium.com/p/an-opinionated-way-to-structure-react-apps-10f87bf29952
---

<figure>
  <img src="https://storage.cloud.google.com/brunosabot.dev/img/0__maZNyBAhbf1Ol2Uj.jpg" alt="Photo by Dayne Topkin on Unsplash."/>
  <figcaption>Photo by <a href="https://unsplash.com/@dtopkin1">Dayne Topkin</a> on <a href="https://unsplash.com">Unsplash</a>.</figcaption>
</figure>

When we first develop a React app, we can just put every component in a folder and it works. But when it comes to larger projects, it might be difficult to find our way between files if we keep using React this way.

So how can we handle a bigger project? [Dan Abramov has a way](https://react-file-structure.surge.sh/). You don’t think this is very helpful? Actually, it is. It’s the best way to find the perfect architecture that will fit your needs, but at a cost of many iterations in folder creation and removal.

Today, I’m introducing the result of my many moves, making a base structure for people seeking a way to improve their own.

### Initial Considerations

Before we start, I’d like to point out that I’m presenting an opinionated way to structure an app. In some projects, I had to do things differently because the app’s core concept was too different. It might also be the case for you.

Also, there are several ideas I’d like to introduce so you will better understand the why.

First of all, I use [atomic design](https://atomicdesign.bradfrost.com/). Some components are only visual. Basically, it concerns every component that will end up in my [Storybook](https://storybook.js.org/). I call them ui components. Atomic design also brings template components.

Some other components are given a specific behavior to a form field, like an enhanced form field that gives a validation pattern to a browser default form field. They are the organisms within atomic design.

Finally, I’m using the React Context API instead of redux, as I [explained in one of my previous posts](https://medium.com/@brunosabot/how-i-dropped-redux-for-the-context-api-7338d481e179). I create top-level components that I call providers.

### Getting Started With the Root Folder

Working with [create-react-app](https://create-react-app.dev/), the root folder of my application is the `src` folder in which I place several folders:

- `App` — The folder where the main component is placed containing global providers and main routing.
- `components` — Where every React component of the application belongs.
- `gql` — In which I can find every piece of a GraphQL request I can make in my application.
- `libs` — This is a bit of a mess, but it contains everything else. It is generally composed of fewer than ten files, so I never had to split them better.

This is the better ratio I found between simplicity and code splitting for the base structure. Since React is a component framework, you can easily imagine that the `components` folder will be a bit more complex.

I will not explain in detail the three other folders. You can have a look at the sample tree at the bottom of this post to find out more about the kind of files placed in there.

### The Components Folder

Here we are: the main part of the application. This one is composed of many more subfolders. Keep in mind that if you copy this structure, you do not need to absolutely use them all if it doesn’t make sense in your project. For example, the `ui` folder doesn’t make sense in a [Material-UI](https://material-ui.com/) application.

- `hooks`— Where I place a good amount of the hooks I use in my app. I have a lot of them to embrace the power of reusability, so I also create subfolders to illustrate the job they belong to. For example, I often have a `useInterval` hook to handle cyclic jobs. I also place in there a `useUser` hook that gives me the current connected user information.
- `modals` — This regroups every modal in my project. I used to place them elsewhere, but I actually found that I often use them many times in the application, and they are quite numerous. By having their own folder, it became simpler for me to work on them.
- `organisms` — The folder where I place the functional components I spoke about earlier. It can be split into subfolders if there are too many of them, which happens a lot.
- `providers` — Components that contain global data or feature logic. To find out more about what a provider looks like, I invite you to take a look [at a previous post](https://medium.com/better-programming/how-i-dropped-redux-for-the-context-api-7338d481e179) where I replace redux with them.
- `svg` — The home of every icon used in the application since create-react-app [can include them natively](https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs). You might have a designer, but in case you don’t, I really love the [Material Design Iconset](https://materialdesignicons.com/), where I can always find the perfect icon for my apps.
- `templates` — In which I have the page layouts of my atomic design application. It’s not the richest folder of the app, but taking into consideration what the layouts are for, they are better isolated.
- `ui` — Where the atoms and molecules of my application are. This is one of the heaviest folders in the application, so it is split up by domain subfolders.
- `pages` — This corresponds to the pages defined in my application. This is the most complex folder because it is recursive. We’ll talk about it in a specific chapter right after this one.

This is a lot of folders, right? The most difficult part of my perfect folder structure was to keep it simple ([KISS!](https://en.wikipedia.org/wiki/KISS_principle)), but without mixing apples and oranges. This is why I placed atoms and molecules of atomic design in the same folder, but I also often have domain subfolders.

### The Pages Subfolder

Before coming to the folder structure, let’s talk about URLs. I found that cutting every URL in my app in two sections of the path (the domain and the page) is the simpler and more robust way to build the page path.

I might also have additional parameters to show a specific detail page. These ones are not limited in amount.

For example, I have these pages:

- `/user/login`
- `/user/account`
- `/todo/list`
- `/todo/details/123`
- …

But I do not have these ones:

- `/user` will redirect to `/user/dashboard`, for example.
- `/` will probably also redirect to `/user/dashboard`.

These URLs give you a hint on how structured the folders will be. Without surprise, we have a first folder that is the domain and a second one that is the page.

As I mentioned earlier, the page folder is also recursive. Why? Simply because sometimes the content is not global to the app. A `useTodoList` hook is only used in the `/todo/list` page and the `TodoItem` component also.

So inside a page folder, you can also find a `components` folder with every folder defined earlier but `pages`.

### Putting It All Together

That was a lot of words to define the overall structure. But an example is often better than words, so here it is:

<pre>
src  
 |- App  
 | |- App.jsx  
 |- components  
 | |- hooks  
 | | |- useInterval.jsx  
 | |- modals  
 | | |- AddTodoModal.jsx  
 | |- organisms  
 | | |- PrivateRoute.jsx  
 | | |- forms  
 | | | |- TextInput.jsx  
 | |- pages  
 | | |- todo  
 | | | |- list  
 | | | | |- TodoList.jsx  
 | | | | |- components  
 | | | | | |- hooks  
 | | | | | | |- useTodoList.jsx  
 | | | | | |- organisms  
 | | | | | | |- TodoItem.jsx  
 | | |- user  
 | | | |- login  
 | | | | |- UserLogin.jsx  
 | |- providers  
 | | |- UserProvider.jsx  
 | | |- TodoProvider.jsx  
 | |- svg  
 | | |- check.svg  
 | |- templates  
 | | |- LoggedPage.jsx  
 | | |- LoginPage.jsx  
 | |- ui  
 | | |- alert  
 | | | |- Alert.jsx  
 | | | |- Alert.module.css  
 | | | |- Alert.stories.jsx  
 | | | |- Alert.test.js  
 | | |- button  
 | | | |- Button.jsx  
 | | | |- Button.module.css  
 | | | |- Button.stories.jsx  
 | | | |- Button.test.jsx  
 |- gql  
 | |- todo  
 | | |- TodoCreate.gql  
 | | |- TodoDelete.gql  
 |- libs  
 |- preload.js
</pre>

Even if the example is pretty simple, it contains everything to illustrate the previous explanations.

### Conclusion

Even if this folder structure for React is a work of many years on how to organize a project, it might not suit every need. However, as of today, it fits all my projects’ needs and makes me particularly efficient during my work.

If you encounter some issues of your own, I would be glad to hear from you about how this proposal is bringing you trouble. But remember, the right folder structure is not necessarily mine but the one that fits your project. After all:

<blockquote>“Move files around until it feels right.”  —  <a href="https://react-file-structure.surge.sh/">Dan Abramov</a></blockquote>
