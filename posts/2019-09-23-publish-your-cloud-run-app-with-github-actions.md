---
canonical: https://betterprogramming.pub/publish-your-cloud-run-app-with-github-actions-6c18ff5c5ee4
creator: Bruno Sabot
date: 2019-09-23
lang: en
originalImage: https://storage.googleapis.com/brunosabot.dev/img/1__HmM__NqNjtCWw36t3Pr1DWA.jpeg
originalImageAlt: Photo by <a href="https://unsplash.com/@coloradohiker">Allan Nygren</a> on <a href="https://unsplash.com">Unsplash</a>.
path: /posts/2019/publish-your-cloud-run-app-with-github-actions
platform: Medium
subtitle: A very fast way to deploy your application with GitHub
tags: Github Actions, Github, Google Cloud Run, Google Container Registry, Programming, CICD
title: Publish your Cloud Run App with GitHub Actions
---

Google recently announced [Cloud Run](https://cloud.google.com/run/), a new [Google Cloud Platform](https://cloud.google.com/gcp/?utm_source=google&utm_medium=cpc&utm_campaign=na-US-all-en-dr-bkws-all-all-trial-p-dr-1007179&utm_content=text-ad-lpsitelinkCCexp2-any-DEV_c-CRE_113120493247-ADGP_Hybrid+%7C+AW+SEM+%7C+BKWS+%7C+US+%7C+en+%7C+Multi+~+Cloud+Platform-KWID_43700011014879364-kwd-10876442192&utm_term=KW_cloud%20platform-ST_cloud+platform&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDG8AYhrx-uAWd-_A5PQbzTIHw7LCFPa1E54xXPqJj3nMh1K3Wt55ChoCNG4QAvD_BwE) (GCP) feature, to deploy your [Docker](https://www.docker.com/) applications fast and easily. This guide will explain how to build and deploy a simple static application using the new continuous integration/continuous delivery system provided by GitHub: [Actions](https://github.com/features/actions).

To make this project live, we’ll use the following tools:

- Google Cloud Run, to execute our Docker containers
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/) to store our Docker images
- GitHub Actions to manage the continuous deployment
- GitHub to store the source code of our project.

### Configure the GCP Project

#### Service account creation

The first step is to create a _service account_ which will allow us to connect from GitHub actions. To do so, you can click the “Create Service Account” button in the “IAM & Admin/Service Accounts” menu in the GCP interface. Now fill in the “Service Account Name” field with the value “GitHub-actions” and the “Service Account Description” field with the value “Account used by GitHub Actions to connect with GCP.”

At this point, keep the value generated in the field _Service account ID_. It is the service account username that will be used later. It should look like `github-actions@key-partition-000000.iam.gserviceaccount.com`.

Clicking on the “Create” button brings up the roles configuration stage. We need two roles:

Clicking on the “Create” button brings up the roles configuration stage. We need two roles:

- **Cloud Run Admin**, the role which will allow us to create a new Cloud Run deployment;
- **Storage Admin**, the role which allow us to upload our Docker images to the GCP’s Container Registry.
- **Service Account User**, the role that allows the service account to act as a user.

The “Continue” button takes us to the third and final step: JSON key creation. To do that, just click the “Create Key” button, choose “JSON” > “Create.” A file will be downloaded, referred to as `key-partition-000000–0123456789ab.json`. Keep it, we’ll use it later.

#### API activation

Now that we have a user with the proper permissions, we need to activate the two services we need.

To enable the container registry, choose the “Container Registry” (obvious, right?) menu of the GCP interface, and click the “Enable Container Registry API” button… and we’re done.

To enable Cloud Run, choose the “Cloud Run” (obvious again, right?) menu from the GCP interface and click “Start Using Cloud Run.” Again, we’re done.

### Project Creation

To initiate the project, let’s create a GitHub repository and add several files:

- A simple welcome `<h1>Hello World!</h1>` HTML page;
- A simple error `<h1>Server error</h1>` HTML page;
- A `nginx/default.conf` file that will serve as the welcome file
- A `Dockerfile` to build Docker images;
- A `.github/workflows/googlecloudrun.yml` file to configure the continuous deployment.

#### `nginx` configuration

`gist:brunosabot/ed052ea7a9a97dca82294438ed913490`

Cloud Run listens on `localhost:8080`. So, the first step is to set these values with `server_name` and `listen`.

Then, we configure the file location that `nginx` should serve; the `root` key is where all the static files to serve are located. In this example, that’s in `usr/share/nginx/html`. The `index` key declares to `nginx` what `root` files to resolve; here, `index.html` or `index.htm` will be resolved.

Finally, we forward the 50X errors to a special file with the command `error_page` and handle the mapping in `nginx`with `location` to our error HTML file.

#### Dockerfile

`gist:brunosabot/e0fef5aa5865b457bd26f22051c287c8`

Since our application is really simple, we only have three steps in our Docker file:

- We choose the `alpine nginx` image to ensure we have the lightest bundle possible;
- We copy the `nginx conf` in its target folder;
- Finally, we copy our HTML files in the `public` folder of our newly-created container.

#### GitHub actions YAML

`gist:brunosabot/a28b8dd9c7090b66a98427fe56d26047`

This is probably the most complicated part of the project, although you’ll see that it’s still pretty simple.

Our project will make the deploy on every commit made on the master branch. We will, however, ignore everything made on the other branches since it’s a deployment script. If you need to go further, you may want to make a deploy on a different endpoint for every other branch, but that’s not today’s topic.

Our CD also has only one job, since we have a pretty simple application -simple `nginx` server with static files. But in real life, you may want other steps to build your application, or to run the tests, for example. We choose to run the build on `ubuntu-latest`, but [other possibilities are available](https://help.github.com/en/articles/workflow-syntax-for-github-actions#jobsjob_idruns-on).

The job will be composed of several steps. But before digging into them, let’s see what actions are required:

- `actions/checkout@v1` to pull the GitHub project sources we are going to deploy;
- `actions/gcloud/cli@master` to perform every step related to GCP.

Now let’s dive into the steps. There are six of them:

The first one is to ensure you get the application sources from GitHub. Because Actions might be triggered on issue creation, for example, in which we probably don’t need to get the sources. GitHub gives only the mandatory data by default.

The second one uses the Docker to build our image. Moreover, since we are uploading the image to Google Cloud Container Registry, we have to tag it with the name of the target image URI. The URI is built using:

- A host: `eu.gcr.io`;
- A project: `secrets.GCLOUD_PROJECT`, a _secret_ we will talk about in a moment;
- An app name: `secrets.GCLOUD_APP_NAME`; also a _secret._

The third step is the beginning of GCP-related commands. We first need to authenticate ourselves with the secret key `GCLOUD_AUTH` via the `auth` action.

The fourth step links GCP and Docker together so it knows where to push images.

The fifth step consists of uploading our image on the container registry. This one has a specificity: we need to use both Docker and GCloud in that command, so choose the GCloud action, and use the `sh` entrypoint in order to have both the`gcloud` and `docker` commands available, to push the image. Thanks to the fourth step, Docker will push images in the right place.

The final step is actually two commands. Here, the result of the first is not available in the second if we split them into two different steps. The two commands are responsible for:

- Installing the beta components, since Google Cloud Run is still in beta;
- Deploying the app into Cloud Run. You will need to set the [region](https://cloud.google.com/sdk/gcloud/reference/beta/run/deploy#--region) you prefer and the [platform](https://cloud.google.com/sdk/gcloud/reference/beta/run/deploy#--platform) (managed or [GKE](https://cloud.google.com/kubernetes-engine/)).

#### Declaring GitHub secrets

![Secrets interface for GitHub Actions](https://storage.googleapis.com/brunosabot.dev/img/1__CLhcjP8t9IfEEtwJ1fwH8Q.png)
Secrets interface for GitHub Actions

In our YAML file, we reference three secret keys:

- `GCLOUD_APP_NAME`: the name of the application on Cloud Run. In this example, it will be `cloud-run-github-actions`.
- `GCLOUD_PROJECT`: the project ID on Google Cloud Platform. You can find it on the “Project Selection” popup.
- `GCLOUD_EMAIL` : the service account email we create earlier that looks like `github-actions@key-partition-000000.iam.gserviceaccount.com`.
- `GCLOUD_AUTH`: the base 64-encoded content of the JSON file we downloaded at the beginning of the story, `key-partition-000000–0123456789ab.json`.

And we’re ready to execute our deployment from GitHub Actions!

### Conclusion

We can now deploy our project continuously and easily on Google Cloud Run. Our example is pretty simple, but since we’re using a Docker image, we’re free to have any kind of application we want. Just note that the application must listen to the `PORT` environment variable: Cloud Run will only listen to an app on that port!

You can find the sources on [Github](https://github.com/brunosabot/cloud-run-github-actions).
