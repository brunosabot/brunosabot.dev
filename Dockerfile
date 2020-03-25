FROM node:12-buster
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY gatsby-browser.js .
COPY gatsby-config.js .
COPY gatsby-node.js .
COPY gatsby-ssr.js .
COPY static ./static
COPY src ./src
RUN yarn build

FROM node:alpine
WORKDIR /usr/share/brunosabot/
RUN yarn global add gatsby
COPY package.json .
COPY yarn.lock .
RUN yarn install --production=true --frozen-lockfile
COPY gatsby-browser.js .
COPY gatsby-config.js .
COPY gatsby-node.js .
COPY gatsby-ssr.js .
COPY --from=0 public public
COPY --from=0 .cache .cache
EXPOSE 8080
CMD yarn serve -p 8080 -H 0.0.0.0