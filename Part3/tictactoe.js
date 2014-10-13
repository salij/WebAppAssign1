var cellData = [0,0,0,0,0,0,0,0,0];
var cellXO = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var cellLoc;
var moveCount = 0;
var s = "cell";
var cell;
var gameOver;

function reset(){
	var message = document.getElementById("msg");
	message.innerHTML = 'Player 1, click square to start';
	moveCount = 0;
	gameOver = false;
	cellData = [0,0,0,0,0,0,0,0,0];
	cellXO = [-1,-1,-1,-1,-1,-1,-1,-1,-1];

	for(i=1;i<10;i++){
		var celli = "cell"+i;
		cell = document.getElementById(celli);
		cell.innerHTML = "";
	}
}
function play(i){
	changeMsg(moveCount);

	var n = i.toString();
	cellLoc = s.concat(n);

	if(((moveCount%2) == 0) && (cellData[i-1] != '1') && (!gameOver)){	//put an X for even (Player 1)
		cell = document.getElementById(cellLoc);
		cell.innerHTML = 'X';
		cellData[i-1] = '1';
		cellXO[i-1] = 'X';
		moveCount++;
	}else if((cellData[i-1] != '1') && (!gameOver)){	//put an O for odd (Player 2)
		cell = document.getElementById(cellLoc);
		cell.innerHTML = 'O';
		cellData[i-1] = '1';
		cellXO[i-1] = 'O';
		moveCount++;
	}
	if(moveCount >= 5){
		if((cellData[0]=='1'&&cellData[1]=='1'&&cellData[2]=='1')
			||(cellData[3]=='1'&&cellData[4]=='1'&&cellData[5]=='1')
			||(cellData[6]=='1'&&cellData[7]=='1'&&cellData[8]=='1')
			||(cellData[0]=='1'&&cellData[4]=='1'&&cellData[8]=='1')
			||(cellData[2]=='1'&&cellData[4]=='1'&&cellData[6]=='1')
			||(cellData[0]=='1'&&cellData[3]=='1'&&cellData[6]=='1')
			||(cellData[1]=='1'&&cellData[4]=='1'&&cellData[7]=='1')
			||(cellData[2]=='1'&&cellData[5]=='1'&&cellData[8]=='1')){

			if((cellXO[0]=='X'&&cellXO[1]=='X'&&cellXO[2]=='X')
				||(cellXO[3]=='X'&&cellXO[4]=='X'&&cellXO[5]=='X')
				||(cellXO[6]=='X'&&cellXO[7]=='X'&&cellXO[8]=='X')
				||(cellXO[0]=='X'&&cellXO[4]=='X'&&cellXO[8]=='X')
				||(cellXO[2]=='X'&&cellXO[4]=='X'&&cellXO[6]=='X')
				||(cellXO[0]=='X'&&cellXO[3]=='X'&&cellXO[6]=='X')
				||(cellXO[1]=='X'&&cellXO[4]=='X'&&cellXO[7]=='X')
				||(cellXO[2]=='X'&&cellXO[5]=='X'&&cellXO[8]=='X')){

				gameOver = true;
				var message = document.getElementById("msg");
				message.innerHTML = 'Congratulations Player 1!!';

			} else if((cellXO[0]=='O'&&cellXO[1]=='O'&&cellXO[2]=='O')
				||(cellXO[3]=='O'&&cellXO[4]=='O'&&cellXO[5]=='O')
				||(cellXO[6]=='O'&&cellXO[7]=='O'&&cellXO[8]=='O')
				||(cellXO[0]=='O'&&cellXO[4]=='O'&&cellXO[8]=='O')
				||(cellXO[2]=='O'&&cellXO[4]=='O'&&cellXO[6]=='O')
				||(cellXO[0]=='O'&&cellXO[3]=='O'&&cellXO[6]=='O')
				||(cellXO[1]=='O'&&cellXO[4]=='O'&&cellXO[7]=='O')
				||(cellXO[2]=='O'&&cellXO[5]=='O'&&cellXO[8]=='O')){

				gameOver = true;
				var message = document.getElementById("msg");
				message.innerHTML = 'Congratulations Player 2!!';
			}
		}
	}
}


function changeMsg(c){
	moveCount = c;
	var message = document.getElementById("msg");

	if((moveCount%2) == 0){
		message.innerHTML = 'Player 2\'s turn';
	}else if((moveCount%2) != 0){
		message.innerHTML = 'Player 1\'s turn';
	}
}