var app = new App();

$(function(){
    app.startStoryReadyFunction();
});

app.startStoryReadyFunction = function(){
    $.getJSON("text/startStory.json", function(data){
        app.setTextArray(data);
    });

    $("#textBox").click(app.clickTextBox);
}

app.clickTextBox = function(){
    app.nextText();
}