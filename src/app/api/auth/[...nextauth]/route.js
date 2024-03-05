import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from "next-auth/providers/github"



// const options = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     }),
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     })
//   ],
// }

// export default NextAuth(options);


const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: '675794308080-3t94lo6727o9fvg40papik7e2qn4p61b.apps.googleusercontent.com',
            clientSecret: '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'
        }),
        GithubProvider({
            clientId: "Iv1.ebddcf0c7d039b28",
            clientSecret: '1473e995eefcd67d12e454105d2c78d61e736534',
        }),
    ],
    secret: "asdfsdfsdasdfasdfasdfsa"
}
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }



// export default NextAuth({
//     providers: [
//         // OAuth authentication providers...
//         // AppleProvider({
//         //   clientId: process.env.APPLE_ID,
//         //   clientSecret: process.env.APPLE_SECRET
//         // }),
//         // FacebookProvider({
//         //   clientId: process.env.FACEBOOK_ID,
//         //   clientSecret: process.env.FACEBOOK_SECRET
//         // }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.GOOGLE_SECRET
//         }),
//         // GithubProvider({
//         //     clientId: process.env.GITHUB_ID,
//         //     clientSecret: process.env.GITHUB_SECRET,
//         // }),
//         // // Passwordless / email sign in
//         // EmailProvider({
//         //   server: process.env.MAIL_SERVER,
//         //   from: 'NextAuth.js <no-reply@example.com>'
//         // }),
//     ]
// })