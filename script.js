const inventory = {
    stock: 10,
    man: 10,
    woman: 500
};

function handleSuccess (successMessage) {
    console.log(successMessage)
}

function handleReject(rejectMessage) {
    console.log(rejectMessage)
}

function validStock () {
    return new Promise ((resolve, reject) => {
        if (inventory.stock > 1) {
            resolve(`stock OK avec ${inventory.stock} pièces`);
        } else {
            reject(`rupture de stock`);
        }
    })
}

function validMan (successMessage) {
    return new Promise ((resolve, reject) => {
        if (inventory.man > 0) {
            resolve(`Personnel disponible`);
        } else {
            reject(`Personel indisponible`);
        }
    })
}

let myPromise = Promise.all([validStock(), validMan()]);


myPromise 
    .then((sucessMessage) => {console.log(sucessMessage)})
    .catch((rejectMessage) => {console.log(rejectMessage)} )