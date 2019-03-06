// const axios = require('axios');

// const status = response => {
//     if (response.status >= 200 && response.status < 300) {
//         return Promise.resolve(response)
//     }
//     return Promise.reject(new Error(response.statusText))
// }

// // const json = response => response.json()

// console.log("here");

// axios.get("https://reqres.in/api/register")
//     .then(status)
//     // .then(json)
//     .then(data => {
//         console.log("Request Succeeded", data.data[0])
//     })
//     .catch(error => {
//         console.log("Request faild", error)
//     })