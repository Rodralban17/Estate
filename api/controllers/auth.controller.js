import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"
export const register = async (req,res)=>{
    const {username, email, phonenumber, password} = req.body
    try{
        //HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10)
        
        //CREATE A NEW USER
        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                phonenumber,
                password: hashedPassword,
            }
        })

        res.status(201).json({message: "User created successfully"})
    }catch(err){
        console.log(err)

          // Handle specific Prisma error codes
          if (err.code === 'P2002') {
            // Unique constraint failure
            if (err.meta.target.includes('email')) {
                return res.status(400).json({ message: "Email already exists!" });
            }
            if (err.meta.target.includes('username')) {
               return res.status(400).json({ message: "Username already exists!" });
            }  
        }

        res.status(500).json({message: "Failed to create user!"})
    }

}

export const login = async (req,res)=>{
    const {username, password} = req.body
    try{
        //CHECK IF USER EXIST
        const user = await prisma.user.findUnique({
            where:{username}
        })

        if(!user) return res.status(401).json({message: "Invalid credentials!"})

        //CHECK IF PASSWORD IS CORRECT
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid) return res.status(401).json({message: "Invalid credentials!"})

        //GENERATE COOKIE TOKEN AND SEND TO THE USER
        const age = 1000 * 60 * 60 * 24 * 7 //ms,s,m,h,d gives one week

        const token = jwt.sign({
            id: user.id,
            isAdmin: false,
        }, process.env.JWT_SECRET_KEY, {expiresIn: age})

        const {password: userPassword, ...userInfo} = user

        res.cookie("token", token,{ 
            httpOnly: true,
            maxAge: age,
        }).status(200).json(userInfo)

    }catch(err){
        console.log(err)
        res.status(500).json({message: "Failed to ligin!"})
    }

}

export const logout = async (req,res)=>{

    try{
        res.clearCookie("token").status(200).json({message: "Logout Successful!"})
    }catch(err){
        console.log(err)
    }

}