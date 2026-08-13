const container = document.querySelector(".container");


const arr = ["freelancer","developer", "designer"];

let careerIndx = 0;
let charectorIndex = 0;
updatText();


    function updatText(){
    charectorIndex++;

    container.innerHTML = `<h1> I am a ${arr[careerIndx].slice(0,charectorIndex)} </h1>`;
    if(charectorIndex === arr[careerIndx].length){
        careerIndx++;
        charectorIndex = 0;
    }
    if(careerIndx === arr.length){
        careerIndx = 0;
    }
    setTimeout(updatText, 300)
    }

