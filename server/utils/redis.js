const { Redis } = require('@upstash/redis');
const redisClient = Redis.fromEnv()

module.exports = redisClient;