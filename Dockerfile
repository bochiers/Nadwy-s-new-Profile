# syntax=docker/dockerfile:1

# ---------- Stage 1: Build ----------
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies (layer cache friendly)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source & build static site (adapter-static -> /app/build)
COPY . .
RUN npm run build

# ---------- Stage 2: Runtime ----------
FROM nginx:alpine AS runtime

# Custom nginx config (SPA fallback + caching)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Serve the built static assets
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
