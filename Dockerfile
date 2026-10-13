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

FROM node:22-alpine AS runtime

ENV NODE_ENV=production

WORKDIR /app

COPY --from=build /app/build ./build
RUN npm install -g sirv-cli

EXPOSE 8080

CMD ["sirv", "build", "--host", "0.0.0.0", "--port", "8080", "--single"]
