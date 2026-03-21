import limite from "../config/upstash.js";

async function rateLimiter(req, res, next) {
  try {
    const { success } = await limite.limit("my-limit-key");   
    
    if (!success) {
      return res
        .status(429)
        .json({ message: "too many request please try again later" });
    }

    next();
  } catch (error) {
    console.log("rate limit error", error);
    next();
  }
}

export default rateLimiter;
