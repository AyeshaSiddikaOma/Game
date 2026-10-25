let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");
let inputThree = document.querySelector("#inputThree");
let inputFive = document.querySelector("#inputFive");
let btnOne = document.querySelector("#btnOne");
let btnTwo = document.querySelector("#btnTwo");
let btnThree = document.querySelector("#btnThree");
let btnFour = document.querySelector("#btnFour");
let errorOne = document.querySelector("#errorOne");
let errorTwo = document.querySelector("#errorTwo");
let errorThree = document.querySelector("#errorThree");
let errorFour = document.querySelector("#errorFour");
let boxOne = document.querySelector(".boxOne");
let boxTwo = document.querySelector(".boxTwo");
let boxThree = document.querySelector(".boxThree");
let boxFour = document.querySelector(".boxFour");
let name = document.querySelector("#name");
let nameTwo = document.querySelector("#nameTwo");
let guess = document.querySelector(".guess");
let chances = document.querySelector(".chances");
let alertBox = document.querySelector(".alertBox");
let text = document.querySelector("#text");
let myValues = [];
let myArr = [];
let num = 5;
let newG =  document.querySelector("#new");

//All Functions Start
chances.innerHTML = num;
let validationOne = () => {
  if (/\d/.test(inputOne.value)) {
    errorOne.innerHTML = "Numbers Are Not Allowed";
  } else if (inputOne.value[0] == inputOne.value[0].toLowerCase()) {
    errorOne.innerHTML = " Please Capitalize Your Name";
  } else {
    boxOne.style.display = "none";
    boxTwo.style.display = "block";
    name.innerHTML = `${inputOne.value}`;
  }

};
let validationTwo = () => {
  if (isNaN(inputTwo.value)) {
    errorTwo.innerHTML = "Plese Enter A Number";
  } else if (inputTwo.value <= 0 || inputTwo.value > 10) {
    errorTwo.innerHTML = "Plese Enter A Number 1 to 10";
  } else {
    myValues.push(inputTwo.value);
    console.log(myValues);
    boxTwo.style.display = "none";
    boxThree.style.display = "block";
  }
};
let validationThree = () => {
  if (/\d/.test(inputThree.value)) {
    errorThree.innerHTML = "Numbers Are Not Allowed";
  } else if (inputThree.value[0] == inputThree.value[0].toLowerCase()) {
    errorOne.innerHTML = " Please Capitalize Your Name";
  } else {
    boxThree.style.display = "none";
    boxFour.style.display = "block";
    nameTwo.innerHTML = `${inputThree.value}`;
  }
};
let validationFour = () => {
  if (isNaN(inputFour.value)) {
    errorFour.innerHTML = "Plese Enter A Number";
    inputFour.value = "";
  } else if (inputFour.value <= 0 || inputFour.value > 10) {
    errorFour.innerHTML = "Plese Enter A Number 1 to 10";
    inputFour.value = "";
  } else {
    myArr.push(inputFour.value);

    if (inputFour.value == myValues[0]) {
      errorFour.innerHTML = "You Are Winner";
      text.innerHTML = "You Won"
      inputFour.value = "";
        newGame()

    } else {
      myArr.push(inputFour.value);
      guess.innerHTML += myArr[myArr.length - 1] + ";";
      inputFour.value = "";
      num--;
      chances.innerHTML = num;
      if (num == 0) {
        errorFour.innerHTML = "Game Over";
        inputFour.value = "";
              text.innerHTML = "Game Over"

          newGame()
        
      }
    }
  }
};

let newGame = ()=>{
alertBox.style.display = "block"
  myValues = [];
          myArr = [];
          num = 5;

inputFour.setAttribute('disabled','')
btnFour.setAttribute('disabled', '');
btnFour.style.backgroundColor = "red"

}
//All Functions End

//All Logic Start
btnOne.addEventListener("click", () => {
  validationOne();
});
btnTwo.addEventListener("click", () => {
  validationTwo();
});
btnThree.addEventListener("click", () => {
  validationThree();
});
btnFour.addEventListener("click", () => {
  validationFour();
});
newG.addEventListener('click',()=>{
    alertBox.style.display = "none"
    boxFour.style.display = "none"
    boxOne.style.display = "block"
          inputOne.value = "";

    inputTwo.value = "";
    inputThree.value = "";
    inputFour.value = "";
    
inputFour.removeAttribute('disabled','')
btnFour.removeAttribute('disabled', '');
btnFour.style.backgroundColor = "#285a43;"
})
//All Logic End
