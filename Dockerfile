FROM mcr.microsoft.com/playwright:v1.37.1-focal-arm64

WORKDIR /app

RUN npm i -D @playwright/test \
  && npx playwright install firefox

COPY package.json package-lock.json ./
COPY . .
