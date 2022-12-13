import { c_hashPw } from "@/lib/shared/auth";
import getConnStrToMongoClient from "@/lib/shared/db";

async function signupHdl(req, res) {
    if (req.method === 'POST') {
        const { body } = req;
        const { em, pw } = body;
        if (!em || !pw ) {
            res.status(422).json({message:"invalid POST body!.."})
            return;
        }
        const hashDigest = c_hashPw(c);
        const client = await getConnStrToMongoClient();
        console.log(client)
        const db = client.db();
        const r_existingOrNot = await db.collection('users').findOne({email: em})
        if (r_existingOrNot) {
            res.status(422).json({message: 'user exists, please login or reset password'})
            client.close();
            return
        }

        const r_cUser_result = await db.collection('users').insertOne({email: em, password: hashDigest})
        res.status(201).json({message: 'created an user.'})
        client.close();
    }
}
export default signupHdl