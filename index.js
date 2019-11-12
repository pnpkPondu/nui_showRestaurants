
var app = new App();

$(function(){
    app.indexReadyFunction();
});

app.indexReadyFunction = function(){
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./plugin/service_worker.js').then(function() { console.log('Service Worker Registered'); });
     }

    $("#startBtn").click(app.clickStartBtn);
}

app.clickStartBtn = function(){
    window.location.href = "./app/startStory/startStory.html";
}