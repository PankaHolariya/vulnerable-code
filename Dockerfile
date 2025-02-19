FROM node:14-alpine 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
EXPOSE 3000
CMD ["node", "index.js"]
