const roomObj = {
    name: `lab 2`,
    numOfChairs : 20,
    isComputerAvb: true,
    persons: ['salman', 'mustaghfir', 'atif'],
    salman: {
        age: 25,
        gender: "male",
        address: 'lhr'
    }
}

console.log(roomObj)
console.log(roomObj.name)
console.log(roomObj.numOfChairs)
console.log(roomObj.isComputerAvb)
console.log(roomObj.persons)


console.log(roomObj.salman) // obj in obj

const lab3 = {...roomObj}
lab3.name = "lab 4"
console.log(lab3)
console.log(roomObj)