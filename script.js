function Script(){
let points = 0
let q1 = prompt("What is the smallest planet in our solar system?")
let q2 = prompt('Which planet is known as the "Red Planet"?')
let q3 = prompt("What is the capital of Russia?")
let q4 = prompt("Who is the president of the United States of America?")
let q5 = prompt("What letters represent iron?")
let q6 = prompt("What is 2 + 2?")
let q7 = prompt("Neil Armstrong was the second man on the moon. Respond with True or False.")
let q8 = prompt("What country is the largest?")
let q9 = prompt("What is the approximate population of Earth? \n a: 7 billion \n b: 900 billion \n c: 10 million \n d: 6000")
let q10 = prompt("Finish the word T - e - _")
let q11 = prompt("Does HTML stand for Hyper Text Markup Language? Respond with True or False.")

if (q1.toLowerCase() == "mercury") {points=points+1}
if (q2.toLowerCase() == "mars") {points=points+1}
if (q3.toLowerCase() == 'moscow') {points=points+1}
if (q4.toLowerCase() == 'joe biden') {points=points+1}
if (q5.toLowerCase() == 'fe') {points=points+1}
if (q6.toLowerCase() == '4') {points=points+1}
if (q7.toLowerCase() == 'false') {points=points+1}
if (q8.toLowerCase() == 'russia') {points=points+1}
if (q9.toLowerCase() == 'a') {points=points+1}
if (q10.toLowerCase() == 'a') {points=points+1}
if (q11.toLowerCase() == 'true') {points=points+1}

if (points >= 10) {alert(`You won! with ${points} points.`)} else {alert(`You got ${points} points. We thank you for trying.`)}};