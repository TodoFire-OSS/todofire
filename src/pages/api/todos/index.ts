import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '../../../util/connectDb'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const db = await connectDB(process.env.MONGO_DB!)
    const collection = db.collection('todos')

    if(req.method === 'POST'){
        await collection.insertOne({
            tid: `${Math.floor(1000 + Math.random() * 9999)}`,
            uemail: req.body.uemail,
            tname: req.body.tname,
            done: false
        })
                
        return res.end('Todo sent!')
    }
    if(req.method === 'PUT'){
        const todo = await collection.findOne({ tname: req.query.tname })

        await collection.updateOne({
            tname:  req.query.tname
        },
        {
            $set: { done: !todo?.done }
        })
    }
    if(req.method === 'DELETE'){
        await collection.deleteOne({ tname: req.query.tname })
    }
}