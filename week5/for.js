let firstName = `salman `
console.log(firstName[10])
console.log(firstName.length)
// console.log(firstName[0])
// console.log(firstName[1])
// console.log(firstName[2])
// console.log(firstName[3])
// console.log(firstName[4])
// console.log(firstName[5])
// console.log(firstName[6])
// console.log(firstName[7])

let spaceFlag = false

for (let i = 0; i < firstName.length; i++){
    console.log(firstName[i])

    if (firstName[firstName.length-1]){
        // console.log(`space found at the last`)
        spaceFlag = true
    }
}

if(spaceFlag === true){
    console.log(`space founded at the last`)
    firstName = firstName.trim();
    console.log(firstName)
}