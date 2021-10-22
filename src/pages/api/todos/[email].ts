import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '../../../util/connectDb'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const db = await connectDB(process.env.MONGO_DB!)
    const collection = db.collection('todos')

    const { email } = req.query

    const todos = await collection.find({ uemail: email }).toArray()

    return res.json(todos)
}