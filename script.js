const inventory = {
    stock: 10,
    man: 0,
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
            resolve(`${successMessage} et personnel disponible`);
        } else {
            reject(`Personel indisponible malgré ${successMessage}`);
        }
    })
}

validStock() 
    .then((sucessMessage) => {return validMan(sucessMessage)})
    .then((sucessMessage) => {handleSuccess(sucessMessage)} )
    .catch((rejectMessage) => {handleReject(rejectMessage)} )