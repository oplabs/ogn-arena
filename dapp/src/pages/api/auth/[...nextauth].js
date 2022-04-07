import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const Users = {
  jeffpan:'crazyexile',
  moderator:'ogn13@r3n@'
}

export default NextAuth({
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "BoV Admin Credentials",
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "Admin Username" },
      password: {  label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      console.log("credentials are:", credentials)
      const adminUser = {admin:true}

      if (Users[credentials.username] == credentials.password) {
        // Any object returned will be saved in `user` property of the JWT
        adminUser.username = credentials.username
        return adminUser
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter        
      }
    }
  })
  ],
})
