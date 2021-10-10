import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import { NextApiRequest, NextApiResponse } from 'next'

const options = {
    site: process.env.NEXTAUTH_URL,
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
        })
    ]
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)