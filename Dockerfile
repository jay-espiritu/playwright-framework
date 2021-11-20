FROM mcr.microsoft.com/playwright:v1.16.3-focal-amd64

WORKDIR /app

RUN npm i -D @playwright/test
RUN npx playwright install chrome

COPY package.json package-lock.json ./
COPY . .
