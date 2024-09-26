'use strict'

const MEME_KEY = 'ex-sprintII-meme'

var gMemes = []

// var gMeme = {
//     selectedImgId: 5,
//     selectedLineIdx: 0,
//     lines: [{ txt: 'I sometimes eat Falafel', size: 20, color: 'red' }]
// }

function getMeme(imgId = '') {
    if (imgId.length === 0) {
        return gMemes
    } else {
        return gMemes.find(img => img.id === imgId)
    }
}

function updateMeme(imgID, lineNo, line = []) {

}


function _loadImages() {
    gMemes = loadFromStorage(MEME_KEY)

    if (gMemes && gMemes.length !== 0) return
    gMemes = []

    gMemes.push(createMeme('y1Q0c', 1, [{ txt: 'I sometimes eat Falafel', size: 20, color: 'red' }]))
    gMemes.push(createImg('cJG68', 1, [{ txt: 'Cheers', size: 20, color: 'blue' }]))
    gMemes.push(createImg('40KQY', 1, [{ txt: 'Boom!', size: 20, color: 'red' }]))
    gMemes.push(createImg('vE4yp', 1, [{ txt: 'Pow!', size: 20, color: 'blue' }]))


    _saveImgGallery()
}

function createMeme(imgID, lineNo, line = []) {
    return {
        selectedImgId: imgID,
        selectedLineIdx: lineNo,
        lines: line
    }
}

function _saveImgGallery() {
    saveToStorage(MEME_KEY, gMemes)
}