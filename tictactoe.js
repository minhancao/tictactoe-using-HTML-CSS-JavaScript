var playerState = 1;

var playerOne = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var playerTwo = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var playerOneWin = 0;
var playerTwoWin = 0;

var boxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];

document.getElementById("box1").addEventListener("click", picLink);
document.getElementById("box2").addEventListener("click", picLink);
document.getElementById("box3").addEventListener("click", picLink);
document.getElementById("box4").addEventListener("click", picLink);
document.getElementById("box5").addEventListener("click", picLink);
document.getElementById("box6").addEventListener("click", picLink);
document.getElementById("box7").addEventListener("click", picLink);
document.getElementById("box8").addEventListener("click", picLink);
document.getElementById("box9").addEventListener("click", picLink);

document.getElementById("reset").addEventListener("click", reset);


function picLink()
{
	if(playerOneWin == 1 || playerTwoWin == 1)
	{
		alert("Game is over! Please reset the game to play again.");
	}

	else
	{
		var getBoxPos = 0;
		var tie = 1;
		for(i = 0;i < boxes.length;i++)
		{
			if(boxes[i] == this.id)
			{
				getBoxPos = i;
			}

			if(playerOne[i] == 0 && playerTwo[i] == 0)
			{
				tie = 0;
			}
		}

		if(tie == 1)
		{
			alert("Game is tied! Please reset the game to play another.");
		}

		else
		{
			if(playerOne[getBoxPos] == 1 || playerTwo[getBoxPos] == 1)
			{
				alert("Sorry! A player already marked this spot!")
			}

			else 
			{	
				if(playerState == 1)
				{
					var picId = this.attributes["x"].value;
					var pic = document.getElementById(picId);
					if(pic.className == "hide")
					{
						pic.className = ""; 
					}
					playerState = 2;
					playerOne[getBoxPos] = 1;
					checkPlayerOne();
				}
				
				else
				{
					var picId = this.attributes["o"].value;
					var pic = document.getElementById(picId);
					if(pic.className == "hide")
					{
						pic.className = ""; 
					}
					playerState = 1;
					playerTwo[getBoxPos] = 1;
					checkPlayerTwo();
				}
			}
		}
	}
}

function checkPlayerOne()
{
	for(var i = 0; i < 9; i+=3)
	{
		if(playerOne[i] == 1 && playerOne[i+1] == 1 && playerOne[i+2] == 1)
		{
			playerOneWin = 1;
		}
	}

	for(var j = 0; j < 3; j++)
	{
		if(playerOne[j] == 1 && playerOne[j+3] == 1 && playerOne[j+6] == 1)
		{
			playerOneWin = 1;
		}
	}

	if(playerOne[0] == 1 && playerOne[4] == 1 && playerOne[8] == 1)
	{
		playerOneWin = 1;
	}

	if(playerOne[2] == 1 && playerOne[4] == 1 && playerOne[6] == 1)
	{
		playerOneWin = 1;
	}

	if(playerOneWin == 1)
	{
		var pic = document.getElementById("playerOneWin");
		pic.className = "";
	}
}	

function checkPlayerTwo()
{
	for(var k = 0; k < 9; k+=3)
	{
		if(playerTwo[k] == 1 && playerTwo[k+1] == 1 && playerTwo[k+2] == 1)
		{
			playerTwoWin = 1;
		}
	}

	for(var l = 0; l < 3; l++)
	{
		if(playerTwo[l] == 1 && playerTwo[l+3] == 1 && playerTwo[l+6] == 1)
		{
			playerTwoWin = 1;
		}
	}

	if(playerTwo[0] == 1 && playerTwo[4] == 1 && playerTwo[8] == 1)
	{
		playerTwoWin = 1;
	}

	if(playerTwo[2] == 1 && playerTwo[4] == 1 && playerTwo[6] == 1)
	{
		playerTwoWin = 1;
	}

	if(playerTwoWin == 1)
	{
		var pic2 = document.getElementById("playerTwoWin");
		pic2.className = "";
	}
}

function reset()
{
	for(i = 0; i < boxes.length; i++)
	{
		var picId = document.getElementById(boxes[i]).attributes["x"].value;
		var pic = document.getElementById(picId).className = "hide";
		picId = document.getElementById(boxes[i]).attributes["o"].value;
		pic = document.getElementById(picId).className = "hide";
		playerOne[i] = 0;
		playerTwo[i] = 0;
	}
	playerState = 1;
	playerOneWin = 0;
	playerTwoWin = 0;
	document.getElementById("playerOneWin").className = "hide";
	document.getElementById("playerTwoWin").className = "hide";
}
