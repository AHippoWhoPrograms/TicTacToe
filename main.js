var Module = ((player1, player2) => {

    let isPlayer1 = true;
    let gameIsOver = false;
    let isRandomComputer = false; //change maybe
    let isImpossibleBot = true;

    function helper(button, i, isMinimaxing)
    {
        let adjacent = [];
        let tds = document.querySelectorAll("td");
        let tie = true;

        if(i == 0) adjacent = ["1", "2", "3", "6", "4", "8"];
        else if(i == 1) adjacent = ["0", "2", "4", "7"];
        else if(i == 2) adjacent = ["0","1","4","6","5","8"];
        else if(i == 3) adjacent = ["0", "6", "4", "5"];
        else if(i == 4) adjacent = ["3", "5", "0", "8", "2", "6", "1", "7"];
        else if(i == 5) adjacent = ["4", "3", "8", "2"];
        else if(i == 6) adjacent = ["3", "0", "7", "8", "4", "2"];
        else if(i == 7) adjacent = ["6", "8", "4", "1"];
        else if(i == 8) adjacent = ["7", "6", "4", "0", "5", "2"];

        for(var i = 0; i < adjacent.length; i+=2)
        {
            if(document.getElementById(adjacent[i]).style.backgroundImage == button.style.backgroundImage &&
            document.getElementById(adjacent[i+1]).style.backgroundImage == button.style.backgroundImage)
            {
                if(!isMinimaxing)
                {
                    endGame(false);
                    return;
                }
                else
                {
                    return true;
                }
            }
        }
        
        tds.forEach(element => {
           if(element.style.backgroundImage === "") tie = false; 
        });
        if(!gameIsOver && tie && !isMinimaxing) endGame(true);
        return false;
    }

    function endGame(tie)
    {
        var win_text = document.getElementById("GameIsWon");
        if(tie) win_text.textContent = "Tie!";
        else if(isPlayer1 && !gameIsOver) win_text.textContent = "Player 1 wins!"
        else if(!gameIsOver) win_text.textContent = "Player 2 wins!";
        gameIsOver = true;
    }
    

    function handler(e)
    {
        let button = e.srcElement;
        if(button.style.backgroundImage === "")
        {
            if(isPlayer1 && !gameIsOver && button.style.backgroundImage === "") button.style.backgroundImage = "url(" + player1.img_src + ")";
            else if(!gameIsOver && button.style.backgroundImage === "") button.style.backgroundImage = "url(" + player2.img_src + ")";

            helper(button, parseInt(button.id), false);

            if(isPlayer1)
            {
                isPlayer1 = false;
                if(isRandomComputer || isImpossibleBot) computerPlay();
            }
            else isPlayer1 = true;
        }
    }



    let renderButtons = function()
    {
        for(let i = 0; i < 9; i++)
        {
            let button = document.getElementById("" + i);
            
            button.addEventListener('click', handler);
        }
    }




    let renderReset = function()
    {
        let resetButton = document.getElementById("reset");

        let reset = function(e)
        {
            document.getElementById("GameIsWon").textContent = "";
            gameIsOver = false;

            var tds = document.querySelectorAll("td");

            for(let i = 0; i < tds.length; i++)
            {
                if(tds[i].style.backgroundImage !== null) tds[i].style.backgroundImage = null;
            }
        }
        resetButton.addEventListener('click', reset);
    }


    function minimax(buttons, depth, i, isMaximizing)
    {
        let score;
        if(helper(buttons[i], i, true) && !isMaximizing) {score = -1; return score;}
        else if(helper(buttons[i], i, true) && isMaximizing) {score = 1; return score;}

        if(isMaximizing)
        {
            let bestScore = -Infinity;
            for(let buttons_i = 0; buttons_i < buttons.length; buttons_i++)
            {
                   if(buttons[buttons_i].style.backgroundImage == "")
                   {
                        buttons[buttons_i].style.backgroundImage = "url(" + player2.img_src + ")";
                        score = minimax(buttons, depth + 1, buttons_i, false);
                        buttons[buttons_i].style.backgroundImage = "";
                        if(score > bestScore)
                        {
                            bestScore = score;
                        }
                    }
            }
            return bestScore;
        }
        else
        {
            let bestScore = Infinity;
            for(let buttons_i = 0; buttons_i < buttons.length; buttons_i++)
            {
                   if(buttons[buttons_i].style.backgroundImage == "")
                   {
                        buttons[buttons_i].style.backgroundImage = "url(" + player1.img_src + ")";
                        score = minimax(buttons, depth + 1, buttons_i, true);
                        buttons[buttons_i].style.backgroundImage = "";
                        if(score < bestScore)
                        {
                            bestScore = score;
                        }
                    }
            }
            return bestScore;
        }
    }

    function computerPlay()
    {
        if(isImpossibleBot)
        {
            let bestScore = -Infinity;
            let buttons = document.querySelectorAll("td");
            let bestButton;

            for(let i=0; i < buttons.length; i++)
            {
                if(buttons[i].style.backgroundImage == '')
                {
                    buttons[i].style.backgroundImage = "url(" + player2.img_src + ")";
                    let score = minimax(buttons, 0, i, true);
                    buttons[i].style.backgroundImage = "";
                    if(score > bestScore)
                    {
                        bestScore = score;
                        bestButton = buttons[i];
                    }
                }
            }
            console.log("stop");
            bestButton.style.backgroundImage = "url(" + player2.img_src + ")";
            helper(bestButton, bestButton.id, false);
        }
        else
        {
            let tds = document.querySelectorAll("td");
            let rand = getRandomInt(9);

            if(!gameIsOver)
            {
                while(tds[rand].style.backgroundImage !== "") rand = getRandomInt(9);
                tds[rand].style.backgroundImage = "url(" + player2.img_src + ")";
                helper(tds[rand], tds[rand].id);
            
            }
        }

        isPlayer1 = true;

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
    }
    return {renderButtons, renderReset};

    
});


function Player(num, img_src)
{
    return {num, img_src};
}

var player1 = Player(1, "./X.png");
var player2 = Player(2, "./O.png");
var func = Module(player1, player2);
func.renderButtons();
func.renderReset();