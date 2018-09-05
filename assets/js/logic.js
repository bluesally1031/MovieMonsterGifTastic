//Prepopulated monsters for buttons
var monsterTopics = ["Frankenstein's Monster", "Dracula", "mummy", "zombie", "wolfman"];

function renderButtons(){
    $("#monster-view").empty();
    for (var i = 0; i < monsterTopics.length; i++){
        var a = $("<button>");
        a.addClass("monster");
        a.attr("data-name", monsterTopics[i]);
        a.attr(monsterTopics[i]);
        $("#buttons").append(a);    
    }
}

$("#add-monster").on("click", function(event){
    event.preventDefault();
    var monster = $("#monster-input").val().trim();
    monsterTopics.push(monster);
    renderButtons();
});

renderButtons();