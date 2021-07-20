let team = ['Arsenal', 'Aston Villa', 'Brentford', 'Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 
'Everton', 'Leeds', 'Leicester', 'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle', 'Norwich', 
'Southampton', 'Tottenham', 'Watford', 'West Ham', 'Wolves'
];
const randomTeam = team[Math.floor(Math.random() * team.length)];

console.log(randomTeam)


let randomPosition = Math.floor(Math.random() * 21)

console.log(randomPosition)

let randomGoals = Math.floor(Math.random() * 150);

console.log(randomGoals)

let generateRandomStats = function() {
return 'My Team is ' + randomTeam + ', they finished ' + randomPosition + ' and they scored ' + 
randomGoals + ' goals!'}

console.log(generateRandomStats());


