var Module = (() => {

    let isPlayer1 = true;

    let renderButtons = function(player1, player2)
    {
        for(let i = 0; i < 9; i++)
        {
            let button = document.getElementById("" + i);
            if(i == 0)
            {
                button.addEventListener('click', function(e)
                {
                    let button = e.srcElement;
                   
                    if(isPlayer1) button.style.backgroundImage = "url(" + player1.img_src + ")";
                    else button.style.backgroundImage = "url(" + player2.img_src + ")"; 

                    if(document.getElementById("1").style.backgroundImage == button.style.backgroundImage &&
                       document.getElementById("2").style.backgroundImage == button.style.backgroundImage)
                       {
                           console.log("Game is over!!!");
                       }
                    
                    else if(document.getElementById("4").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("8").style.backgroundImage == button.style.backgroundImage)
                    {
                        console.log("Game is over!!!");
                    }
                
                    if(document.getElementById("3").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("6").style.backgroundImage == button.style.backgroundImage)
                    {
                        console.log("Game is over!!!");
                    }

                    if(isPlayer1) isPlayer1 = false;
                    else isPlayer1 = true;
                });
            }

            else if(i == 1)
            {
                button.addEventListener('click', function(e){
                    let button = e.srcElement;
                   
                    if(isPlayer1) button.style.backgroundImage = "url(" + player1.img_src + ")";
                    else button.style.backgroundImage = "url(" + player2.img_src + ")"; 

                    if(document.getElementById("0").style.backgroundImage == button.style.backgroundImage &&
                       document.getElementById("3").style.backgroundImage == button.style.backgroundImage)
                       {
                           console.log("Game is over!!!");
                       }
                    
                    else if(document.getElementById("4").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("7").style.backgroundImage == button.style.backgroundImage)
                    {
                        console.log("Game is over!!!");
                    }

                    if(isPlayer1) isPlayer1 = false;
                    else isPlayer1 = true;
            });
            }
            else if(i == 2)
            {
                button.addEventListener('click', function(e)
                {
                    let button = e.srcElement;
                    if(isPlayer1) button.style.backgroundImage = "url(" + player1.img_src + ")";
                    else button.style.backgroundImage = "url(" + player2.img_src + ")";

                    if(document.getElementById("0").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("1").style.backgroundImage == button.style.backgroundImage)
                    {
                       console.log("Game is over!!!");
                    }
                    else if(document.getElementById("4").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("6").style.backgroundImage == button.style.backgroundImage)
                    {
                       console.log("Game is over!!!");
                       console.log(button.style.backgroundImage);
                    }
                    else if(document.getElementById("5").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("8").style.backgroundImage == button.style.backgroundImage)
                    {
                       console.log("Game is over!!!");
                    }

                    if(isPlayer1) isPlayer1 = false;
                    else isPlayer1 = true;
                });
            }
            else if(i == 3)
            {
                button.addEventListener('click', function(e)
                {
                    let button = e.srcElement;
                    if(this.isPlayer1) button.style.backgroundImage = "url(" + player1.img_src + ")";
                    else button.style.backgroundImage = "url(" + player2.img_src + ")";

                    if(document.getElementById("0").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("6").style.backgroundImage == button.style.backgroundImage)
                    {
                       console.log("Game is over!!!");
                    }
                    else if(document.getElementById("4").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("5").style.backgroundImage == button.style.backgroundImage)
                    {
                       console.log("Game is over!!!");
                    }

                    if(isPlayer1) isPlayer1 = false;
                    else isPlayer1 = true;
                });
            }
            else if(i == 4)
            {
                button.addEventListener('click', function(e)
                {
                    let button = e.srcElement;
                    if(isPlayer1) button.style.backgroundImage = "url(" + player1.img_src + ")";
                    else button.style.backgroundImage = "url(" + player2.img_src + ")";

                    if(document.getElementById("0").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("8").style.backgroundImage == button.style.backgroundImage)
                    {
                       console.log("Game is over!!!");
                    }
                    else if(document.getElementById("1").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("7").style.backgroundImage == button.style.backgroundImage)
                    {
                       console.log("Game is over!!!");
                    }
                    else if(document.getElementById("3").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("5").style.backgroundImage == button.style.backgroundImage)
                    {
                       console.log("Game is over!!!");
                    }
                    else if(document.getElementById("2").style.backgroundImage == button.style.backgroundImage &&
                    document.getElementById("6").style.backgroundImage == button.style.backgroundImage)
                    {
                        console.log("Game is over!!!");
                    }

                    if(isPlayer1) isPlayer1 = false;
                    else isPlayer1 = true;
                });
                }

                else if(i == 5)
                {
                    button.addEventListener('click', function(e)
                    {
                        //change this to button.style.backgroundImage.
                        let button = e.srcElement;

                        if(isPlayer1 == true) button.style.backgroundImage = "url(" + player1.img_src + ")";
                        else button.style.backgroundImage = "url(" + player2.img_src + ")";

                        if(document.getElementById("2").style.backgroundImage == button.style.backgroundImage &&
                           document.getElementById("8").style.backgroundImage == button.style.backgroundImage)
                           {
                               console.log("Game is over!!!");
                           }
                        else if(document.getElementById("4").style.backgroundImage == button.style.backgroundImage &&
                           document.getElementById("3").style.backgroundImage == button.style.backgroundImage)
                           {
                               console.log("Game is over!!!");
                           }
                        
                        if(isPlayer1) isPlayer1 = false;
                        else isPlayer1 = true;
                    });
                }

                else if(i == 6)
                {
                    button.addEventListener('click', function(e)
                    {
                        let button = e.srcElement;

                        if(isPlayer1 == true) button.style.backgroundImage = "url(" + player1.img_src + ")";
                        else button.style.backgroundImage = "url(" + player2.img_src + ")";

                        if(document.getElementById("3").style.backgroundImage == button.style.backgroundImage &&
                           document.getElementById("0").style.backgroundImage == button.style.backgroundImage)
                           {
                               console.log("Game is over!!!");
                           }
                        else if(document.getElementById("4").style.backgroundImage == button.style.backgroundImage &&
                        document.getElementById("2").style.backgroundImage == button.style.backgroundImage)
                        {
                            console.log("Game is over!!!");
                        }
                        else if(document.getElementById("7").style.backgroundImage == button.style.backgroundImage &&
                        document.getElementById("8").style.backgroundImage == button.style.backgroundImage)
                        {
                            console.log("Game is over!!!");
                        }

                        if(isPlayer1) isPlayer1 = false;
                        else isPlayer1 = true;
                    });
                }

                else if(i == 7)
                {
                    button.addEventListener('click', function(e)
                    {
                        let button = e.srcElement;

                        if(isPlayer1 == true) button.style.backgroundImage = "url(" + player1.img_src + ")";
                        else button.style.backgroundImage = "url(" + player2.img_src + ")";

                        if(document.getElementById("4").style.backgroundImage == button.style.backgroundImage &&
                           document.getElementById("1").style.backgroundImage == button.style.backgroundImage)
                           {
                               console.log("Game is over!!!");
                           }
                        else if(document.getElementById("6").style.backgroundImage == button.style.backgroundImage &&
                        document.getElementById("8").style.backgroundImage == button.style.backgroundImage)
                        {
                            console.log("Game is over!!!");
                        }

                        if(isPlayer1) isPlayer1 = false;
                        else isPlayer1 = true;
                    });
                }

                else if(i == 8)
                {
                    button.addEventListener('click', function(e)
                    {
                        let button = e.srcElement;

                        if(isPlayer1 == true) button.style.backgroundImage = "url(" + player1.img_src + ")";
                        else button.style.backgroundImage = "url(" + player2.img_src + ")";

                        if(document.getElementById("5").style.backgroundImage == button.style.backgroundImage &&
                        document.getElementById("2").style.backgroundImage == button.style.backgroundImage)
                        {
                            console.log("Game is over!!!");
                        }
                        else if(document.getElementById("4").style.backgroundImage == button.style.backgroundImage &&
                        document.getElementById("0").style.backgroundImage == button.style.backgroundImage)
                        {
                            console.log("Game is over!!!");
                        }
                        else if(document.getElementById("7").style.backgroundImage == button.style.backgroundImage &&
                        document.getElementById("6").style.backgroundImage == button.style.backgroundImage)
                        {
                            console.log("Game is over!!!");
                        }
                        if(isPlayer1) isPlayer1 = false;
                        else isPlayer1 = true;
                    });
                }
                //finish writing this code. 
                //change this.isPlayer1 to just isPlayer1 and add checks for the other cases of i to check whether isPlayer 1 is tur or false.

            }
        }
    
    return {renderButtons};
});

function Player(num, img_src)
{
    return {num, img_src};
}

var player1 = Player(1, "./X.png");
var player2 = Player(2, "./O.png");
var func = Module();
func.renderButtons(player1, player2);