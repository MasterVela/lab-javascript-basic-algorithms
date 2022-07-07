// Iteration 1: Names and Input
//
// Iteration 2: Conditionals
//
// Iteration 3: Loops

let hacker1 = "SERGI"
console.log("The driver's name is " + hacker1)
let hacker2 = "ANNA"
console.log("The navigator's name is " + hacker2)


let hacker1length = hacker1.length
let hacker2length = hacker2.length
//console.log(hacker1length, hacker2length)

if (hacker1length > hacker2length) {
    console.log("The driver has the longest name, it has " + hacker1length + " characters.")
} else if (hacker1length < hacker2length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2length + " characters.")
} else if (hacker1length = hacker2length) {
    console.log(`Wow, you both have equally long names, ${hacker1length} characters!`)
}

let normalName = []
let reverseName = []
for (let i = 0; i < hacker1.length; ++i) {
    normalName.push(hacker1[i])
}
console.log(normalName)

for (let i = 0; i < hacker1.length; ++i) {
    reverseName.unshift(hacker1[i])
}
console.log(reverseName)

if (hacker1 < hacker2) {
    console.log("`The driver's name goes first.`")
}else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
}else
    console.log("What?! You both have the same name?")
