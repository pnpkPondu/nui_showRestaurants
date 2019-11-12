
var app = new App();

$(function(){
    app.indexReadyFunction();
});

app.indexReadyFunction = function(){
    $("#startBtn").click(app.clickStartBtn);
}

app.clickStartBtn = function(){
    window.location.href = "./app/startStory/startStory.html";
}