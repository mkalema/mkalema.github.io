
window.onload = function () {

    "use strict"

    const buttonElement = document.getElementById("button");
    buttonElement.onclick = delayMessage;

    const checkBoxElement = document.getElementById("checkBox");
    checkBoxElement.onchange = checkBox;

    const textAreaElement = document.getElementById("text");

    const buttonIgpayElement = document.getElementById("igpay");
    buttonIgpayElement.onclick = igpay;

    const buttonMalkovitchElement = document.getElementById("malkovitch");
    buttonMalkovitchElement.onclick = malkovitch;

    function autoExpand(field) {
        let current = window.getComputedStyle(field, null).getPropertyValue("font-size");

        field.style.fontSize = parseInt(current) + 2 + "pt";
    }

    function biggerDecoration(){
        //alert("Hello, World!");
        //textAreaElement.style.fontSize = 24 + "pt";

        autoExpand(textAreaElement);
    }

    function checkBox(){
        console.log("Check box onchange ")
        if(checkBoxElement.checked === true){
            //alert("Checkbox checked"); // commented out alert
            textAreaElement.className = "checked";

            // set background image
            let body = document.getElementsByTagName("body");
            body[0].className = "body-background";
        }else{
            textAreaElement.className = "unchecked";
            let body = document.getElementsByTagName("body");
            body[0].className = "";
        }



    }

// Using a timer
    let timer = null;
    function delayMessage() {
        if (timer === null) {
            timer = setInterval(biggerDecoration, 500);
        } else {
            clearInterval(timer); // cancel the timer
            timer = null;
        }
    }

    // igpay button
    function igpay(){
        let text = textAreaElement.value;
        text = text.trim();

        // if string has legnth less than 1

        let word = "";
        if(text.length <= 1){
            word = text.substr(1) +  "-ay";
        }

        let firstLetter  = text.charAt(0);

        if(  !isVowel(firstLetter) ){
            word = text.substr(1) + firstLetter + "-ay";
        }else{
            word = text.substr(1) +  "-ay";
        }

        textAreaElement.value = word;

    }

    function isVowel(input) {// a, e, i, o, u
        let vowels = ['a','e', 'i', 'o', 'u'];
        return vowels.includes(input);

    }

    // igpay button
    function malkovitch(){
        console.log("reached");
        let text = textAreaElement.value;

        text = text.trim();

        console.log("Text Area : " + text);
        let array = text.split(" ");

        console.log(array.toString());
        for(let i=0; i<array.length; i++){
            if(array[i].length >= 5){
                array[i] = "Malkovitch";
            }
        }

        let word = "";
        for(let n =0; n<array.length; n++){
            word =  word  + array[n] + " ";
        }

        textAreaElement.value = word;

    }

}