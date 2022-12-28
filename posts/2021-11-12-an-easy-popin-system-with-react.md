---
canonical: https://betterprogramming.pub/build-an-easy-popup-system-with-react-8858370cf700
creator: Bruno Sabot
date: 2021-11-12
lang: en
originalImage: https://storage.googleapis.com/brunosabot.dev/img/photo-1624571033882-bf93a56b6b2e.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@windows">Windows</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2021/build-an-easy-popup-system-with-react/
platform: Medium
subtitle: Demystifying the way to create a simple, customisable, and accessible popup system with React
tags: Programming, React, JavaScript, Web Development, Accessibility
title: Build an Easy Popup System With React
---

# Concerns About Existing Systems

There are plenty of popup systems out there, but they usually don’t meet the high-quality requirement I have on user interfaces and development simplicity.

When I’m adding a popup into a website, it is important to me that the system is:

- **Simple to use**: as a developer, I don’t want to spend time creating tons of components and states just to activate a popup. A developer better spend their time on the domain specificities rather than brainless tasks
- **Customisable**: this is usually my main point of complexity since popup systems are almost always shipped with styled components, making it - harder to make them look as close as your UI Designer has imagined them.
- **Accessible**: Accessibility is usually created aside from the systems because it asks for more work, even if it doesn’t need that much work on it.

With these requirements, I always find it difficult to find a library with what I need and the blocking points are often too painful to be worked around.

Even if it might not be intuitive, the last standing option is to create our own system so that will ensure a perfect match with your needs

Enough speaking, let’s dive into a popup component system creation.

# What Are We Building

There are a few things we want in this popup system:

- A custom modal component that will be in charge of the popup style, including background, position, and a closing button
- An easy-to-use modal component with a simple toggle system that will be in charge of the functional part of the popup.
- A changeable state to make the CSS modal softly appear
- Support for people who need a browser with reduced motion
- Handling accessibility on the modal to tell people with disabilities the popup has appeared and where to click so the popup will be closed
- A clickable background overlay to close the popup as we click out
- Handle the escape key to close the popup

That’s a lot to do so we better get started.

# Requirements

The first thing to have a modal system is to have a modal root, where the system will take place. To do so, we just need to have a new `div#modal-root` element in our root document.

This part is important so the modal can be easily styled. With a separate root element, we are sure that the parent elements of the modal does not have styles that will make it harder for us to reach the perfect style.

To be sure that the modal will always be on top of the document, we just need to add the right `z-index` on the application root and the modal-root.

Also, since the modal behavior is to be opened and directly occupy the whole browser’s page, we add an [ARIA live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to the modal system so it can be announced to the user.

The aria live region is set to assertive because we want the readers to have the same behavior as the browser, which places the popup on top of everything else.

`gist:brunosabot/43bc900a8f1b02df53370c69dfe64780`

# The modal components

The modal component is split into three different components:

- A `ModalPortal` component that will link our modal to the `div#modal-root` element
- A `ModalView` component that aims to handle the visible part of the component
- A `ModalAnimated` component that will handle the popup domain and the CSS appearance effects of the popup system

## The ModalPortal component

The `ModalPortal` component exists to link our popup to the `div#modal-root` element that we have created. Here’s the code:

`gist:brunosabot/3110e062d9dc353ba3a47c28254ac6e1`

It is made of four sections:

- A `ref` corresponding to a simple `div` element, with the goal of holding the popup content. We do not use directly the root element so we are able to create two or more different popups if we want to stack them.
- A first `useEffect` hook to create the `div` element. This is a security to make the system work also on SSR systems such as NextJs or Gatsby.
- Another `useEffect` hook, to add the previously created `div` in the portal when active, and remove it when inactive. It will prevent the `div#modal-root` element to contain plenty of empty divs.
- The render part, which is null if neither the `div` element created does not exist or the popup is not currently active.

## The ModalView component

This one is basically a layout component so we can style the popup the way we want.

Even if I’m presenting only one template, you are able to use it for as many needs you may have such as:

- A popup system
- A designed replacement of the native `alert` and `confirm` modal
- A notification system
- Whatever else you can imagine

`gist:brunosabot/79742fa524c20dc28d3173c042d6e9f7`

The present component is just a bunch of native elements with some styles separated into two sections:

- An overlay button, so the popup can be closed when clicking out
- The popup content itself, including a close button

The two blocks are siblings because we don’t want the click event to propagate from one to the other.

For accessibility reasons, both the overlay and the close buttons are native button elements with an `aria-label` attribute.

In the CSS part, I use various positioning techniques that you are free to adapt depending on your needs.

## The ModalAnimated component

For the last part of the system, we need a component that will control the modal. Here’s the code:

`gist:brunosabot/fb6ef1864549f741938ad093bb8b0e1f`

This component has several tasks to handle:

- It has to load the ModalView component. By default, I chose to use the ModalView component, but I also give the component a prop to be able to change it
- It also has to manage the Modal portal component to include our content in the `div#modal-root` DOM element
- It gives us access to an escape key support to close the modal.
- Finally, it handles a nice but optional transition effect.

The CSS has a weird CSS Modules syntax to handle global classes, but it also uses the `prefers-reduced-motion` media query to shutdown the animation for people asking for it.

If the last part could be set globally for all elements, it is better illustrated in the component.

## The useEscape hook

To improve usability, we can add another great feature to our popup system by adding an escape listener that can close the popup.

To do so, there is a `useEscape(active, onClose);` code in the ModalAnimated component, but this is yet to be implemented. Here’s the code:

`gist:brunosabot/41f8acd09fee652c24d4575e29dd5e42`

The hook is quite simple, and it is made of two blocks:

- an `onEscape` callback that memoize the keyboard event by listening to the keyCode for the escape key — 27
- an `useEffect` method to bind it to the window document and unbind it as soon as the modal is unmounted

## The usage

The usage is pretty straightforward: we need the `ModalAnimated` component with two props if we want a custom ModalView component.

The content of the popup itself is just the children elements passed to `ModalAnimated`. I usually put the content inside another component to keep the page as light as possible. Here’s the code:

`gist:brunosabot/4ba4b450f769a15e52c5b3de3a078451`

# Conclusion

By creating three light components and a simple custom hook, we are able to get a very modulable and customizable popup system.

While it can still be improved, we have implemented a system that will make your UI designer happy, and it implements the accessibility basics.

Did we check all the initial requirements?

- Simple to use: yes
- Customisable: we can customise the view very easily
- Accessible: We do have a11y included in the code

Mission accomplished! Now it is your turn to use it and improve it in your projects.

Happy coding!
