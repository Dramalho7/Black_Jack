
		// Dealer Object
function Dealer(cardValue){
	this.cardValue = cardValue,
	this.players = [];
}


		//Player constructor

function Player(nickname, isPlaying, money, cardValue){
	this.nickname = nickname,
	this.isPlaying = isPlaying,
	this.money = money,
	this.cardValue = cardValue;
	
}

function Cards(value, image) {
	this.value = value
	this.image = image;
}

		//connect it
Dealer.prototype = Object.create(Player.prototype);

Player.prototype =  Object.create(Cards.prototype);
		
		//adds player too table
Dealer.prototype.add = function(player) {
	this.players.push(player);
}





		// card instances
							//2
var twoOfClubs = new Cards(2, 'images/2_of_clubs.png');
var twoOfSpades = new Cards(2, 'images/2_of_spades.png');
var twoOfHearts = new Cards(2, 'images/2_of_hearts.png');
var twoOfDiamonds = new Cards(2, 'images/2_of_diamonds.png');
							//3
var threeOfDiamonds = new Cards(3, 'images/3_of_diamonds.png');
var threeOfSpades = new Cards(3, 'images/3_of_spades.png');
var threeOfHearts = new Cards(3, 'images/3_of_hearts.png');
var threeOfDiamonds = new Cards(3, 'images/3_of_diamonds.png');
							//4
var fourOfDiamonds = new Cards(4, 'images/4_of_diamonds.png');
var fourOfSpades = new Cards(4, 'images/4_of_spades.png');
var fourOfHearts = new Cards(4, 'images/4_of_hearts.png');
var fourOfDiamonds = new Cards(4, 'images/4_of_diamonds.png');
							//5
var fiveOfDiamonds = new Cards(5, 'images/5_of_diamonds.png');
var fiveOfSpades = new Cards(5, 'images/5_of_spades.png');
var fiveOfHearts = new Cards(5, 'images/5_of_hearts.png');
var fiveOfDiamonds = new Cards(5, 'images/5_of_diamonds.png');
							//6
var sixOfDiamonds = new Cards(6, 'images/6_of_diamonds.png');
var sixOfSpades = new Cards(6, 'images/6_of_spades.png');
var sixOfHearts = new Cards(6, 'images/6_of_hearts.png');
var sixOfDiamonds = new Cards(6, 'images/6_of_diamonds.png');
							//7
var sevenOfDiamonds = new Cards(7, 'images/7_of_diamonds.png');
var sevenOfSpades = new Cards(7, 'images/7_of_spades.png');
var sevenOfHearts = new Cards(7, 'images/7_of_hearts.png');
var sevenOfDiamonds = new Cards(7, 'images/7_of_diamonds.png');
							//8
var eightOfDiamonds = new Cards(8, 'images/8_of_diamonds.png');
var eightOfSpades = new Cards(8, 'images/8_of_spades.png');
var eightOfHearts = new Cards(8, 'images/8_of_hearts.png');
var eightOfDiamonds = new Cards(8, 'images/8_of_diamonds.png');
							//9
var nineOfDiamonds = new Cards(9, 'images/9_of_diamonds.png');
var nineOfSpades = new Cards(9, 'images/9_of_spades.png');
var nineOfHearts = new Cards(9, 'images/9_of_hearts.png');
var nineOfDiamonds = new Cards(9, 'images/9_of_diamonds.png');
							//10
var tenOfDiamonds = new Cards(10, 'images/10_of_diamonds.png');
var tenOfSpades = new Cards(10, 'images/10_of_spades.png');
var tenOfHearts = new Cards(10, 'images/10_of_hearts.png');
var tenOfDiamonds = new Cards(10, 'images/10_of_diamonds.png');
							//jacks
var jackOfDiamonds = new Cards(10, 'images/jack_of_diamonds2.png');
var jackOfSpades = new Cards(10, 'images/jack_of_spades2.png');
var jackOfHearts = new Cards(10, 'images/jack_of_hearts2.png');
var jackOfDiamonds = new Cards(10, 'images/jack_of_diamonds2.png');
							//queens
var queenOfDiamonds = new Cards(10, 'images/queen_of_diamonds2.png');
var queenOfSpades = new Cards(10, 'images/queen_of_spades2.png');
var queenOfHearts = new Cards(10, 'images/queen_of_hearts2.png');
var queenOfDiamonds = new Cards(10, 'images/queen_of_diamonds2.png');
							//kings
var kingOfDiamonds = new Cards(10, 'images/king_of_diamonds2.png');
var kingOfSpades = new Cards(10, 'images/king_of_spades2.png');
var kingOfHearts = new Cards(10, 'images/king_of_hearts2.png');
var kingOfDiamonds = new Cards(10, 'images/king_of_diamonds2.png');
							//aces
var OfDiamonds = new Cards(11, 'images/ace_of_diamonds.png');
var queenOfSpades = new Cards(11, 'images/ace_of_spades2.png');
var queenOfHearts = new Cards(11, 'images/ace_of_hearts.png');
var queenOfDiamonds = new Cards(11, 'images/ace_of_diamonds.png');
							
							//Dealer Instance
var dealer = new Dealer(0);


						// player instances
								//me
var playerOne = new Player('Dan', true, 50, 0);
						//Player 2 - 5 on click instances
var playerTwo;
var playerThree;
var playerFour
var playerFive

document.getElementById('player-two').addEventListener('click', function(){
	playerTwo = new Player('Player Two', true, 50, 0)
	document.getElementById('player-two').style.display = 'none';
})
document.getElementById('player-three').addEventListener('click', function(){
	playerThree = new Player('Player Three', true, 50, 0)
	document.getElementById('player-three').style.display = 'none';
})
document.getElementById('player-four').addEventListener('click', function(){
	playerFour = new Player('Player Four', true, 50, 0)
	document.getElementById('player-four').style.display = 'none';
})
document.getElementById('player-five').addEventListener('click', function(){
	playerFive = new Player('Player Five', true, 50, 0)
	document.getElementById('player-five').style.display = 'none';
})








