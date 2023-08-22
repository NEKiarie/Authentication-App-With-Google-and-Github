import connectMongo from "../../../database/conn";
import Users from "../../../model/schema";
import { hash } from "bcrypt";

export default async function hander(req,res){
   connectMongo().catch(error => res.json({error: "Connection Failed..!"}))

   //Only Post Method is Accepted
   if(req.method === "POST"){
  
    if(!req.body)return res.status(404).json({error: "Don't have Form Data...!"})
      const {username, email, password} = req.body;

      //Checking the duplicate users
      const checkexisting = await Users.findOne({email})
      if(checkexisting) return res.status(422).json({ message: "User already exists"})

      //Harshing passwords
      Users.create({username, email, password:await hash(password, 12)}, function(err,data) {
        if(err) return res.status(404).json({err});
        res.status(201).json({status:true, user:data})
      })

   }else{
    res.status(500).json({message:"HTTP method not valid only POST accepted!"})
   }
}