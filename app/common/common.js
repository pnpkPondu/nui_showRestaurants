function App(){
    var textNumber = 0;
    var textArray = [];
    var textArrayLength = 0;

    this.setTextArray = function(data){
        textArray = data.textArray;
        textArrayLength = textArray.length;
        console.log("getTextArray=",textArray);
        console.log("textArrayLength=",textArrayLength);
    }

    this.starText = function(){
        this.nextText();
    }

    this.nextText = function(){
        if(textArrayLength == textNumber){
            window.location.href = "index.html";
        }
        else{
            $(".textBox-name").text(textArray[textNumber].name);
            $(".textBox-text").text(textArray[textNumber].text);
            console.log("showNowTextNumber=", textNumber);
            console.log("showNowTextName=", textArray[textNumber].name);
            console.log("showNowText=", textArray[textNumber].text);

            textNumber++;
        }
    }
}