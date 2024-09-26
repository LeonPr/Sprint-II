'use strict'
var gElCanvas
var gCtx

function onLoadEditor() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext("2d")
    resizeCanvas()
    renderCanvas()
    
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Changing the canvas dimension clears the canvas
    gElCanvas.width = elContainer.clientWidth - 40  //* Subtracting 20px padding from each side

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

