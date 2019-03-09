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

const url1 = "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg?itok=ds7LqH1N&resize=1100x1100";
const url2 = "https://i.ytimg.com/vi/InkWIPUFVdM/maxresdefault.jpg";
const url3 = "https://cdn.britannica.com/67/197567-131-1645A26E.jpg";

function loadImages(url) {
    return new Promise((resole) => {
        const img = new Image();
        document.body.append(img);
        img.addEventListener("load", () => {
            resolve();
        })
    })
}

loadImages(url1)
    .then(() => loadImages(url2), console.log('First image loaded'))
    .then(() => loadImages(url3), console.log('Second image loaded'))
console.log("Third image loaded")