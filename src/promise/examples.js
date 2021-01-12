const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Whooooops!')
        }
    })
}

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Entró al something Will Happen 2')
            }, 2000)
        } else {
            const error = new Error('Whoops!')
            reject(error)
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err))

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
       .then(response => {
           console.log('Array de los resultados:', response)
           console.log('Resultado num 1:', response[1].toUpperCase())
       })
       .catch(err => {
           console.log(err)
       })