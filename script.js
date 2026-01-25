// GENESIS QUANTUM DECK TCG SCRIPT

// CARD DATA 
const cardsData = [  
    {name: "Titan-X", image: "assets/robot1.png", power: 95, processor: 88, velocity: 60, memory: 70},
    {name: "NanoByte", image: "assets/robot2.png", power: 40, processor: 92, velocity: 75, memory: 95},
    {name: "IronClad", image: "assets/robot3.png", power: 90, processor: 65, velocity: 50, memory: 55},
    {name: "FlashBolt", image: "assets/robot4.png", power: 60, processor: 70, velocity: 98, memory: 60},
    {name: "Cortex Prime", image: "assets/robot5.png", power: 55, processor: 99, velocity: 65, memory: 98},
    {name: "Steel Phantom", image: "assets/robot6.png", power: 85, processor: 80, velocity: 85, memory: 75},
    {name: "MechaNova", image: "assets/robot7.png", power: 92, processor: 90, velocity: 78, memory: 88},
    {name: "ByteRider", image: "assets/robot8.png", power: 50, processor: 85, velocity: 88, memory: 80},
    {name: "GigaCore", image: "assets/robot9.png", power: 88, processor: 94, velocity: 62, memory: 90},
    {name: "ShadowUnit", image: "assets/robot10.png", power: 72, processor: 76, velocity: 93, memory: 70},
    {name: "Atlas Mk-II", image: "assets/robot11.png", power: 98, processor: 82, velocity: 58, memory: 65},
    {name: "MicroSpark", image: "assets/robot12.png", power: 35, processor: 89, velocity: 97, memory: 92},
    {name: "WarForge", image: "assets/robot13.png", power: 96, processor: 74, velocity: 55, memory: 60},
    {name: "DataStorm", image: "assets/robot14.png", power: 58, processor: 97, velocity: 84, memory: 99},
    {name: "TurboDroid", image: "assets/robot15.png", power: 70, processor: 73, velocity: 95, memory: 68},
    {name: "Quantum-X", image: "assets/robot16.png", power: 75, processor: 100, velocity: 77, memory: 100},
    {name: "BoltMech", image: "assets/robot17.png", power: 80, processor: 78, velocity: 89, memory: 72},
    {name: "Sentinel Pro", image: "assets/robot18.png", power: 86, processor: 83, velocity: 70, memory: 85},
    {name: "SparkEdge", image: "assets/robot19.png", power: 63, processor: 87, velocity: 92, memory: 90},
    {name: "IronPulse", image: "assets/robot20.png", power: 91, processor: 69, velocity: 64, memory: 66},
    {name: "Hyperion", image: "assets/robot21.png", power: 94, processor: 93, velocity: 81, memory: 93},
    {name: "CyberKnight", image: "assets/robot22.png", power: 89, processor: 79, velocity: 73, memory: 76},
    {name: "NanoGuard", image: "assets/robot23.png", power: 52, processor: 91, velocity: 86, memory: 94},
    {name: "ThunderBot", image: "assets/robot24.png", power: 93, processor: 72, velocity: 90, memory: 67},
    {name: "AstroMech", image: "assets/robot25.png", power: 77, processor: 88, velocity: 82, memory: 89},
    {name: "PixelRex", image: "assets/robot26.png", power: 68, processor: 84, velocity: 87, memory: 91},
    {name: "OmegaDrive", image: "assets/robot27.png", power: 97, processor: 95, velocity: 79, memory: 96},
    {name: "RustRunner", image: "assets/robot28.png", power: 62, processor: 66, velocity: 91, memory: 58},
    {name: "LogicWave", image: "assets/robot29.png", power: 57, processor: 98, velocity: 74, memory: 97},
    {name: "Apex HellFire", image: "assets/robot30.png", power: 100, processor: 96, velocity: 83, memory: 94}
];

// GAME LOGIC
let deck = shuffle([...cardsData]);

let player1 = deck.slice(0, 15);
let player2 = deck.slice(15);

let currentChooser = 1;
let chosenStat = null;
;
const p1CardDiv = document.getElementById("p1Card");
const p2CardDiv = document.getElementById("p2Card");

const p1Count = document.getElementById("p1Count");
const p2Count = document.getElementById("p2Count");

const turnText = document.getElementById("turnText");

// SHUFFLE FUNCTION
function shuffle(arr){
    return arr.sort(()=>Math.random()-0.5);
}

// SHOW CARDS FUNCTION
function showCards(){

    if(player1.length){
        const c = player1[0];

        document.getElementById("p1Img").src = c.image;
        document.getElementById("p1Name").textContent = c.name;

        document.getElementById("p1Stats").innerHTML =
        `
        <span>⚡ ${c.power} HP</span>
        <span>🧠 ${c.processor} THz</span>
        <span>🚀 ${c.velocity} km/h</span>
        <span>💾 ${c.memory} TB</span>
        `;

    }

    if(player2.length){
        const c = player2[0];

        document.getElementById("p2Img").src = c.image;
        document.getElementById("p2Name").textContent = c.name;

        document.getElementById("p2Stats").innerHTML =
        `
        <span>⚡ ${c.power} HP</span>
        <span>🧠 ${c.processor} THz</span>
        <span>🚀 ${c.velocity} km/h</span>
        <span>💾 ${c.memory} TB</span>
        `;
    }

    p1Count.textContent = player1.length;
    p2Count.textContent = player2.length;
}

// CHOOSE STAT FUNCTION
document.querySelectorAll("[data-stat]").forEach(btn => {
    btn.onclick = ()=> {
        if(currentChooser === 1 || currentChooser === 2){
            chosenStat = btn.dataset.stat;
            turnText.textContent = `Stat: ${chosenStat.toUpperCase()}`;

        }
    }
});

// PLAY ROUNDS
document.getElementById("nextBtn").onclick = () => {
    if(!chosenStat) return alert("Choose a stat first!");

    let c1 = player1.shift();
    let c2 = player2.shift();

    let v1 = c1[chosenStat];
    let v2 = c2[chosenStat];

    if(v1 > v2){
        player1.push(c1, c2);
        currentChooser = 1;
        turnText.textContent = "Player 1 wins the round!";
    }
    else if(v2 > v1){
        player2.push(c1, c2);
        currentChooser = 2;
        turnText.textContent = "Player 2 wins the round!";
    }
    else{
        player1.push(c1);
        player2.push(c2);
        turnText.textContent = "It's a tie!";   
    }

    chosenStat = null;
    showCards();
    checkWinner();
};

// CHECK WINNER FUNCTION
function checkWinner(){
    if(player1.length === 0){
        alert("Player 2 wins the game!");
        location.reload();
    }

    if(player2.length === 0){
        alert("Player 1 wins the game!");
        location.reload();
    }
}
showCards();