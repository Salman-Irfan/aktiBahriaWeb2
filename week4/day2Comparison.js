// lesser or greater
console.log(12 < 10) // false
console.log(10 < 12) // true
console.log(10 < 10) // false

// lesser or greater or equal
console.log(10 <= 10) // true
console.log(10 >= 10) // true


// equality
console.log(10 == 10) // true

// not equal
console.log(10 != 12) // true
console.log(10 != 10) // false

// ram

let koiName = 20
let dusraKoiNam = 10
let pie = 3.14

console.log(koiName < 10)// flase, 20<10

console.log(koiName > dusraKoiNam)

console.log(pie > koiName) // flase

console.log(dusraKoiNam > koiName)

console.log(dusraKoiNam == koiName)

console.log(dusraKoiNam != koiName)

// ################# LOGICAL OPERATORS ####################
// and, or, not
console.log(`################# LOGICAL OPERATORS #################`)

console.log(10 < 5 && 10 > 5) // and, false

console.log(10 < 5 || 10 > 5)

console.log(!(10 < 5))

// and gate use hota email and pasw

let salmanEmail = `salman@gmail.com`
let mustaghfirEmail = `mustaghfir@gmail.com`
let atifEmail = `atif@gmail.com`


let salmanPassword = `salman`
let mustaghfirPassword = `mustaghfir`
let atifPassword = `atif`


// if (10 > 5) {
//     console.log(`if block`)
// } else {
//     console.log(`else block`)
// }

console.log(10 > 5) // true

if (10 < 5 || 10 > 5) {
    console.log(`if block`)
} else {
    console.log(`else block`)
}

let loginResult = false

if (salmanEmail == `atif@gmail.com` && salmanPassword == `fsduahjklsfd`) {
    console.log(`login succesful`)
} else {
    console.log(`either email or pwd is incorect`)
}



let stuAge = 22
let fscMarks = 850

if (stuAge >= 18) {
    console.log(`welcome to uni`)
    // in bw 900 - 1000

    if (fscMarks >= 900 && fscMarks <= 1000) {
        console.log(`elec`)
    } else {

        if (fscMarks >= 800 && fscMarks <= 899) {
            console.log(`mechanical`)
        } else {
            if (fscMarks >= 700 && fscMarks <= 799) {
                console.log(`computer`)
            } else {
                console.log(`not in meit`)
            }
        }
    }
} else {
    console.log(`must be atleast 18 or above`)
}

// Loops
// conditinal loop
let winningNumber = 57;
let guessingNumber = 1;

while (guessingNumber <= winningNumber) {
    console.log(`inside while loop and incrementing the guessing number`);
    guessingNumber++;
}

for(let i =0; i<=10; i+=2){
    console.log(`for loop ${i}`)
}
