'use strict'
var gElCanvas
var gCtx
var hasInput = false
const startX=200
const startY=50
function onLoadEditor() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext("2d")
    resizeCanvas()
    renderCanvas()
    
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.clientWidth 
}

function renderCanvas() {
     gCtx.fillStyle = '#F8F8F8'
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
    const currImg = getImgs(getCurrentImgId())
    loadImsToCanvas(currImg.url)
    //setTimeout(drowAfterLoad,2000) 
}
function drowAfterLoad(){
    // drawText('HI-HHHHHH', 200, 50)
}

function loadImsToCanvas(imgUrl) {

    var img1 = new Image()

    img1.onload = function () {
        gCtx.drawImage(img1, 0, 0)
        gCtx.fillStyle = "rgba(200, 0, 0, 0.0)"
        gCtx.fillRect(0, 0, 500, 500)

    };

    img1.src = imgUrl
}


function renderMeme(textOmImg='hi'){
    drawText(textOmImg, gCtx.x, gCtx.x)
}


function onTextInput(elInput){

    const elFilter = document.querySelector('input')
    if (elFilter.value.length !== 0) {
        renderCanvas()
        drawText(elFilter.value, startX, startY)
    } else {
        renderCanvas()
    }

}
function onCanvasClick(ev){
    console.log('x', ev.clientX);
    console.log('y', ev.clientY);
    if (hasInput) return;
    addInput(ev.clientX, ev.clientY);
}

//Function to dynamically add an input box: 
function addInput(x, y) {

    var input = document.createElement('input');

    input.type = 'text';
    input.style.position = 'fixed';
    input.style.left = (x - 4) + 'px';
    input.style.top = (y - 4) + 'px';

    input.onkeydown = handleEnter;

    document.body.appendChild(input);

    input.focus();

    hasInput = true;
}

//Key handler for input box:
function handleEnter(e) {
    var keyCode = e.keyCode;
    if (keyCode === 13) {
        drawText(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
        document.body.removeChild(this);
        hasInput = false;
    }
}


function drawText(text, x, y) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = 'black'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}