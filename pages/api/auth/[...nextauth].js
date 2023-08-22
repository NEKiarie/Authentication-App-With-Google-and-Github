import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from '../../../database/conn'
import Users from '../../../model/schema'
import { compare } from 'bcrypt'

export default NextAuth({
  providers: [
    //Google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch(error => { error: "Connection Failed..!" })

        //Check user existance of credentials
        const result = await Users.findOne({ email: credentials.email })
        if (!result) {
          throw new Error("No User found with email,Please Sign up...!")
        }
        //compare()
      const CheckPassword = await compare(credentials.password, result.password)

      //Incorrect password
      if(!CheckPassword || result.email !== credentials.email) {
        throw new Error("Username or Password does not match")
      }
     
      return result;

      }
    })
  ],
  secret:"HkvHMTAg9nbtcxMbXVMY08cZ4JXeF6YGBB221wWPYQo="
})