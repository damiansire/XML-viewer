
class TreeDraw {
    constructor() {
        let canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
    }

    drawNode(text, x, y, width = 200) {
        if (width === 200) {
            y += 30
            x += 25
        }
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(x, y, width, 50);
        this.ctx.fillStyle = 'black';
        this.ctx.font = "20px Arial";
        this.ctx.fillText(text, x, y + 30);
    }

}

let nodeWidth = 200;
let nodeHeight = 50;
let marginBetweenLevels = 25;
let marginInsideLevel = 75;
let canvasElement = document.getElementById('canvas');
//Primer nivel del arbol
let childAmount = 1;
let treeDraw = new TreeDraw();
let mediumValue = canvasElement.width / 2 - nodeWidth / 2;
treeDraw.drawNode("menu-restaurante", mediumValue, 10);
//Segun nivel arbol
childAmount = 4;
nodeWidth = (canvasElement.width - marginInsideLevel) / childAmount;
let marginNodeInsideLevel = marginInsideLevel / (childAmount + 1);
let cursorX = marginNodeInsideLevel;
let cursorY = 30 + 10 + 50 + marginBetweenLevels;

treeDraw.drawNode("comida", cursorX, cursorY, nodeWidth);
cursorX = cursorX + nodeWidth + marginNodeInsideLevel;
treeDraw.drawNode("comida", cursorX, cursorY, nodeWidth);
cursorX = cursorX + nodeWidth + marginNodeInsideLevel;
treeDraw.drawNode("comida", cursorX, cursorY, nodeWidth);
cursorX = cursorX + nodeWidth + marginNodeInsideLevel;
treeDraw.drawNode("comida", cursorX, cursorY, nodeWidth);
