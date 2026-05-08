const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT||5000

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://node_server:p5QHNQYceVkY2NpM@cluster0.7ye0vp5.mongodb.net/?appName=Cluster0`
// mongodb+srv://node_server:p5QHNQYceVkY2NpM@cluster0.7ye0vp5.mongodb.net/?appName=Cluster0

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();
   
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  
    await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
