var Ball, database;
var position;

function setup() {
    //adicionar referência ao banco de dados

    //imprimindo nossa variável que aponta para nosso bd
    console.log(database);
    createCanvas(500, 500);
    
    //criar sprite bola e adicionar cor

    //variável para se referir e ao local fonte ou a child no banco de dados

}

function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        writePosition(-1, 0);
    } else if (keyDown(RIGHT_ARROW)) {
        writePosition(1, 0);
    } else if (keyDown(UP_ARROW)) {
        writePosition(0, -1);
    } else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +1);
    }
    drawSprites();
}

//função para escrever a mudança da posição quando as teclas de seta são pressionadas

function writePosition(x, y) {
    
}

//função para alterar os valores no banco de dados.
function readPosition(data) {
    
}


function showError() {
    
}