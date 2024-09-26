'use strict'
var gElCanvas
var gCtx
var hasInput = false

function onLoadEditor() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext("2d")
    resizeCanvas()
    renderCanvas()
    
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Changing the canvas dimension clears the canvas
    gElCanvas.width = elContainer.clientWidth //- 40  //* Subtracting 20px padding from each side

    // drawArc(gElCanvas.width/2, gElCanvas.height/2)
}
function renderCanvas() {
    // Set the background color to grey
     gCtx.fillStyle = '#F8F8F8'
    // Clear the canvas,  fill it with grey background
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
    // Render the circle over the canvas
    const currImg = getImgs(getCurrentImgId())
    loadImsToCanvas(currImg.url)
}

function loadImsToCanvas(imgUrl) {
    // gElCanvas = document.querySelector('canvas')
    // console.log('c', c);
    // gCtx = gElCanvas.getContext("2d")
    var img1 = new Image()

    //drawing of the test image - img1
    img1.onload = function () {
        //draw background image
        gCtx.drawImage(img1, 0, 0)
        //draw a box over the top
        gCtx.fillStyle = "rgba(200, 0, 0, 0.5)"
        gCtx.fillRect(0, 0, 500, 500)

    };

    img1.src = imgUrl
}

function onTextInput(elInput){
    // const imgsList = getImgs()
    // const elFilter = document.querySelector('input')
    const filteredImgs = imgsList.filter(imgs => (imgs.keywords.includes(elFilter.value)))

    if (filteredImgs.length !== 0) {
        renderImgs(filteredImgs)
    } else {
        renderImgs()
    }

}
function onCanvasClick(ev){
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