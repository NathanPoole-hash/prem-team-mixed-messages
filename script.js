let team = ['Arsenal', 'Aston Villa', 'Brentford', 'Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 
'Everton', 'Leeds', 'Leicester', 'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle', 'Norwich', 
'Southampton', 'Tottenham', 'Watford', 'West Ham', 'Wolves'
];
const randomTeam = team[Math.floor(Math.random() * team.length)];

let randomPosition = Math.floor(Math.random() * 20 + 1)


let randomGoals = function () {
    if (randomPosition >= 15) {
        return Math.floor(Math.random() * 40 + 8)
    } else if (randomPosition >= 10 && randomPosition < 15) {
    return Math.floor(Math.random() * 80 + 30)
    } else if (randomPosition >= 5 && randomPosition <10) {
        return Math.floor(Math.random() * 100 + 50)
    } else if (randomPosition < 5) {
        return Math.floor(Math.random() * 150 + 65)
    }
}

let convertToOrdinal = function () {
    if (randomPosition === 1) {
        return '1st'
    } else if (randomPosition === 2) {
        return '2nd'
    } else if (randomPosition === 3) {
    return '3rd'
    } else if (randomPosition >= 4 && randomPosition <= 20) {
    return randomPosition + 'th'
}
}

let generateRandomStats = function() {
    return 'Your Team is ' + randomTeam + ', they finished ' + `${convertToOrdinal()}` + 
    ' and they scored ' + `${randomGoals()}` + ' goals!'}
    
    console.log(generateRandomStats());