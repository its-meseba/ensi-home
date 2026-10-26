# Cloud Run image for ensi-home (Next.js 14 standalone, node, port 3000).
# Build context is this folder only (see .dockerignore). .env.production holds the public NEXT_PUBLIC_* values only;
# secrets reach the container as Cloud Run env/secrets, never the image.
FROM node:22-slim AS base
ENV PNPM_HOME=/pnpm PATH=/pnpm:$PATH NEXT_TELEMETRY_DISABLED=1
RUN apt-get update -y && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
RUN corepack enable && corepack prepare pnpm@10.33.2 --activate
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
# Install scripts (husky, paraglide, prisma) are run explicitly in the build stage.
RUN pnpm install --frozen-lockfile --ignore-scripts

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# src/env.mjs requires these at build time; placeholders only exist in this stage, the real values are Cloud Run env/secrets.
ENV NEXT_STANDALONE=1 NODE_OPTIONS=--max-old-space-size=4096 \
    DATABASE_URL=postgresql://build:build@localhost:5432/build APP_URL=https://ensihome.solace.com.tr \
    GITHUB_ID=build GITHUB_SECRET=build NEXTAUTH_SECRET=build
RUN pnpm exec paraglide-js compile --project ./project.inlang --outdir ./src/paraglide \
  && pnpm exec prisma generate \
  && pnpm exec next build

FROM node:22-slim AS run
ENV NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0 NEXT_TELEMETRY_DISABLED=1
RUN apt-get update -y && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY --from=build /app/.next/standalone ./
RUN rm -f .env .env.*
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
# Blog posts are read from disk at request time (src/lib/posts.ts uses process.cwd()).
COPY --from=build /app/src/app/posts ./src/app/posts
EXPOSE 3000
CMD ["node", "server.js"]
