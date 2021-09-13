import { MongoClient, Db } from 'mongodb'

let cachedDb: Db

async function connectDB(uri: string){
    if(cachedDb) { return cachedDb }

    const client = await MongoClient.connect(uri)

    const db = client.db('TodoDB')

    cachedDb = db

    return db
}

export { connectDB }