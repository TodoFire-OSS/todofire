import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '../../util/connectDb'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await connectDB(process.env.MONGO_DB!)
}