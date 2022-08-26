FROM mcr.microsoft.com/playwright:v1.25.1-focal-arm64

WORKDIR /app

RUN npm i -D @playwright/test \
  && npx playwright install firefox

COPY package.json package-lock.json ./
COPY . .
