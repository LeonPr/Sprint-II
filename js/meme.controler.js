'use strict'

var gElCanvas
var gCtx

var gNewText = ''
var gImgId = ''
var gImgLinesNo = 1
var gCurrLinesNo = 1
var gFontSize = 40
var gFillColor = 'black'
var gStrokeColor = 'brown'
var gHasInput = false

const startX = 220
const startY = 40
const middleY = 190
const endY = 420


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
    gImgId = getCurrentImgId()
    const img = getImgs(getCurrentImgId())
    loadImsToCanvas(img.url)

}
function drawAfterLoad() {
    if (gCurrLinesNo===1){
        drawText(gNewText, startX, startY)
    }else if((gCurrLinesNo===2)){
        const firstLineTxt=getMemeText(gImgId,1)
        drawText(firstLineTxt, startX, startY)
        drawText(gNewText, startX, endY)
    }else{
        const firstLineTxt=getMemeText(gImgId,1)
        drawText(firstLineTxt, startX, startY)
        drawText(gNewText, startX, endY)       
    }
}

function onAddLine(ev) {
    updateMeme(gImgId, gCurrLinesNo, gNewText, gFontSize, gFillColor)
    gNewText = ''
    gImgLinesNo += 1
    gCurrLinesNo = gImgLinesNo
    document.querySelector('.add-text').value = ''
}
function loadImsToCanvas(imgUrl) {

    var img1 = new Image()

    img1.onload = function () {
        gCtx.drawImage(img1, 0, 0)
        gCtx.fillStyle = "rgba(200, 0, 0, 0.0)"
        gCtx.fillRect(0, 0, 500, 500)
    }

    img1.src = imgUrl
}


function renderMeme(textOmImg = 'hi') {
    drawText(textOmImg, gCtx.x, gCtx.x)
}

function onTextInput(elInput) {

    const elFilter = document.querySelector('.add-text')
    if (elFilter.value.length !== 0) {
        renderCanvas()
        gNewText = elFilter.value
        setTimeout(drawAfterLoad, 200)

    } else {
        renderCanvas()
    }

}
function onCanvasClick(ev) {
    console.log('x', ev.clientX);
    console.log('y', ev.clientY);
    if (gHasInput) return;
    addInput(ev.clientX, ev.clientY);
}


function addInput(x, y) {
    var input = document.createElement('input');

    input.type = 'text';
    input.style.position = 'fixed';
    input.style.left = (x) + 'px';
    input.style.top = (y) + 'px';
    input.onkeydown = handleEnter;

    document.body.appendChild(input);

    input.focus();

    gHasInput = true;
}

function handleEnter(e) {
    var keyCode = e.keyCode;
    if (keyCode === 13) {
        drawText(this.value, parseInt(this.style.left, 0), parseInt(this.style.top, 0));
        document.body.removeChild(this);
        gHasInput = false;
    }
}

function drawText(text, x, y) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = gStrokeColor
    gCtx.fillStyle = gFillColor
    gCtx.font = gFontSize + 'px ' + document.getElementById('font-selector').value
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    if (x < 0) x = 100
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    updateMeme(gImgId, gCurrLinesNo, gNewText, gFontSize, gFillColor)

}