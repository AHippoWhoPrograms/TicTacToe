var Module = (() => {

    let isPlayer1 = true;

    function helper(button, adjacent)
    {
        for(var i = 0; i < adjacent.length; i+=2)
        {
            console.log(document.getElementById(adjacent[i]).style.backgroundImage);
            console.log(document.getElementById(adjacent[i + 1]).style.backgroundImage);
            console.log(button.style.backgroundImage);
            if(document.getElementById(adjacent[i]).style.backgroundImage == button.style.backgroundImage &&
            document.getElementById(adjacent[i+1]).style.backgroundImage == button.style.backgroundImage)
            {
                endGame();
                    
            }
        }
    }

    function endGame()
    {
        var win_text = document.getElementById("GameIsWon");
        if(isPlayer1) win_text.textContent = "Player 1 wins!"
        else win_text.textContent = "Player 2 wins!";
        var dummy_event = new Event('click');
        console.log(dummy_event);

        var windowEventHandler = function()
        {
            for(var i = 0; i < 9; i++)
            {
                var button = document.getElementById("" + i);
                button.onclick = null;
            }
        }
        window.addEventListener('click', windowEventHandler);
        window.dispatchEvent(dummy_event);
    }

    let renderButtons = function(player1, player2)
    {
        for(let i = 0; i < 9; i++)
        {
            let button = document.getElementById("" + i);
            let adjacentButtonIDs = [];
            if(i == 0) adjacentButtonIDs = ["1", "2", "3", "6", "4", "8"];
            else if(i == 1) adjacentButtonIDs = ["0", "2", "4", "7"];
            else if(i == 2) adjacentButtonIDs = ["0","1","4","6","5","8"];
            else if(i == 3) adjacentButtonIDs = ["0", "6", "4", "5"]
            else if(i == 4) adjacentButtonIDs = ["3", "5", "0", "8", "2", "6", "1", "7"];
            else if(i == 5) adjacentButtonIDs = ["4", "3", "8", "2"];
            else if(i == 6) adjacentButtonIDs = ["3", "0", "7", "8", "4", "2"];
            else if(i == 7) adjacentButtonIDs = ["6", "8", "4", "1"];
            else if(i == 8) adjacentButtonIDs = ["7", "6", "4", "0", "5", "2"];


            function handler(e, adjacentButtonIDs)
            {
                let button = e.srcElement;
                if(isPlayer1) button.style.backgroundImage = "url(" + player1.img_src + ")";
                else button.style.backgroundImage = "url(" + player2.img_src + ")";

                helper(button, adjacentButtonIDs);

                if(isPlayer1) isPlayer1 = false;
                else isPlayer1 = true;
            }

            function handlerDispatcher(e) {handler(e, adjacentButtonIDs);}

            button.addEventListener('click', handlerDispatcher);


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