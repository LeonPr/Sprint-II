'use strict'

function onInit(){
    appStart()
}

function renderImgs(){
    const imgsList= getImgs()
    let strHTML=imgsList.map(imgsList => `<img src="${imgsList.url}" alt="">`)

    document.querySelector('.img-container').innerHTML = strHTML.join('')
}

function appStart(){
    renderImgs()
    
}

function onFilterInput(){
    
}