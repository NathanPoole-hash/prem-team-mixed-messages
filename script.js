let team = ['Arsenal', 'Aston Villa', 'Brentford', 'Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 
'Everton', 'Leeds', 'Leicester', 'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle', 'Norwich', 
'Southampton', 'Tottenham', 'Watford', 'West Ham', 'Wolves'
];
const randomTeam = team[Math.floor(Math.random() * team.length)];

console.log(randomTeam)

let position = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th',
 '14th', '15th', '16th', '17th', '18th', '19th', '20th']

let randomPosition = position[Math.floor(Math.random() * position.length)];

console.log(randomPosition)

let randomGoals = Math.floor(Math.random() * 150);

console.log(randomGoals)

let generateRandomStats = function() {
return 'Your Team is ' + randomTeam + ', they finished ' + randomPosition + ' and they scored ' + 
randomGoals + ' goals!'}

console.log(generateRandomStats());


