import { MongoClient } from "mongodb";

// /api/new-meetup
// This will never end up on the client side
const handler = async (req, res) => {
  const method = req.method;
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://DanielJHeery:@cluster0.bzpam6o.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: "Message Inserted" });
  }
};

export default handler;
