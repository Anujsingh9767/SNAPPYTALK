import { genrateToken } from "../lib/utils.js"
import User from "../models/user.model.js"
import bcryt from "bcryptjs"

export const signup = async (req ,res)=>{
    const {fullName , email , password} =req.body

    if(!fullName || !email || !password){
        return res.status(400).json({message : "All field are required"})
    }

    try {
        if(password.length<6){
            return res.status(400).json({message : "Password must be at least 6 character"})
        }

        const user =await User.findOne({email})
       if(user ) return res.status(400).json({message : "Email already exits"})

      const salt =await bcryt.genSalt(10);
      const hasedPassword = await bcryt.hash(password,salt);

      const newUser = new User({
        fullName,
        email,
        password:hasedPassword
      })

      if(newUser){
        //genrate jwt token here 

        genrateToken(newUser._id,res)
        await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            profilePic:newUser.profilePic,
        })

      }else{
        res.status(400).json({message:"Invalid user data"})
      }


    } catch (error) {
        console.log("Erroe in signup controller" , error.message);
        res.status(500).json({message:"Internal server error..."});

    }
}
export const login = (req ,res)=>{
    res.send("signup route")
}
export const logout = (req ,res)=>{
    res.send("signup route")
}