import { userAvgMarks } from '../utils/calAvg.js'
import preciousData, { myData, secondPerson } from '../utils/commonData.js'
console.log(myData)
console.log(secondPerson)

let averageMarks = userAvgMarks(900, 10)
console.log(averageMarks)

let salMarks = 800
let totalSubjects = 10

let salAvg = userAvgMarks(salMarks, totalSubjects)


let musMarks = 950
let musAvg = userAvgMarks(musMarks, 12)


// let ans = any()
// const any = () => {
//     console.log("any") // window shooping util store pe ja k
// }

console.log(preciousData)