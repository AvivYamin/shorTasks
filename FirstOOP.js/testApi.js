
let axios = require("axios").default;
const token = "0a8cd99982msh2fb3081cc1f386cp1b6eccjsn282d6c4dfda4";
let options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/players',
  params: {league: '1', season: '2020'},
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '0a8cd99982msh2fb3081cc1f386cp1b6eccjsn282d6c4dfda4'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


console.log("hey!")
