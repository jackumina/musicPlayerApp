const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const port = 8080;
const uri = 'mongodb+srv://jackumina:VpHFEzt4Gt1lXxOj@musicplayerappcluster.resrko7.mongodb.net/?retryWrites=true&w=majority&appName=musicPlayerAppCluster';

async function connectToMongoDB() {
    try {
        await mongoose.connect(uri);
        app.listen(port, () => console.log(`Server started on port ${port}`));
    }
    catch (err) {
        console.log(err);
    }
}

connectToMongoDB();