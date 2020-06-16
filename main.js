var Module = {

    isPlayer1: true,

    renderButtons: function(player1, player2)
    {
        let imageX = document.createElement("img");
        let imageO = document.createElement("img");
        imageX.src = "./X.png";
        imageO.src = "./O.png";
        for(let i = 0; i < 9; i++)
        {
            let button = getElementById("" + i);
            if(i == 0)
            {
                button.addEventListener('click', function()
                {
                    if(this.isPlayer1)
                    {
                        button.backgroundImage = "url(" + player1.img_src + ")";

                        if(document.getElementById("2").backgroundImage == "url(" + player1.img_src + ")" &&
                           document.getElementById("1").backgroundImage == "url(" + player1.img_src + ")")
                           {
                               console.log("Game is over!!!");
                           }
                        
                        else if(document.getElementById("3").backgroundImage == "url" + player1.img_src + ")" &&
                                document.getElementById("6").backgroundImage == "url" + player1.img_src + ")")
                                {
                                    console.log("Game is over!!!");
                                }
                        else if(document.getElementById("4").backGroundImage == "url" + player1.img_src + ")" &&
                                document.getElementById("8").backGroundImage == "url" + player1.img_src + ")")
                                {
                                    console.log("Game is over!!!");
                                }
                    }
                    else
                    {
                        button.backgroundImage = "url(" + player2.img_src + ")";

                        if(document.getElementById("" + (i + 1)).backgroundImage == "url(" + player2.img_src + ")" &&
                           document.getElementById("" + (i + 2)).backgroundImage == "url(" + player2.img_src + ")")
                           {
                               console.log("Game is over!!!");
                           }
                           //please finish this...
                    }
                    
                    
                });
            }
        }
    }
};

function Player(num, img_src)
{
    return {num, img_src};
}

var player1 = Player(1, "./X.png");
var player2 = Player(2, "./O.png");