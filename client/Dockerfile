# ------ Phase 1 ------
FROM node:alpine as builder

WORKDIR '/app'

COPY ./package.json ./
RUN npm install

COPY . .
RUN npm run build


# ------ Phase 2 -------
FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html
