const Chuck  = require('chucknorris-io'),
      client = new Chuck();


    export default class ChuckJoks {

        getAll(value) {
            console.log(value)
            return client.getRandomJoke(value);
        }
    } 
    
    export const chuck = new ChuckJoks()

// // Retrieve a random chuck joke
// client.getRandomJoke().then(function (response) {
//     // do stuff here
// }).catch(function (err) {
//     // handle error
// });

// // Retrieve a random chuck joke from the given category
// client.getRandomJoke('dev').then(function (response) {
//     // do stuff here
// }).catch(function (err) {
//     // handle error
// });

// // Retrieve a list of available joke categories
// client.getJokeCategories().then(function (response) {
//     // do stuff here
// }).catch(function (err) {
//     // handle error
// });

// // Free text search
// client.search(searchTerm).then(function (response) {
//     // do stuff here
// }).catch(function (err) {
//     // handle error
// });