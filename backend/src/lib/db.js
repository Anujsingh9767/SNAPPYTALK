import mongoose from "mongoose"


export const connectDB =async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGOOB_URI);
        console.log("successful mogodb connected " + conn.connection.host)
    } catch (error) {
        console.log("error in connection of db " , error )
    }
}