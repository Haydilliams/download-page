const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paidDownloadSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    zip: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const PaidDownload = mongoose.model('PaidDownload', paidDownloadSchema);

module.exports = PaidDownload;