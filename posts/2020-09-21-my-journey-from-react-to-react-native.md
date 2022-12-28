---
canonical: https://betterprogramming.pub/my-journey-from-react-to-react-native-e876c31a46a4
creator: Bruno Sabot
date: 2020-09-21
lang: en
originalImage: https://storage.googleapis.com/brunosabot.dev/img/0_LU6uhsVVbB9jS_o5.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@mukukostudio">Mukuko Studio</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2020/my-journey-from-react-to-react-native/
platform: Medium
subtitle: The things that changed for me switching when from web applications to native applications
tags: Programming, React, React Native, JavaScript
title: My Journey From React to React Native
---

I’ve recently started working on an Android application, and as a React developer, I made the easy choice to use and test [React Native](https://reactnative.dev/) to do so because it helped me stay in my comfort zone and also gives me the opportunity to explore iOS someday.

Even if it is the same framework, using React for native applications is a little bit different than React on the web.

I’m writing this article to share the main differences I have found between the two platforms along with a few tips I had to figure out to obtain the desired final behavior.

# View or Text — There Is No div

When working on a web application, we mostly use `div` and `span` tags for many usages. Since we are not on the web, this is no longer a possibility.

Instead, the content is made with `View` and `Text` that we could associate with the two tags above, but they have some additional constraints.

## The View element

With the `View` element, you can’t add anything else inside other than components. That means it cannot contain text, which the `Text` component is for. As an unfortunate consequence, it has a larger tree in your application, but it helps to separate concerns between layout and text.

`gist:brunosabot/90c2f7acc44752bbbfabadeee3fe5ae2`

<figcaption>Hello world component in React Native</figcaption>

Based on the previous point, you can easily figure out that you can’t apply text-related styles to a `View` component. The text styles like `color` or `fontSize` need to be applied to the `Text` component.

`gist:brunosabot/091ade8b1c4ba353700e75462f0573ca`

<figcaption>Layout styles on View, text styles on Text</figcaption>

`View` is also a _flexbox_ container that can only support two display values: `none` or `flex`. It can change numerous things if you are not confident with the model, but it is much more powerful than the classic block model used by default on the DOM.

You can learn more about this layout system on [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Every flex property is supported in React Native, from `align-items` to `flex-grow`.

There is, however, one major difference between the web version and the native version: the default value of `flex-direction`. If we have `row` on the web, it is set to `column` in React Native. Basically, this means that elements are placed by default from top to bottom instead of left to right.

`gist:brunosabot/b80ccc2e6eb3122ee8a4a32b2b789b00`

<figcaption>Flexbox usage on React Native</figcaption>

Finally, `View` is not clickable. If you need a click behavior on it, you’ll have to wrap it into a `Touchable*` component:

- `TouchableHighlight` to add a background color on click.
- `TouchableOpacity` to reduce opacity on click.
- `TouchableWithoutFeedback` to have no feedback on click, which I don’t recommend for user experience reasons.
- `TouchableNativeFeedback` (only on Android) to have the ripple effect on the button.

`gist:brunosabot/dcd186a2e30979c880e90783194c5460`

<figcaption>Example usage of TouchableHighlight</figcaption>

## The Text element

If we can easily compare the `Text` element to a `span` tag on the web, the difference is as noticeable as with views.

The `Text` element — as it is aptly named — exists only to make the rendering of text contents. We cannot use it for any layout-related stuff we might need. Therefore, `display: "flex"` will have no effect. Neither will `position`.

However, the `Text` inherits styles from the parent `Text` component like it does on the web.

`gist:brunosabot/568c0e8f551cb5b4510cf13b30e04e7c`

<figcaption>Text component style inheritance</figcaption>

Like `View`, the `Text` component is not clickable. If that’s a behavior you need, you will have to wrap into one of the `Touchable*` components.

Finally, `Text` is only meant to contain text and other `Text` components. You should not include layout-related components like `View`, `ScrollView`, or `FlatList`.

# Replace Input With TextInput

Since the Native API is not DOM, we do not have `input` elements either, but React provides a component for the times when we need a form.

The `InputField` component works the same as `input` but also has a `onChangeText` attribute that accepts a callback with the value as an argument. No more need for `event.target.value`!

`gist:brunosabot/1203807b99ff7f1741254fbe2f67e8d1`

<figcaption>TextInput and the onChangeText callback</figcaption>

# The CSS Usage

If I’m using [CSS Modules](https://github.com/css-modules/css-modules) when I’m working on a web application, it is a bit different on native, where the CSS usage is more the CSS-in-JS way. The stylesheets are created with the `StyleSheet.create` method that is provided by React Native and is a key/value object of class/styles for the component.

`gist:brunosabot/e9aa6cf67dccfacf71c2989efb01f448`

<figcaption>Styling with StyleSheet.create()</figcaption>

If there are units in CSS, there are not in React Native — or more precisely, units are always set in `dp`, so the render will be right even if the phones do not all have the same pixel ratio. It makes the CSS usage a bit different, but if you want to make things simpler, just consider them pixels.

If we used to have shortcuts in CSS, it is not the same in React Native: `padding` must be a number and not a list of values in a string, `backgroundColor` is used for the color, and so on.

To illustrate that rule, assume that the CSS `padding: "8 16"` is not valid, and so `background: "#333333"`.

Even if these are a bit longer to type in, I find it way more explicit than the shortcuts we are used to. Plus, they are always complicated to understand for a beginner.

After a couple of hours, I had definitely adopted this new way of writing CSS.

`gist:brunosabot/76181843b33d7e256bb6dc86cfbec5cf`

<figcaption>dp units and shortcuts</figcaption>

# Scalable Vector Graphics

If SVG is used a lot on the web, it is not natively supported in React Native. We need to use it with an external package: `react-native-svg`.

However, the package is made to be used exactly like on the web with just a little difference: the first uppercase character.

`gist:brunosabot/5d97361874d62efd324e63565671d0f6`

<figcaption>Simple SVG in React Native</figcaption>

# Overflow

If you want a scrollable `View`, you need to switch to the `ScrollView` component. It acts the same but has a scrollbar built in.

Since the component has a vertical scroll by default, you can use the `horizontal` attribute to make it scroll on the _x_-axis.

For performance reasons, you can also use the`FlatList` component, which is a bit more complicated to use, but it will make your long lists scroll fast. If it is something you need, I encourage you to [look at the official documentation](https://reactnative.dev/docs/flatlist).

# Tips and Tricks

## Touchable components are applied to a single element

If you get the error `Error: React.Children.only expected to receive a single React element child`, then you just need to wrap your elements in a new `View` component.

It seems pretty obvious what to do, but it can be a bit disturbing when coming from the web: When using `Touchable*` components, you need to have a single layout item.

## Line breaks in `Text`

On the web, new lines are made with `<br />`, but since native is not DOM, you can simply use `{"\n"}` in your `Text` components or directly in a string (e.g. `<Text>{"Hello\nworld!"}</Text>`).

## Views in Text

You cannot have `View` elements in `Text` elements. This throws the following error: `Cannot add a child that doesn't have a YogaNode to a parent without a measure function!`.

It might make your tree a bit more complex with some code duplication, but you should always find a way to avoid this message.

# Conclusion

Even though React Native is based on React, there are plenty of differences. On one hand, we use React on the web and use the DOM API. On the other hand, we use the native layouts for Android, iOS, and others. But it is still very easy to get into. Do not hesitate to give it a try!
