const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength

const initPlayers = (players) => {
    let detailedPlayers = [];
    for (let i = 0; i<players.length; i++) {
        var type = "villain"
        if (i % 2 == 0) {
            type = "hero"
        }
        var data = {
            name:players[i],
            strength:getRandomStrength(),
            image:`images/super-${i+1}.png`,
            type
        }
        detailedPlayers.push(data)
    }

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.floor(Math.random()*100)
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    players.forEach(player=>{
        if (player.type != type) {
            return;
        }
        fragment += `
        <div class="player">
            <img src="${player.image}" alt="">
            <div class="name">${player.name}</div>
            <div class="strength">${player.strength}</div>
        </div>
        `;
    })

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
