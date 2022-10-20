import { pwCanbeSameHash } from "@lib/shared/auth";
import getConnStrToMongoClient from "@lib/shared/db"
import NextAuth from "next-auth/next";

export const authOptions = {
    session: {
        strategy: "jwt",
    }
    , providers: [
        CredentialsProvider({
            name: "Credentials"
            , async authorize(credentials) {
                const client = await getConnStrToMongoClient();
                const db = client.db()
                const user = db.collection('users').findOne({email: credentials.email})
                if (!user) {
                    client.close()
                    throw new Error('No user found.')
                }
                const pwIsSame = await pwCanbeSameHash(credentials.password, user.password)
                if (!pwIsSame) {
                    client.close()
                    throw new Error('Invalid password! Try again.')
                }
                client.close();
                return {email: user.email}
            }
        })
    ]
}
export default NextAuth(authOptions);