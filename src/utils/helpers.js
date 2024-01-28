const fs = require('fs');
const crypto = require('crypto');

const base64Encode = (file) => {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
};
const prepareFileForStoring = async (data) => {
  const b64 = await base64Encode(data);

  return JSON.stringify({ b64 });
};

const chunkBase64String = (base64String, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < base64String.length; i += chunkSize) {
    chunks.push(base64String.substring(i, i + chunkSize));
  }
  return chunks;
};

const getBufferFromArr = (arr) => Buffer.from(arr);

const getFileHash = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');

module.exports = {
  prepareFileForStoring,
  chunkBase64String,
  getFileHash,
  getBufferFromArr,
};
