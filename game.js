class Game {
    constructor(){

    }
    getState(){
       database.ref('/').on("value",function (data){
           gameState = data.val()
       })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount();
            form = new Form()
            form.display();
           
        }
    }

}