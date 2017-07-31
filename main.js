
		// Dealer Object1									Constructors 
function Dealer(cardValue){
	this.cardValue = cardValue,
	this.players = [],
	this.deck = [],
	this.dealerHand = [];
}
		//Player constructor

function Player(nickname, cardImage, money, cardValue){
	this.nickname = nickname,
	this.cardImage = cardImage,
	this.money = money,
	this.cardValue = cardValue,
	this.playerHand = [];
	
}

function Cards(value, image) {
	this.value = value,
	this.image = image;
}

		//connect it
Dealer.prototype = Object.create(Player.prototype);

Player.prototype = Object.create(Cards.prototype);
		


		// deal 											GamePlay
Dealer.prototype.deal = function() {
	var deckLength = this.deck.length - 1;
	var numberOfPlayers = this.players.length - 1;
	
		//dealers deal
	for (var i = 0; i <= 1; i++) {
		var randomCardNumber = Math.floor(Math.random() * deckLength);
		deckLength--;
		//random card
		var card = this.deck[randomCardNumber];
		var num = card.value;
		//set value to player hand
		this.cardValue = this.cardValue + num;
		this.dealerHand.push(card); 
		// pop card up in doc
		document.getElementById('dealer-card-one').src = card.image;
		document.getElementById('dealer-card-one').style.display = 'inherit'
		document.getElementById('dealer-card-two').style.display = 'inherit'
		this.deck.splice(randomCardNumber, 1);
	}
		//players deal
	for (var i = 0; i <= numberOfPlayers; i++) {
			var currentPlayer = this.players[i];
		// makes random number based on current length of deck
			var randomCardNumber = Math.floor(Math.random() * deckLength);
			deckLength--;
			var card = this.deck[randomCardNumber];
			var num = card.value;
			//gives value to players hand
			currentPlayer.cardValue = currentPlayer.cardValue + num;
			//adds card to player hand array
			currentPlayer.playerHand.push(card);
			// places card in correct spot
			
			var currentSpot = currentPlayer.cardImage + 'one'
			document.getElementById(currentSpot).src = card.image;
			document.getElementById(currentSpot).style.display = 'inherit'
			this.deck.splice(randomCardNumber, 1);
			// does it a second time
			var currentPlayer = this.players[i];
			// makes random number based on current length of deck
			var randomCardNumber = Math.floor(Math.random() * deckLength);
			deckLength--;
			var card = this.deck[randomCardNumber];
			var num = card.value;
			//gives value to players hand
			currentPlayer.cardValue = currentPlayer.cardValue + num;
			//adds card to player hand array
			currentPlayer.playerHand.push(card);
			// places card in correct spot
			var currentSpot = currentPlayer.cardImage + 'two'
			document.getElementById(currentSpot).src = card.image;
			document.getElementById(currentSpot).style.display = 'inherit'
			this.deck.splice(randomCardNumber, 1);
	}
}














		// resets the deck to all 52 cards

Dealer.prototype.addCards = function() {
	this.deck = [];
	this.deck.push(twoOfClubs);
	this.deck.push(twoOfSpades);
	this.deck.push(twoOfHearts);
	this.deck.push(twoOfDiamonds);

	this.deck.push(threeOfClubs);
	this.deck.push(threeOfSpades);
	this.deck.push(threeOfHearts);
	this.deck.push(threeOfDiamonds);

	this.deck.push(fourOfClubs);
	this.deck.push(fourOfSpades);
	this.deck.push(fourOfHearts);
	this.deck.push(fourOfDiamonds);

	this.deck.push(fiveOfClubs);
	this.deck.push(fiveOfSpades);
	this.deck.push(fiveOfHearts);
	this.deck.push(fiveOfDiamonds);
	
	this.deck.push(sixOfClubs);
	this.deck.push(sixOfSpades);
	this.deck.push(sixOfHearts);
	this.deck.push(sixOfDiamonds);

	this.deck.push(sevenOfClubs);
	this.deck.push(sevenOfSpades);
	this.deck.push(sevenOfHearts);
	this.deck.push(sevenOfDiamonds);

	this.deck.push(eightOfClubs);
	this.deck.push(eightOfSpades);
	this.deck.push(eightOfHearts);
	this.deck.push(eightOfDiamonds);

	this.deck.push(nineOfClubs);
	this.deck.push(nineOfSpades);
	this.deck.push(nineOfHearts);
	this.deck.push(nineOfDiamonds);
	
	this.deck.push(tenOfClubs);
	this.deck.push(tenOfSpades);
	this.deck.push(tenOfHearts);
	this.deck.push(tenOfDiamonds);

	this.deck.push(jackOfClubs);
	this.deck.push(jackOfSpades);
	this.deck.push(jackOfHearts);
	this.deck.push(jackOfDiamonds);

	this.deck.push(queenOfClubs);
	this.deck.push(queenOfSpades);
	this.deck.push(queenOfHearts);
	this.deck.push(queenOfDiamonds);

	this.deck.push(kingOfClubs);
	this.deck.push(kingOfSpades);
	this.deck.push(kingOfHearts);
	this.deck.push(kingOfDiamonds);

	this.deck.push(aceOfClubs);
	this.deck.push(aceOfSpades);
	this.deck.push(aceOfHearts);
	this.deck.push(aceOfDiamonds);
	}



		// resets cards in the array 



		// card instances
							//2



















				//card instances			

					// card instances
var twoOfClubs = new Cards(2, 'images/2_of_clubs.png');
var twoOfSpades = new Cards(2, 'images/2_of_spades.png');
var twoOfHearts = new Cards(2, 'images/2_of_hearts.png');
var twoOfDiamonds = new Cards(2, 'images/2_of_diamonds.png');
							//3
var threeOfClubs = new Cards(3, 'images/3_of_clubs.png');
var threeOfSpades = new Cards(3, 'images/3_of_spades.png');
var threeOfHearts = new Cards(3, 'images/3_of_hearts.png');
var threeOfDiamonds = new Cards(3, 'images/3_of_diamonds.png');
							//4
var fourOfClubs = new Cards(4, 'images/4_of_clubs.png');
var fourOfSpades = new Cards(4, 'images/4_of_spades.png');
var fourOfHearts = new Cards(4, 'images/4_of_hearts.png');
var fourOfDiamonds = new Cards(4, 'images/4_of_diamonds.png');
							//5
var fiveOfClubs = new Cards(5, 'images/5_of_clubs.png');
var fiveOfSpades = new Cards(5, 'images/5_of_spades.png');
var fiveOfHearts = new Cards(5, 'images/5_of_hearts.png');
var fiveOfDiamonds = new Cards(5, 'images/5_of_diamonds.png');
							//6
var sixOfClubs = new Cards(6, 'images/6_of_clubs.png');
var sixOfSpades = new Cards(6, 'images/6_of_spades.png');
var sixOfHearts = new Cards(6, 'images/6_of_hearts.png');
var sixOfDiamonds = new Cards(6, 'images/6_of_diamonds.png');
							//7
var sevenOfClubs = new Cards(7, 'images/7_of_clubs.png');
var sevenOfSpades = new Cards(7, 'images/7_of_spades.png');
var sevenOfHearts = new Cards(7, 'images/7_of_hearts.png');
var sevenOfDiamonds = new Cards(7, 'images/7_of_diamonds.png');
							//8
var eightOfClubs = new Cards(8, 'images/8_of_clubs.png');
var eightOfSpades = new Cards(8, 'images/8_of_spades.png');
var eightOfHearts = new Cards(8, 'images/8_of_hearts.png');
var eightOfDiamonds = new Cards(8, 'images/8_of_diamonds.png');
							//9
var nineOfClubs = new Cards(9, 'images/9_of_clubs.png');
var nineOfSpades = new Cards(9, 'images/9_of_spades.png');
var nineOfHearts = new Cards(9, 'images/9_of_hearts.png');
var nineOfDiamonds = new Cards(9, 'images/9_of_diamonds.png');
							//10
var tenOfClubs = new Cards(10, 'images/10_of_clubs.png');
var tenOfSpades = new Cards(10, 'images/10_of_spades.png');
var tenOfHearts = new Cards(10, 'images/10_of_hearts.png');
var tenOfDiamonds = new Cards(10, 'images/10_of_diamonds.png');
							//jacks
var jackOfClubs = new Cards(10, 'images/jack_of_clubs2.png');
var jackOfSpades = new Cards(10, 'images/jack_of_spades2.png');
var jackOfHearts = new Cards(10, 'images/jack_of_hearts2.png');
var jackOfDiamonds = new Cards(10, 'images/jack_of_diamonds2.png');
							//queens
var queenOfClubs = new Cards(10, 'images/queen_of_clubs2.png');
var queenOfSpades = new Cards(10, 'images/queen_of_spades2.png');
var queenOfHearts = new Cards(10, 'images/queen_of_hearts2.png');
var queenOfDiamonds = new Cards(10, 'images/queen_of_diamonds2.png');
							//kings
var kingOfClubs = new Cards(10, 'images/king_of_clubs2.png');
var kingOfSpades = new Cards(10, 'images/king_of_spades2.png');
var kingOfHearts = new Cards(10, 'images/king_of_hearts2.png');
var kingOfDiamonds = new Cards(10, 'images/king_of_diamonds2.png');
							//aces
var aceOfClubs = new Cards(11, 'images/ace_of_clubs.png');
var aceOfSpades = new Cards(11, 'images/ace_of_spades2.png');
var aceOfHearts = new Cards(11, 'images/ace_of_hearts.png');
var aceOfDiamonds = new Cards(11, 'images/ace_of_diamonds.png');
							
							//Dealer Instance
var dealer = new Dealer(0);


						// player instances

					//adds player too table
Dealer.prototype.addPlayer = function(player) {
	this.players.push(player);
}
								//me
var playerOne = new Player('Dan', 'playerOne-card-', 50, 0);
						//Player 2 - 5 on click instances


var playerTwo;
var playerThree;
var playerFour;
var playerFive;

document.getElementById('player-two').addEventListener('click', function(){
	playerTwo = new Player('Player Two', 'playerTwo-card-', 50, 0)
	document.getElementById('player-two').style.display = 'none';
	dealer.addPlayer(playerTwo)
})
document.getElementById('player-three').addEventListener('click', function(){
	playerThree = new Player('Player Three', 'playerThree-card-', 50, 0)
	document.getElementById('player-three').style.display = 'none';
	dealer.addPlayer(playerThree)
})
document.getElementById('player-four').addEventListener('click', function(){
	playerFour = new Player('Player Four', 'playerFour-card-', 50, 0)
	document.getElementById('player-four').style.display = 'none';
	dealer.addPlayer(playerFour)
})
document.getElementById('player-five').addEventListener('click', function(){
	playerFive = new Player('Player Five', 'playerFive-card-', 50, 0)
	document.getElementById('player-five').style.display = 'none';
	dealer.addPlayer(playerFive)
})


$('document').ready(function(){
	dealer.addCards()
	dealer.addPlayer(playerOne)
})




