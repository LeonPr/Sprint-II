const IMG_KEY = 'ex-sprintII'

gImgGallery=[]


// var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
_loadImages() 

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0, 
    lines: [{ txt: 'I sometimes eat Falafel', size: 20, color: 'red' }] 
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getImgs(){
  return gImgGallerys
}

function _loadImages() {
    gImgGallery = loadFromStorage(IMG_KEY)

    if (gImgGallery && gImgGallery.length !== 0) return
  
    gImgGallery.push(createImg("/img/square/1.gpg",['human','politician','US','Donald Trump']))
    gImgGallery.push(createImg("/img/square/2.gpg",['animals','dog','Labrador']))
    gImgGallery.push(createImg("/img/square/3.gpg",['animals','dog','human','baby']))
    gImgGallery.push(createImg("/img/square/4.gpg",['animals','cat']))
    gImgGallery.push(createImg("/img/square/5.gpg",['human','baby']))
    gImgGallery.push(createImg("/img/square/6.gpg",['human','television presenter','Giorgio A. Tsoukalos']))
    gImgGallery.push(createImg("/img/square/7.gpg",['human','baby']))
    gImgGallery.push(createImg("/img/square/8.gpg",['human','movie','actor','Gene Wilder','Willy Wonka']))
    gImgGallery.push(createImg("/img/square/9.gpg",['human','baby']))
    gImgGallery.push(createImg("/img/square/10.gpg",['human','politician','US','Barack Obama']))
    gImgGallery.push(createImg("/img/square/11.gpg",['human','SPORT','US','NBA','basketball','Ron Artest',' Paul Pierce ']))
    gImgGallery.push(createImg("/img/square/12.gpg",['human','television presenter','Israel','NBA','Haim Hecht']))
    gImgGallery.push(createImg("/img/square/13.gpg",['human','movie','actor','Leonardo DiCaprio','The Great Gatsby']))
    gImgGallery.push(createImg("/img/square/14.gpg",['human','movie','actor','Laurence Fishburne','Morpheus']))
    gImgGallery.push(createImg("/img/square/15.gpg",['human','movie','actor','Sean Bean','Boromir']))
    gImgGallery.push(createImg("/img/square/16.gpg",['human','movie','actor','Patrick Stewart','Jean-Luc Picard','Star Trek']))
    gImgGallery.push(createImg("/img/square/17.gpg",['human','politician','Russia','Vladimir Putin']))
    gImgGallery.push(createImg("/img/square/17.gpg",['animated','Woody','Buzz Lightyear']))

    _saveImgGallery()
  }

  function createImg(imgLink,keywords) {
    return {
        id: makeId(5),
        url: `${imgLink}`,
        keywords: keywords
    }
  }

  function _saveImgGallery() {
    saveToStorage(IMG_KEY, gImgGallery)
  }