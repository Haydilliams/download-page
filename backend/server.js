const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
let FreeDownload = require('./models/freeDownload.js');
let PaidDownload = require('./models/paidDownload.js');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.get('/', (req, res) => res.send('Hello'));

app.post('/add-free', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const date = new Date();

    const newDownload = new FreeDownload({
        firstName,
        lastName,
        email,
        date,
    });

    newDownload.save()
        .then(() => res.json('New Download added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/add-paid', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const zip = req.body.zip;
    const date = new Date();

    const newDownload = new PaidDownload({
        firstName,
        lastName,
        email,
        zip,
        date,
    });

    newDownload.save()
        .then(() => res.json('New Download added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});