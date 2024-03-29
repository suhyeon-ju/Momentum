const body = document.querySelector("body");

const IMG_NUMBER = 4;

function handleImgLoad(){
  console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);//appendChild랑 prepend 차이
    }


function genRandom(){
  const number = Math.floor(Math.random()*IMG_NUMBER);
  return number;
}


function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
