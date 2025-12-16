import limite from "../config/upstash.js"



async function rateLimiter(req,res,next) {

try {
    

const {success} = await limite.limit("my-limit-key")//This key represents the “bucket” for tracking requests. in upstash this my-limit-key will be visible
if(!success) {
    return res.status(429).json({message:"too many request please try again later"})
}


next() //this is imp part it tells to procced the procces if next is remove then user will newer get res it will keep saying requesting so basically process will never get over with no error

} catch (error) {
    

console.log("rate limit error",error)
next(error)



}



}


 export default rateLimiter;