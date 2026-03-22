// npm i @upstash/redis
// npm i @upstash/ratelimit

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();


const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(120, "2 m"),  //5m 100
});

export default ratelimit;


