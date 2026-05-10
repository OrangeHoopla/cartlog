'use server'
import { OptionalId, Document } from "mongodb";
import mongoclient from "../lib/mongodb";

export async function uploadRecieptForm(req: OptionalId<Document>) {
//   const session = await auth0.getSession();
//   const user = session?.user;
//   req.sub = user?.sub!;

  const client = await mongoclient;
  const db = client.db("cartlog");
  const result = await db
    .collection("reciepts")
    .insertOne(req);
  return result;

}