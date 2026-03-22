import limite from "../config/upstash.js";

async function rateLimiter(req, res, next) {
  try {
    const { success } = await limite.limit(req.ip);    //for req.ip app.set("trust proxy", 1); is reqired in main file
    
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
