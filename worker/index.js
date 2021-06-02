const keys = require('./keys');
const redis = require('redis');

// Create redis client
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});
const sub = redisClient.duplicate();

// Fibonacci function
function fib(index){
    if (index < 2) return 1;
    return fib(index-1) + fib(index-2);
}

// Subscribe to redis insert
sub.on('message', (channel, message) => {
    let idx = parseInt(message);
    redisClient.hset('values', message, fib(idx));
});
sub.subscribe('insert');