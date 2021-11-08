let runButton = document.getElementById('eleven');
let firstName = document.getElementsByClassName('first-name');
let lastName = document.getElementById('lb-last');
let goalkeerName = document.getElementById('gk-fft');
const goalkeeper = [];
const leftBack = [];
const centerBack = [];
const rightBack = [];
const leftWing = [];
const centralMid = [];
const centralOffMid = [];
const rightWing = [];
const attacker = [];


// function that adds players in the position array
const newPlayer = (array, firstName, lastName, nationality) => {
    let newObject = {
        player: [
            this.firstName = firstName,
            this.lastName = lastName,
            this.nationality = nationality
        ]
    };
    array.push(newObject);
};

// function that selects a player from an array
const choosePlayer = (array) => {
    return array[Math.floor(Math.random() * array.length)]['player'];
};


// function that chooses a team for formation 4-4-2
const fourFourTwo = () => {
    let gk = choosePlayer(goalkeeper);
    let lb = choosePlayer(leftBack);
    let cbOne = choosePlayer(centerBack);
    let cbTwo = choosePlayer(centerBack);
    while (cbOne === cbTwo) {
        cbTwo = choosePlayer(centerBack);
    };
    let rb = choosePlayer(rightBack);
    let lw = choosePlayer(leftWing);
    let cmOne = choosePlayer(centralMid);
    let cmTwo = choosePlayer(centralOffMid);
    let rw = choosePlayer(rightWing);
    let stOne = choosePlayer(attacker);
    let stTwo = choosePlayer(attacker);
    while (stOne === stTwo) {
        stTwo = choosePlayer(attacker);
    };
    return [gk, lb, cbOne, cbTwo, rb, lw, cmOne, cmTwo, rw, stOne, stTwo]
};

// function that chooses a team for formation 5-2-3
const fiveTwoThree = () => {
    let gk = choosePlayer(goalkeeper);
    let lb = choosePlayer(leftBack);
    let cbOne = choosePlayer(centerBack);
    let cbTwo = choosePlayer(centerBack);
    while (cbOne === cbTwo) {
        cbTwo = choosePlayer(centerBack);
    };
    let cbThree = choosePlayer(centerBack);
    while (cbOne === cbThree || cbTwo === cbThree) {
        cbThree = choosePlayer(centerBack);
    };
    let rb = choosePlayer(rightBack);
    let lw = choosePlayer(leftWing);
    let cmOne = choosePlayer(centralMid);
    let cmTwo = choosePlayer(centralOffMid);
    let rw = choosePlayer(rightWing);
    let st = choosePlayer(attacker);
    return [gk, lb, cbOne, cbTwo, cbThree, rb, lw, cmOne, cmTwo, rw, st]
}

// function that chooses a team for formation 4-3-3
const fourThreeThree = () => {
    let gk = choosePlayer(goalkeeper);
    let lb = choosePlayer(leftBack);
    let cbOne = choosePlayer(centerBack);
    let cbTwo = choosePlayer(centerBack);
    while (cbOne === cbTwo) {
        cbTwo = choosePlayer(centerBack);
    };
    let rb = choosePlayer(rightBack);
    let lw = choosePlayer(leftWing);
    let cmOne = choosePlayer(centralMid);
    let cmTwo = choosePlayer(centralMid);
    while (cmOne === cmTwo) {
        cmTwo = choosePlayer(centralMid);
    }
    let cmThree = choosePlayer(centralOffMid);
    let rw = choosePlayer(rightWing);
    let st = choosePlayer(attacker);
    return [gk, lb, cbOne, cbTwo, rb, lw, cmOne, cmTwo, cmThree, rw, st]
}

// Goalkeepers
newPlayer(goalkeeper, 'Gordon', 'Banks', 'EN');
newPlayer(goalkeeper, 'Edwin', 'van der Sar', 'NL');
newPlayer(goalkeeper, 'Peter', 'Schmeichel', 'DK');
newPlayer(goalkeeper, 'Oliver', 'Kahn', 'DE');
newPlayer(goalkeeper, 'Petr', 'Cech', 'CZ');
newPlayer(goalkeeper, 'Manuel', 'Neuer', 'DE');
newPlayer(goalkeeper, 'Dino', 'Zoff', 'IT');
newPlayer(goalkeeper, 'Gianluigi', 'Buffon', 'IT');
newPlayer(goalkeeper, 'Iker', 'Casillas', 'ES');
newPlayer(goalkeeper, 'Lev', 'Yashin', 'RU');

// Left backs
newPlayer(leftBack, 'Emlyn', 'Hughes', 'EN');
newPlayer(leftBack, 'Denis', 'Irwin', 'IR');
newPlayer(leftBack, 'Bixente', 'Lizarazu', 'FR');
newPlayer(leftBack, 'Jose Antonio', 'Camacho', 'ES');
newPlayer(leftBack, 'Andreas', 'Brehme', 'DE');
newPlayer(leftBack, 'Paul', 'Breitner', 'DE');
newPlayer(leftBack, 'Giacinto', 'Facchetti', 'IT');
newPlayer(leftBack, 'Nilton', 'Santos', 'BR');
newPlayer(leftBack, 'Roberto', 'Carlos', 'BR');
newPlayer(leftBack, 'Paolo', 'Maldini', 'IT');

// Center backs
newPlayer(centerBack, 'Franz', 'Beckenbauer', 'DE');
newPlayer(centerBack, 'Franco', 'Baresi', 'IT');
newPlayer(centerBack, 'Bobby', 'Moore', 'EN');
newPlayer(centerBack, 'Alessandro', 'Nesta', 'IT');
newPlayer(centerBack, 'Gaetano', 'Scirea', 'IT');
newPlayer(centerBack, 'Sergio', 'Ramos', 'ES');
newPlayer(centerBack, 'Ronald', 'Koeman', 'NL');
newPlayer(centerBack, 'Daniel', 'Passarella', 'AR');
newPlayer(centerBack, 'Billy', 'Wright', 'EN');
newPlayer(centerBack, 'Jose', 'Santamaria', 'UY');
newPlayer(centerBack, 'Carles', 'Puyol', 'ES');
newPlayer(centerBack, 'Fernando', 'Hierro', 'ES');
newPlayer(centerBack, 'Marcel', 'Desailly', 'FR');
newPlayer(centerBack, 'Laurent', 'Blanc', 'FR');
newPlayer(centerBack, 'John', 'Terry', 'EN');
newPlayer(centerBack, 'Jaap', 'Stam', 'NL');
newPlayer(centerBack, 'Claudio', 'Gentile', 'IT');
newPlayer(centerBack, 'Hans-Georg', 'Schwarzenbeck', 'DE');
newPlayer(centerBack, 'Alan', 'Hansen', 'SCO');
newPlayer(centerBack, 'Fabio', 'Cannavaro', 'IT');

// Right backs
newPlayer(rightBack, 'Gianluca', 'Zambrotta', 'IT');
newPlayer(rightBack, 'Gary', 'Neville', 'EN');
newPlayer(rightBack, 'Phil', 'Neal', 'EN');
newPlayer(rightBack, 'Wim', 'Suurbier', 'NL');
newPlayer(rightBack, 'Jose', 'Nasazzi', 'UY');
newPlayer(rightBack, 'Giuseppe', 'Bergomi', 'IT');
newPlayer(rightBack, 'Djalma', 'Santos', 'BR');
newPlayer(rightBack, 'Lillian', 'Thuram', 'FR');
newPlayer(rightBack, 'Carlos Alberto', 'Torres', 'BR');
newPlayer(rightBack, '', 'Cafu', 'IT');

// Left wings
newPlayer(leftWing, 'Rob', 'Resenbrink', 'NL');
newPlayer(leftWing, 'Ryan', 'Giggs', 'WAL');
newPlayer(leftWing, 'Franck', 'Ribery', 'FR');
newPlayer(leftWing, 'Pavel', 'Nedved', 'CZ');
newPlayer(leftWing, 'Francisco', 'Gento', 'ES');
newPlayer(leftWing, 'Hristo', 'Stoichkov', 'BG');
newPlayer(leftWing, 'Luis', 'Suarez', 'SP');
newPlayer(leftWing, '', 'Rivelino', 'BR');
newPlayer(leftWing, '', 'Ronaldinho', 'BR');
newPlayer(leftWing, 'Cristiano', 'Ronaldo', 'PT');

// Central midfielders
newPlayer(centralMid, 'Alfredo', 'Di Stefano', 'ES');
newPlayer(centralMid, 'Johan', 'Cruyff', 'NL');
newPlayer(centralMid, 'Andres', 'Iniesta', 'ES');
newPlayer(centralMid, 'Gianni', 'Rivera', 'IT');
newPlayer(centralMid, 'Andrea', 'Pirlo', 'IT');
newPlayer(centralMid, 'Michael', 'Laudrup', 'DK');
newPlayer(centralMid, 'Raymond', 'Kopa', 'FR');
newPlayer(centralMid, 'Zinedine', 'Zidane', 'FR');
newPlayer(centralMid, 'Lothar', 'Matthaus', 'DE');
newPlayer(centralMid, 'Paul', 'Scholes', 'DE');
newPlayer(centralMid, '', 'Xavi', 'ES');
newPlayer(centralMid, 'Steven', 'Gerrard', 'EN');
newPlayer(centralMid, 'Diego', 'Simeone', 'AR');
newPlayer(centralMid, 'Graeme', 'Souness', 'SCO');
newPlayer(centralMid, 'Edgar', 'Davids', 'NL');
newPlayer(centralMid, 'Didier', 'Deschamps', 'FR');
newPlayer(centralMid, 'Patrick', 'Vieira', 'FR');
newPlayer(centralMid, 'Claude', 'Makelele', 'FR');
newPlayer(centralMid, 'Roy', 'Keane', 'IR');
newPlayer(centralMid, 'Frank', 'Rijkaard', 'NL');


// Central offensive midfielders
newPlayer(centralOffMid, 'Diego', 'Maradona', 'AR');
newPlayer(centralOffMid, '', 'Zizinho', 'BR');
newPlayer(centralOffMid, 'Michel', 'Platini', 'FR');
newPlayer(centralOffMid, 'Ruud', 'Gullit', 'NL');
newPlayer(centralOffMid, '', 'Kaka', 'BR');
newPlayer(centralOffMid, '', 'Socrates', 'BR');
newPlayer(centralOffMid, '', 'Zico', 'PT');
newPlayer(centralOffMid, 'Bobby', 'Charlton', 'EN');
newPlayer(centralOffMid, '', 'Rivaldo', 'BR');
newPlayer(centralOffMid, 'Wesley', 'Sneijder', 'NL');

// Right wings
newPlayer(rightWing, '', 'Garrincha', 'BR');
newPlayer(rightWing, 'Stanley', 'Matthews', 'EN');
newPlayer(rightWing, 'George', 'Best', 'NIR');
newPlayer(rightWing, 'Tom', 'Finney', 'EN');
newPlayer(rightWing, '', 'Jairzinho', 'BR');
newPlayer(rightWing, 'Luis', 'Figo', 'PT');
newPlayer(rightWing, 'Roberto', 'Donadoni', 'IT');
newPlayer(rightWing, 'Jimmy', 'Johnstone', 'SCO');
newPlayer(rightWing, 'Lionel', 'Messi', 'AR');
newPlayer(rightWing, 'David', 'Beckham', 'EN');

// Attackers
newPlayer(attacker, '', 'Pele', 'BR');
newPlayer(attacker, '', 'Ronaldo', 'BR');
newPlayer(attacker, 'Gerd', 'Muller', 'DE');
newPlayer(attacker, '', 'Eusebio', 'BR');
newPlayer(attacker, 'Ferenc', 'Puskas', 'HU');
newPlayer(attacker, 'Marco', 'van Basten', 'NL');
newPlayer(attacker, '', 'Romario', 'BR');
newPlayer(attacker, 'Robert', 'Lewandowski', 'PL');
newPlayer(attacker, 'Giuseppe', 'Meazza', 'IT');
newPlayer(attacker, 'Karl-Heinz', 'Rummenigge', 'DE');
newPlayer(attacker, 'Thierry', 'Henry', 'FR');
newPlayer(attacker, '', 'Raul', 'ES');
newPlayer(attacker, 'Gabriel', 'Batistuta', 'AR');
newPlayer(attacker, 'Jimmy', 'Greaves', 'EN');
newPlayer(attacker, 'Paolo', 'Rossi', 'IT');
newPlayer(attacker, 'Josef', 'Bican', 'CZ');
newPlayer(attacker, 'Alan', 'Shearer', 'EN');
newPlayer(attacker, 'Zlatan', 'Ibrahimovic', 'SE');
newPlayer(attacker, 'Samuel', `Eto'o`, 'CM');
newPlayer(attacker, 'Wayne', 'Rooney', 'EN');

const test = () => {
    let team = fourFourTwo();
    // Goalkeeper
    let gk = team[0];
    document.getElementById('gk-fft-first').innerHTML = gk[0];
    document.getElementById('gk-fft').innerHTML = gk[1];
    document.getElementById('gk-fft-nat').innerHTML = gk[2];
    // Left back
    let lb = team[1];
    document.getElementById('lb-first').innerHTML = lb[0];
    document.getElementById('lb-last').innerHTML = lb[1];
    document.getElementById('lb-nat').innerHTML = lb[2];
    // Central back 1
    let cbOne = team[2];
    document.getElementById('cb-one-first').innerHTML = cbOne[0];
    document.getElementById('cb-one-last').innerHTML = cbOne[1];
    document.getElementById('cb-one-nat').innerHTML = cbOne[2];
    // Central back 2
    let cbTwo = team[3];
    document.getElementById('cb-two-first').innerHTML = cbTwo[0];
    document.getElementById('cb-two-last').innerHTML = cbTwo[1];
    document.getElementById('cb-two-nat').innerHTML = cbTwo[2];
    // Right back
    let rb = team[4];
    document.getElementById('rb-first').innerHTML = rb[0];
    document.getElementById('rb-last').innerHTML = rb[1];
    document.getElementById('rb-nat').innerHTML = rb[2];
    // Left wing
    let lw = team[5];
    document.getElementById('lw-first').innerHTML = lw[0];
    document.getElementById('lw-last').innerHTML = lw[1];
    document.getElementById('lw-nat').innerHTML = lw[2];
    // Central midfielder 1
    let cmOne = team[6];
    document.getElementById('cm-one-first').innerHTML = cmOne[0];
    document.getElementById('cm-one-last').innerHTML = cmOne[1];
    document.getElementById('cm-one-nat').innerHTML = cmOne[2];
    // Central midfielder 2
    let cmTwo = team[7];
    document.getElementById('cm-two-first').innerHTML = cmTwo[0];
    document.getElementById('cm-two-last').innerHTML = cmTwo[1];
    document.getElementById('cm-two-nat').innerHTML = cmTwo[2];
    // Right wing
    let rw = team[8];
    document.getElementById('rw-first').innerHTML = rw[0];
    document.getElementById('rw-last').innerHTML = rw[1];
    document.getElementById('rw-nat').innerHTML = rw[2];
    // Striker 1
    let stOne = team[9];
    document.getElementById('st-one-first').innerHTML = stOne[0];
    document.getElementById('st-one-last').innerHTML = stOne[1];
    document.getElementById('st-one-nat').innerHTML = stOne[2];
    // Striker 2
    let stTwo = team[10];
    document.getElementById('st-two-first').innerHTML = stTwo[0];
    document.getElementById('st-two-last').innerHTML = stTwo[1];
    document.getElementById('st-two-nat').innerHTML = stTwo[2];
};

runButton.addEventListener('click', test);




