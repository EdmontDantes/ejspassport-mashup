const axios = require('axios');
require('dotenv').config();

//test for console.logs first via nodemon /controller/thirdPartyControllers
// axios
// .get('https://randomuser.me/api/?results=20')
// .then((randomUserDataRetrieved) => {
//     // console.log(randomUserDataRetrieved.data.results)
//     let dataToBeProcessed = randomUserDataRetrieved.data.results
//     let sortedDataToBeProcessed = dataToBeProcessed.sort((a,b) => {
//         let lNameA = a.name.last
//         let lNameB = b.name.last
//         return (lNameA < lNameB) ? -1 : (lNameA > lNameB) ? 1 : 0;
//     });
//     console.log(sortedDataToBeProcessed)
// })
// .catch(error => console.log(error));



module.exports = {
    randomUsersDataController: (req, res) => {
        axios
        .get('https://randomuser.me/api/?results=20')
        .then((randomUserDataRetrieved) => {
            let dataToBeProcessed = randomUserDataRetrieved.data.results
            let sortedDataToBeProcessed = dataToBeProcessed.sort((a,b) => {
                let lNameA = a.name.last
                let lNameB = b.name.last
                return (lNameA < lNameB) ? -1 : (lNameA > lNameB) ? 1 : 0;
            });

            res.render('main/random', { sortedDataToBeProcessed });
        })
        .catch(error => console.log(error));
    },
    moviesPosterDescriptionController: (req, res) => {
        axios.get(`https://api.themoviedb.org/3/movie/550?api_key={MOVIE_KEY}`)
    }
}



