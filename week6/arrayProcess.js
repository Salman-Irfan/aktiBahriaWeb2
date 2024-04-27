let num1 = 20 // 20

let num2 = 25 // 25

num1 = num2 // 25
console.log(num1)

// let musOrigNotes = "this is english notes"
// let atifCopy = musOrigNotes // this is english notes

// atifCopy = "changes made in photo copy" // changes

// console.log(musOrigNotes)

// let musOrigNotes = ["eng notes", "phy notes", "che notes"]

// let atifCopy = musOrigNotes // [eng, phy, che]

// atifCopy[0] = "changes in  english notes"

// console.log(musOrigNotes)

// ######## solution ########

let musOrigNotes = ["eng", "phy", "che"]

// let atifCopy = [...musOrigNotes]

// atifCopy[0] = "changes in english notes"
// console.log(musOrigNotes)

musOrigNotes.push("maths")
console.log(musOrigNotes)

musOrigNotes.push("jkfsda sdhfkjsfd")
console.log(musOrigNotes)

musOrigNotes.pop()
console.log(musOrigNotes)

// insert in start
musOrigNotes.unshift("urdu")
console.log(musOrigNotes)
musOrigNotes.shift()
console.log(musOrigNotes)

musOrigNotes.splice(1,2, "business mgmt", "calculus")
console.log(musOrigNotes)