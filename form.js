class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1","Car Racing");
        title.style("color","red");
        title.position(150,5);

        var input = createInput("name")
        var button = createButton("start")
        input.position(150,200);
        button.position(200,300);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            playerCount += 1;
            player.updateCount(playerCount)
            var name = input.value()
            var greetings = createElement("h2")
            greetings.html("hello!"+ name)
            greetings.position(150,20)
            player.update(name);
        })
    }
}