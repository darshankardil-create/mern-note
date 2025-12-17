// npm i @upstash/redis

// npm i @upstash/ratelimit

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

//create ratelimit which allows 10 req per 20 seconds

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"),
});

export default ratelimit;


//Redis tracks:

// . IP

// . request count

// . expiry time


// Redis = a super-fast temporary database

// Data is stored in memory (RAM), not on disk

// Used when speed is more important than long-term storage