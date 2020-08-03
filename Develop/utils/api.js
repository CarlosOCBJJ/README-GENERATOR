//Requiring Axios & Dotenv in lines 2&3
const axios = require("axios");
require("dotenv").config();

//Generates Github Username
const api = {
  getUsername(username) {
    return axios
      .get(
        `https://api.github.com/users/${username}?client_id=${
        process.env.CLIENT_ID
        }&client_secret=${process.env.CLIENT_SECRET}`
      )
      .catch(error => {
        console.log(`You Suck, Can't find  Username `);
      });
  }
};

module.exports = api;