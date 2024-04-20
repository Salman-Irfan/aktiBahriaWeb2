const generateFullName = (firstName, lastName)=>{
    // console.log(firstName)
    // console.log(lastName)
    return (`${firstName} ${lastName}`)
}

// use here
// `salman irfan`
let userFullName = generateFullName(`salman`, `irfan`)
console.log(userFullName)


let userTwoName = generateFullName(`mustaghfir`, `hussain`)
console.log(userTwoName)


// func to calc percentage
function calulatePercentage (stuMarks, totalMarks) {
    return (stuMarks/totalMarks)*100
}

// eng, urdu, che
let salMarks = 900
let mustaghfiraMarks = 950
let totalMarks = 1000

let salFuncMarks = calulatePercentage(salMarks, totalMarks)
console.log(salFuncMarks)

let musFuncMarks = calulatePercentage(950,1000)
console.log(musFuncMarks)


let doNUmbronKoAddKrnyWalaFunction = (numInput1, numInput2) => {
    return (numInput1+numInput2)
}

let addAns = doNUmbronKoAddKrnyWalaFunction(2,3)
console.log(addAns)