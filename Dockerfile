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

FROM fholzer/nginx-brotli
WORKDIR /usr/share/brunosabot/
COPY --from=0 public /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/other.conf /etc/nginx/conf.d/other.conf