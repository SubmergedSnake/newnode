
async function accessDB() {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(url);
    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

accessDB().catch(console.error);
