FROM node:lts-alpine as builder

ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN npm ci --only=production

RUN npm run build

FROM caddy:alpine

WORKDIR /srv

COPY --from=builder /app/dist .

COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
EXPOSE 443

CMD [ "caddy", "run", "--config", "/etc/caddy/Caddyfile" ]