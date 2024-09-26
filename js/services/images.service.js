const IMG_KEY = 'ex-sprintII'
const CUR_IMG_ID = 'ID-sprintII'

var gImgGallery = []
var gCurrentImgId = ''


_loadImages()

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [{ txt: 'I sometimes eat Falafel', size: 20, color: 'red' }]
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getImgs(imgId='') {
  console.log('imgId', imgId);
  if (imgId.length === 0) {
    return gImgGallery
  } else {
    return gImgGallery.find(img => img.id === imgId)
  }
}

function setCurrentImgId(imgId) {
  saveToStorage(CUR_IMG_ID, imgId)
  // gCurrentImgId = imgId
}

function getCurrentImgId() {
  return loadFromStorage(CUR_IMG_ID)
  // return gCurrentImgId 
}

function _loadImages() {
  gImgGallery = loadFromStorage(IMG_KEY)

  if (gImgGallery && gImgGallery.length !== 0) return
  gImgGallery = []

  gImgGallery.push(createImg("imgs/square/1.jpg", ['human', 'politician', 'US', 'Donald Trump']))
  gImgGallery.push(createImg("imgs/square/2.jpg", ['animals', 'dog', 'Labrador']))
  gImgGallery.push(createImg("imgs/square/3.jpg", ['animals', 'dog', 'human', 'baby']))
  gImgGallery.push(createImg("imgs/square/4.jpg", ['animals', 'cat']))
  gImgGallery.push(createImg("imgs/square/5.jpg", ['human', 'baby']))
  gImgGallery.push(createImg("imgs/square/6.jpg", ['human', 'television presenter', 'Giorgio A. Tsoukalos']))
  gImgGallery.push(createImg("imgs/square/7.jpg", ['human', 'baby']))
  gImgGallery.push(createImg("imgs/square/8.jpg", ['human', 'movie', 'actor', 'Gene Wilder', 'Willy Wonka']))
  gImgGallery.push(createImg("imgs/square/9.jpg", ['human', 'baby']))
  gImgGallery.push(createImg("imgs/square/10.jpg", ['human', 'politician', 'US', 'Barack Obama']))
  gImgGallery.push(createImg("imgs/square/11.jpg", ['human', 'SPORT', 'US', 'NBA', 'basketball', 'Ron Artest', ' Paul Pierce ']))
  gImgGallery.push(createImg("imgs/square/12.jpg", ['human', 'television presenter', 'Israel', 'Haim Hecht']))
  gImgGallery.push(createImg("imgs/square/13.jpg", ['human', 'movie', 'actor', 'Leonardo DiCaprio', 'The Great Gatsby']))
  gImgGallery.push(createImg("imgs/square/14.jpg", ['human', 'movie', 'actor', 'Laurence Fishburne', 'Morpheus']))
  gImgGallery.push(createImg("imgs/square/15.jpg", ['human', 'movie', 'actor', 'Sean Bean', 'Boromir']))
  gImgGallery.push(createImg("imgs/square/16.jpg", ['human', 'movie', 'actor', 'Patrick Stewart', 'Jean-Luc Picard', 'Star Trek']))
  gImgGallery.push(createImg("imgs/square/17.jpg", ['human', 'politician', 'Russia', 'Vladimir Putin']))
  gImgGallery.push(createImg("imgs/square/18.jpg", ['animated', 'Woody', 'Buzz Lightyear']))

  _saveImgGallery()
}

function createImg(imgLink, keywords) {
  return {
    id: makeId(5),
    url: `${imgLink}`,
    keywords: keywords
  }
}

function _saveImgGallery() {
  saveToStorage(IMG_KEY, gImgGallery)
}