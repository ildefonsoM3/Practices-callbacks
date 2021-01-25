const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${url_api}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(character.name);
        console.log(origin.dimension);
        console.log(origin.name);

    } catch (err) {
        console.error(err)
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');