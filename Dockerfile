FROM node:16-buster-slim as builder
EXPOSE 8080
WORKDIR /next
COPY package.json /next
COPY yarn.lock /next
RUN yarn install --frozen-lockfile
COPY components /next/components
COPY lib /next/lib
COPY pages /next/pages
COPY posts /next/posts
COPY public /next/public
COPY styles /next/styles
COPY next-env.d.ts /next
COPY next.config.js /next
COPY tsconfig.json /next
RUN yarn build
CMD yarn start
