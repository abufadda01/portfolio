const AMTHAL = require("./data/index.json")


const generateRandomMathal = () => {
    // to generate a random index number from 0 - 30
    let randomIndex = Math.floor(Math.random() * AMTHAL.length)
    let randomMathal = AMTHAL[randomIndex]
    return randomMathal
}




const generateRandomTenAMathal = () => {

    let randomList = new Set()

    // iterate over the randomList until ten times , until its length becomes ten
    while(randomList.size < 10){

        let randomIndexNumber = Math.floor(Math.random() * AMTHAL.length)

        // to check that we already have this random number , to not duplicate random numbers
        if(!randomList.has(randomIndexNumber)){
            randomList.add(randomIndexNumber)
        }        

    }
    

    // let output = [...randomList].map((item) => {
    // return AMTHAL[item]
    // })
    // return output
    
    // equal to
    
    
    // to convert the random list to an array
    let newArray = [...randomList]
    let output = []
    
    for(let i in newArray){
        output.push(AMTHAL[newArray[i]])
    }
    
    return output

}


 
module.exports = {generateRandomMathal , generateRandomTenAMathal}