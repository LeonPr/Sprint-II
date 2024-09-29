'use strict'

const MEME_KEY = 'ex-sprintII-meme'

var gMemes = []

_loadMemes()

function getMeme(imgId = '') {
    if (imgId.length === 0) {
        return gMemes
    } else {
        return gMemes.find(meme => meme.selectedImgId === imgId)
    }
}

function updateMeme(imgID, lineNo, lineText, fontSize, fillColor) {
    const meme = gMemes.find(meme => meme.selectedImgId === imgID)
    if (!meme) {
        gMemes.push(createMeme(imgID, lineNo, [{ txt: lineText, size: fontSize, color: fillColor }]))
    } else {
        if (meme.lines.length < lineNo) {
            meme.lines.push({ txt: lineText, size: fontSize, color: fillColor })
        } else {
            meme.lines[lineNo - 1].txt = lineText
            meme.lines[lineNo - 1].size = fontSize
            meme.lines[lineNo - 1].color = fillColor
        }
    }
    _saveMemes()
}
function getMemeLines(imgID) {
    const meme = gMemes.find(meme => meme.selectedImgId === imgID)
    return meme.lines
}

function deleteLine(imgID, lineIndx){
    const meme = gMemes.find(meme => meme.selectedImgId === imgID)
    meme.lines.splice([lineIndx-1],1)
    _saveMemes()
}

function getMemeText(imgID, lineIndx) {
    const meme = gMemes.find(meme => meme.selectedImgId === imgID)
    return meme.lines[lineIndx - 1].txt
}


function _loadMemes() {
    gMemes = loadFromStorage(MEME_KEY)

    if (gMemes && gMemes.length !== 0) return
    gMemes = []

    gMemes.push(createMeme('y1Q0c', 1, [{ txt: 'I sometimes eat Falafel', size: 20, color: 'red' }]))
    gMemes.push(createMeme('cJG68', 1, [{ txt: 'Cheers', size: 20, color: 'blue' }]))
    gMemes.push(createMeme('40KQY', 1, [{ txt: 'Boom!', size: 20, color: 'red' }]))
    gMemes.push(createMeme('vE4yp', 1, [{ txt: 'Pow!', size: 20, color: 'blue' }]))


    _saveMemes()
}

function createMeme(imgID, lineNo, line = []) {
    return {
        selectedImgId: imgID,
        selectedLineIdx: lineNo,
        lines: line
    }
}

function _saveMemes() {
    saveToStorage(MEME_KEY, gMemes)
}