const listePeople = [['Pierre', 25], ['Bruno', 40]]

const nameWinnerchoice = () => {
    return new Promise ((resolve, reject) => {
        console.log('Time to choose the winner');
        setTimeout(() =>{
            let winNum = Math.floor(Math.random()*100);

            if (winNum > 1) {
                reject('Pas de gagnant')
            } else {
                let winner = listePeople[winNum][0];
                resolve(winner);  
            }

        }, 1000)       
    })
}

const ageWinnerChoice = (winnerName) => {
    return new Promise ((resolve, reject) => {
        console.log(`What is the age of ${winnerName} ?`)
        setTimeout(() => {
            for (let i = 0; i < 2; i++) {
                if(listePeople[i][0] == winnerName) {
                    let winnerAge = listePeople[i][1];
                    resolve(winnerAge);
                }
            }
        }, 1000)
    })
}


async function asyncWinner() {
    try {        
        let winnerNameaff = await nameWinnerchoice();
        console.log(winnerNameaff);
        let winnerAgeff = await ageWinnerChoice(winnerNameaff);
        console.log(winnerAgeff);
    } catch (err) {
        console.log(err);
    }
    
}

asyncWinner()
