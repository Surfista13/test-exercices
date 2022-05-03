const jsonData1 = '{ "book": { "name": "JSON Primer", "price": 29.99, "inStock": true, "rating": null } }';
 
const jsObject1 = JSON.parse(jsonData1);
 
console.log(jsObject1);

const jsObject = { book: 'JSON Primer', price: 29.99, inStock: true, rating: null };
const jsonData = JSON.stringify(jsObject);
console.log(jsonData)

const answer = fetch('https://randomuser.me/api/');