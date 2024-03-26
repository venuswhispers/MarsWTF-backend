const Holders = require('../models/Holders');
const axios = require('axios');

async function updateHolders() {
  try {
    const token = '0x0987C4B7a158033bc420Cb202E9331D2d31d622A';
    const headers = {
      'x-api-key': '2eDS3r6N5KZTEdOGuKRfqVzTyuQ',
      'accept': 'application/json'
    }
    const { data: { data } } = await axios.get(`https://api.chainbase.online/v1/token/top-holders?chain_id=8453&contract_address=${token}&page=1&limit=100`, { headers });
    await Holders.deleteMany({});
    await Holders.insertMany(data);
    console.log("update holders success ---->", data.length);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  updateHolders
}