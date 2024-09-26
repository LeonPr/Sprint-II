'use strict'

function onInit() {
    appStart()
}

function renderImgs(filteredImgs = []) {
    let strHTML = ""
    if (filteredImgs.length === 0) {
        const imgsList = getImgs()
        strHTML = imgsList.map(imgsList => `<img id="${imgsList.id}" src="${imgsList.url}" alt="" 
                                               onclick="onImgClick(this)">`)
    } else {
        strHTML = filteredImgs.map(imgsList => `<img id="${imgsList.id}" src="${imgsList.url}" alt="" 
            onclick="onImgClick(this)">`)
    }
    document.querySelector('.img-container').innerHTML = strHTML.join('')
}

function appStart() {
    renderImgs()
}

function onImgClick(elImg) {
    console.log('elImg.id', elImg.id);
    setCurrentImgId(elImg.id)
    window.location.href = "editMeme.html";
}

function onFilterInput() {
    const imgsList = getImgs()
    const elFilter = document.querySelector('input')
    const filteredImgs = imgsList.filter(imgs => (imgs.keywords.includes(elFilter.value)))

    if (filteredImgs.length !== 0) {
        renderImgs(filteredImgs)
    } else {
        renderImgs()
    }

}