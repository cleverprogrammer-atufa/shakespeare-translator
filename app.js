var btnTranslate =document.querySelector("#btn-translate");
var textInput =document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");


 var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";




//function to get api url

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text;
  }

  //function for handling error

function errorHandler(error) {
    console.log("error occured", error);
  }




function clickHandler() {
    var inputText = textInput.value; //taking input

    
    
  //processing
  fetch (getTranslationUrl(inputText))

  .then((response) => response.json())
  .then((json) => {
    var translatedText = json.contents.translated;
    textOutput.innerHTML = translatedText; //output
  })
  .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler)