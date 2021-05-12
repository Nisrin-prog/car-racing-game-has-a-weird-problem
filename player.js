class Player{
    constructor(){

    }
    getCount(){
        database.ref('/').on("value",function (data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    update(name){
        var index = "players/player"+ playerCount
        console.log(index)
        database.ref(index).set({
            name: name
        })
    }
}