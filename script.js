const inventory = {
    stock: 10,
    man: 0,
    woman: 500
};

function validStock () {
    return new Promise ((resolve, reject) => {
        if (inventory.stock > 0) {
            resolve('Stock dispo');
        } else {
            reject('Rupture de stock');
        }
    })
}

function validMan () {
    return new Promise ((resolve, reject) => {
        if (inventory.man > 0) {
            resolve('Personnel disponible')
        } else {
            reject('Personnel absent')
        }
    })
}

function handleSuccess (resolvedValue) {
    console.log(resolvedValue);
}
function handleReject (rejectValue) {
    console.log(rejectValue);
}

validStock()
    .then(() => {return validMan()})
    .then((sucessMessage) => {console.log(sucessMessage)})
    .catch((errorMessage) => {console.log(errorMessage)})