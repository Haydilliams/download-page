const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const AWS = require('aws-sdk');
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

app.get('/download', (req, res) => {
    console.log('reached server successfully');
    const imageKey = req.query.imageName + ".jpg";
    console.log('Image key used: ' + imageKey);

    AWS.config.update(
        {
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY
        }
    );
    const s3 = new AWS.S3();
    const options = { Bucket: "hayden-clay-downloads", Key: imageKey };
    const fileStream = s3.getObject(options).createReadStream();
    fileStream.on('error', function (error) {
        console.log('Error: ' + error);
        if (error.statusCode) {
            return res.status(error.statusCode).send();
        } 
        return res.status(500).send(); // Internal Service Error
    });

    fileStream.pipe(res); 
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});