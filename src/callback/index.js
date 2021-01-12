let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    // abrir una conexion con el metodo, la ruta y si es asincrono
    xhttp.open('GET', url_api, true);
    // validacion del llamado
    xhttp.onreadystatechange = (event) => {
        // el state 4 es el ultimo de la peticion
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                // el primer valor es el err, y el siguiente el resultado
                // ejecutamos el callback con el resultado
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                let error = new Error('Error: ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, function (error1, data1) {
    if (error1) return console.log(error1)

    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.log(error2)

        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.log(error3)

            fetchData(data3.residents[0], function (error4, data4) {
                if (error4) return console.log(error4)

                console.log(data1.info.count);
                console.log(data2.name);
                console.log(data2.species);
                console.log(data2.gender);
                console.log(data3.name);
                console.log(data3.type);
                console.log(data3.dimension);
                console.log(data4.name);
                console.log(data4.species);
                console.log(data4.gender);
            })
        })
    })
})