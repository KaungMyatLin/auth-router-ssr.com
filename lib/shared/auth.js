import { hash, compare } from 'bcryptjs'

export async function c_hashPw(pw) {
    return await hash(pw, 12)
}

export async function pwCanbeSameHash(pw, hashDigest) {
    return await compare(pw, hashDigest)
}