# syntax=docker/dockerfile:1.7
FROM node:22-alpine AS build

ENV PNPM_HOME="/pnpm" \
    PATH="/pnpm:$PATH" \
    CI=true

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --prefer-offline --config.dangerously-allow-all-builds=true

COPY . .
RUN pnpm run build

FROM nginx:1.27-alpine AS runtime

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
