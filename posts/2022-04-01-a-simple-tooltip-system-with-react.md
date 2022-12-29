---
color: "#5F6061"
creator: Bruno Sabot
date: 2021-12-09
lang: en
originalImage: https://storage.googleapis.com/brunosabot.dev/img/photo-1495508348712-216a17cfbbc4.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@andriklangfield">Andrik Langfield</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2021/a-simple-tooltip-system-with-react/
platform: Medium
subtitle: Demystifying the way to create a simple, customisable, and accessible popup system with React
tags: Programming, React, JavaScript, Web Development, Accessibility
title: Build an Simple Tooltip System With React
---

# Why Are We Using Tooltips

In our user interfaces, we often want to have to be a bit more specific about what icon buttons are for, but sometimes it could be hard to find the space to have a proper button with an icon and a text.

It is the case when we have a sharing bar with icons to share on Twitter, Facebook, LinkedIn alongs with copying the link and having a menu icon to handle additional actions.

To solve the label problem, we often use the following solution: add a tooltip that could be visible as the mouse gets over the button.

However, as an important User eXperience advice, **tooltips must be used sparingly**. You should always prioritize a button the label instead of them.

# What Are We Building?

The tooltip we are going to create is easy to use, 100% customizable, can be placed in every side of the targeted component and is just an overload, meaning you will not have to updatee your existing code.

The tooltip will look like this, but as I told you before, it can be replaced with your own very easily as long as it respects the component signature

_Image_

# Requirements

The first thing to have a modal system is to have a modal root, where the system will take place. To do so, we just need to have a new `div#modal-root` element in our root document.

It is based on the very same fundations of my previous article: [Build an Easy Popup System With React](https://brunosabot.dev/posts/2021/build-an-easy-popup-system-with-react).

This base is important so the tooltip can be easily styled. With a separate root element, we are sure that the parent elements of the tooltip does not have styles that will make it harder for us to reach the perfect style.

To be sure that the tooltip will always be on top of the document, we just need to add the right `z-index` on the application root and the modal-root.

Also, since the tooltip behavior is to popin to the user as the link is overed, we add an [ARIA live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to the tooltip system so it can be announced to the user.

The aria live region is set to assertive because we want the readers to have the same behavior as the browser, which places the popup on top of everything else.

`gist:brunosabot/43bc900a8f1b02df53370c69dfe64780`

# The tooltip components

The tooltip component is split into two different elements:

- A `ModalPortal` component that will link our modal to the `div#modal-root` element (the same as in [Build an Easy Popup System With React](https://brunosabot.dev/posts/2021/build-an-easy-popup-system-with-react))
- A `TooltipView` component that aims to handle the visible part of the tooltip
- A `withTooltip` high-order component that will handle the tooltip domain and that will be mounted to the target component

## The ModalPortal component

The `ModalPortal` component exists to link our popup to the `div#modal-root` element that we have created. Here’s the code:

`gist:brunosabot/3110e062d9dc353ba3a47c28254ac6e1`

It is made of four sections:

- A `ref` corresponding to a simple `div` element, with the goal of holding the popup content. We do not use directly the root element so we are able to create two or more different popups if we want to stack them.
- A first `useEffect` hook to create the `div` element. This is a security to make the system work also on SSR systems such as NextJs or Gatsby.
- Another `useEffect` hook, to add the previously created `div` in the portal when active, and remove it when inactive. It will prevent the `div#modal-root` element to contain plenty of empty divs.
- The render part, which is null if neither the `div` element created does not exist or the popup is not currently active.

# The TooltipView component

The TooltipView component is pretty simple, and contain three props:

- `children`, which will be the tooltip content.
- `left`, which is the absolute left position where the tooltip will be placed
- `top`, which is the absolute top position where the tooltip will be placed
- `position`, which is an element of an enumeration of positions. It will be defaulted to the `TOP` value because it is the most common place for a tooltip.

As poiting arrow, I chose a svg element to have something less angular, but we can choose everything you want.

`gist:brunosabot/17532e60edb6cb87c86b2185a216a776`

Note there are references to the withTooltip high order component we will discuss later. Every type used in the tooltip is externalized so we can use the proper signature in any other component we want to create.

This component is the one that you will be able to replace with your own. The component will be automatically placed in the page, however, you would probably give him a `max-width`, and the highest element in the tooltip -which is `.TooltipWrapper` in my case, should have a `position: absolute` CSS property.

Also, the positioning of the tooltip will need a little adjustment so it looks perfectly centered:

- For a top placed toolltip, we move left -50% to be perfectly centered, and top -100% so it will never overlap the content that activates the tooltip.
- For a right placed tooltip, we keep the same right position, but we move -50% top to get the perfect centering.
- For a bottom placed tooltip, we move left -50% to be perfectly centered, but keep the bottom value so the button will not overlap the content that activates the tooltip.
- For a left placed tootip, we move left -100% so our tooltip will not overlap the content, and to by -50% to get the perfect centering.

This is possibile because the `transform` property get the element as reference and not the parent element sizing like height and width did.

The rest is very specific of my tooltip implementation but let us get some time to understand what is done.

First of all, the `.TooltipWrapper` element has a maximum width of 350px, which will force the tooltip to get a new line if it is became too long. I also have added a 10px padding where I'm going to place the tooltip arrow.

The arrow will be placed and rotated based on the tooltip placement so it points to the content that activates the tooltip. You might want to remove this arrow in your case, since a lot of systems does not require it.

And that it! The tooltip is ready to get integrated in your system with the `withTooltip` high order component.

`gist:brunosabot/5953615cfbd58b94dd2728ebf9974aac`

# The withTooltip high-order component

This is the main part of the tooltip system, where all the logic stands. This high-order component exists to:

- Handle mouveover event
- Handle mouseout event
- Link the tooltip to the portal system
- Add a CSS transition
- Expose interfaces to implement a completely custom system

## Handle mouseover event

The mousover event should calculate the offset position of the tooltip, based on the overed element: if the tooltip position is on the bottom, we need to add the element height as top offset, and if it's on the right, the element width as left offset.

The left and top values are also initialized at half the size of the container element. This will allow us to have a perfectly centered tooltip by just adding a `translateX` or `translateY` with a `50%` value.

Finally, we seek for all the left and top offset from the parent because the JavaScript API only give the offset from the parent with a position set to relative or absolute.

`gist:brunosabot/78c391f45b0fbf6b1260b7090042bcb9`

You will see a refSpan, a timeout and a setShow reference:

- The first one correspond to a wrapper element the mouse over is applied. We just getting sure it exists when the function is executed.
- The second one is a small added timeout before hiding the tooltip. It's reinitialized here to avoid a blink.
- The third is a binary state created to actually show the tooltip when overed and hide it otherwise.

## Handle mouseout event

The mouseout event is pretty straightforward: we just reset the position to 0,0. I will use that specific position to hide the tooltip.

I used a 10ms timout on it, which is the best value I found so the system neither look slow nor blinky.

`gist:brunosabot/ef10dc1d58b1c1f464dbc91fb58ac728`

### Link the tooltip to the portal system

The linking part is made with a private WithTooltip component inside the High Order Component.

The is first a wrapping `<span>` element, where the event listeners are binded. It is also the DOM reference we will be using to get the tooltip position. The CSS applies a `display: inline-flex` to avoid centering issues.

The second part is the portal system, including the tooltip. Is is activated if either the left or top position values are set to something else than 0. The tooltip component got the left, top and position props to handle it perfectly in the custom component, as seen in the previous section about build the tooltip component.

The third part is to include the wrapped component with every prop to not disturb the original behavior.

`gist:brunosabot/84b96a67758ae4ba40b50a0850d234d4`

### Add a CSS transition

### Expose interfaces to implement a completely custom system
