---
path: /posts/2019/deploy-your-zeit-now-app-with-github-actions
date: 2019-09-02
title: Deploy Your ZEIT Now App With GitHub Actions
subtitle: Implement custom logic without having to create an app to perform a task
creator: Bruno Sabot
thumbnail: https://storage.cloud.google.com/brunosabot.dev/img/1__BZ__jv__xjX__FfJR5fQH__6UQ.png
canonical: https://medium.com/better-programming/deploy-your-zeit-now-app-with-github-actions-ca3977806b40
---

![](https://storage.cloud.google.com/brunosabot.dev/img/1__BZ__jv__xjX__FfJR5fQH__6UQ.png)

I recently got access to [GitHub Actions](https://github.com/features/actions) and I decided to test it with a simple deployment in [ZEIT Now](https://zeit.co/home). My first steps were to look at [this wonderful post](https://medium.com/peerigon/how-to-continuously-deploy-a-cra-using-github-actions-and-zeit-f7bbd3b60da3) from [Leonhard Melzer](https://medium.com/@leomelzer).

It contains a lot of useful information but, unfortunately, it uses the old workflow syntax, which is now deprecated in favor of [YAML](https://yaml.org/). I spent a lot of time making the conversion, so here is an post on how I achieved it with a `yml` file.

#### Requirements

- At the time I’m writing this story, GitHub Actions is still in beta. You can ask for access [here](https://github.com/features/actions) and wait for your request to be accepted.
- You will also need an account on [ZEIT](https://zeit.co/home).
- Of course, you will need a GitHub account and a repository to store your app sources.
- Last but not least, an application to deploy.

### Get Started

As I mainly work with React, I will give you an example with a `create-react-app` application but feel free to use any other library you like.

### ZEIT Now Configuration

Now requires a configuration file at the root of the repository, named `now.json`, which contain the app configuration on the hosted environment.

`gist:brunosabot/ac51677500a9f4b019245c9e9c21e6f1`

<figcaption>Sample now configuration file</figcaption>

Let’s consider the important parts of this file:

- `version`: The configuration file version. You can simply use 2 as version 1 is deprecated.
- `name`: The name of our application used on the ZEIT dashboard. It will create a custom subdomain on your application.
- `builds`: How the application can be built. As I’m deploying a `create-react-app`, I use `@now/static-build` but there are [many other options you might want to consider](https://zeit.co/docs/v2/advanced/builders).
- `regions`: Where we want the application to be deployed. I chose `bru` to use GCP in Brussels, but you can choose your favorite one [on that list](https://zeit.co/docs/v2/network/regions-and-providers).
- `routes`: Simply the mapping of where any incoming request should point. Note that everything unknown will be redirected to the `index.html` file.

There is more! As the `@now/static-build` I use has some constraints, I need to respect them:

- We need to add a `now-build` script in the `package.json` file that will be run by the builder’s entry-point.
- The output data should be included in a `dist` folder, while `create-react-app` sets the content in a `build` folder.

Putting everything together, our `package.json` file will look like this:

`gist:brunosabot/f5fd154e3c9190d732a974ddc1e3b289`

<figcaption>To have a lighter gist, I only kept the name, version, and scripts keys</figcaption>

Okay, everything is now set for deployment. Our next step is to implement the appropriate GitHub Actions.

### GitHub Actions Configuration

To create a new deployment workflow, we need to create a `.github` folder at the root of our repository. You might already be using it if you use the [issue templates](https://help.github.com/en/articles/creating-issue-templates-for-your-repository).

Then, add a `workflows` subfolder that will contain as many workflows as you want.

Next, we will create a YAML file that corresponds to the deploy workflow we want. You can create many files to create multiple workflows, one for the tests and one to deploy, as an example.

`gist:brunosabot/e1b8f12917df3c95a700a30d3a061b28`

Now, let’s analyze what we wrote in the file:

- `name`: A pretty name for the workflow which we will see in GitHub.
- `on`: When the workflow should be executed. [There are a lot of events we can pick](https://help.github.com/en/articles/events-that-trigger-workflows).
- `jobs`: The list of jobs to execute.

![The jobs list in the GitHub interface](https://storage.cloud.google.com/brunosabot.dev/img/1__AQRdaWkdiS5gB4uakwD6fg.png)
The jobs list in the GitHub interface

The jobs look almost the same. I will only present the _publish_ one that contains more information than the others.

- `name`: Once again, a pretty name to identify the current job.
- `runs-on`: The operating system that will execute the job. There are few possibilities [listed here](https://help.github.com/en/articles/workflow-syntax-for-github-actions#jobsjob_idruns-on).
- `needs`: The jobs required before executing this one. GitHub Actions are smart; they will follow the `needs` order so you don’t have to worry about how you have your jobs sorted. You will see that illustrated in the screenshot below.
- `steps`: The list of actions to execute

Once again, let’s dive in to see how steps are configured:

- `name`: Guess what? A pretty name for the action!
- `uses`: Finally, the action to execute. There are plenty of actions available. The two I use are `actions/checkout@v1` to get my repository files and `actions/zeit-not@master` for the ZEIT-Now related actions. The anatomy of the action is to have the repository first (e.g. actions/checkout), then the branch we want to use (e.g. master).
- `env`: The environment variables stored within the GitHub interface.
- `with`: Allows the configuration of actions with some variables. In this example, we just want to add the `--prod` args to the `now` command that will be executed.

![With the jobs on the left and the steps on the right](https://storage.cloud.google.com/brunosabot.dev/img/1__Tb____ZlqkA42Z6dtscs1cew.png)
With the jobs on the left and the steps on the right

#### Storing secrets

In the YAML file, we use a `ZEIT_TOKEN` secret. You can set it in the _Settings_ menu, where we can find a _Secrets_ menu. Once you add a secret, you will not be able to get the value again.

![](https://storage.cloud.google.com/brunosabot.dev/img/1__Ix__D9z26HYO0D8Qtt3V99g.png)

### Conclusion

Setting up GitHub Actions was a bit complicated at first, especially because the stories you can find on the internet use the old syntax. But, in the end, everything is pretty simple and functional for a beta feature.

There is, of course, more to say on the usage, considering the build performance, for example. But that will be the content of another story. Stay tuned!

I enjoyed exploring the API and I hope you will be as excited as I am to start digging into the Actions!
