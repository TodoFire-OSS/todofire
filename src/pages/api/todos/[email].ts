import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '../../../util/connectDb'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const db = await connectDB(process.env.MONGODB_URI!)
    const collection = db.collection('todos')

    const { email } = req.query

    const todos = await collection.find({ uemail: email }).toArray()

    return res.json(todos)
}