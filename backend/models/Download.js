const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const freeDownloadSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  paid: { type: Boolean, required: true },
  price: { type: String, required: true}
}, {
  timestamps: true,
});

const FreeDownload = mongoose.model('FreeDownload', freeDownloadSchema);

module.exports = FreeDownload;