
		// Dealer Object1------------------------------------------------------------------Constructors 
function Dealer(name, cardValue, currentPlayerSpot){
	this.name = name,
	this.cardValue = cardValue,
	this.currentPlayerSpot = currentPlayerSpot,
	this.players = [],
	this.deck = [],
	this.dealerHand = [];
}
		//Player constructor------------------------------------------------------------------

function Player(nickname, cardImage, money, currentBet, cardValue, target, targetTwo){
	this.nickname = nickname,
	this.cardImage = cardImage,
	this.money = 100,
	this.currentBet = 0,
	this.cardValue = cardValue,
	this.target = target,
	this.targetTwo = targetTwo,
	this.playerHand = [];
	
}
		// card constructor ------------------------------------------------------------------
function Cards(value, image, isAce) {
	this.value = value,
	this.image = image,
	this.isAce = isAce;
}

		//connect it ------------------------------------------------------------------
Dealer.prototype = Object.create(Player.prototype);

Player.prototype = Object.create(Cards.prototype);
		


		// deal ------------------------------------------------------------------GamePlay
Dealer.prototype.deal = function() {
		var deckLength = this.deck.length - 1;
		var numberOfPlayers = this.players.length - 1;
	
		//dealers deal card 1
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
		this.deck.splice(randomCardNumber, 1);
		var randomCardNumber = Math.floor(Math.random() * deckLength);
		deckLength--;
		//random card
		var card = this.deck[randomCardNumber];
		var num = card.value;
		//set value to player hand
		this.cardValue = this.cardValue + num;
		this.dealerHand.push(card); 
		// pop card up in doc
		document.getElementById('dealer-card-two').style.display = 'inherit'
		document.getElementById('dealer-card-two').src = 'images/back.png'
		this.deck.splice(randomCardNumber, 1);

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
			dealer.checkBlackJack(currentPlayer);
	}
}

	//check value of current player for black jack or going over --------------------------------
Dealer.prototype.checkValue = function(player) {
	if (player.cardValue === 21) {
		dealer.stay()
	} else if (player.cardValue > 21) {
		dealer.stay()
	} else {
		return (null)
	}
}
Dealer.prototype.checkBlackJack = function(player) {
	if (player.cardValue === 21) {
		alert(player.nickname + ' ' + 'You got Black Jack!')
		this.players[currentPlayerSpot].money = this.players[currentPlayerSpot].money + (this.players[currentPlayerSpot].currentBet / 2)
		dealer.stay()
	} else {
		return (null)
	}
}


var timesHit = ['three', 'four', 'five'];
var x = 0;
	//HIT   ------------------------------------------------------------------
Dealer.prototype.hit = function() {
	var deckLength = this.deck.length - 1;
	var currentPlayer = this.players[this.currentPlayerSpot];
		//random card
	var randomCardNumber = Math.floor(Math.random() * deckLength);
	deckLength--;
	var card = this.deck[randomCardNumber];
		//add value to player
	var num = card.value;
	
	currentPlayer.cardValue = currentPlayer.cardValue + num;
	// if the player went over because one card is an ace make the ace a one.
	dealer.ace(currentPlayer)
	//check value vs 21
	dealer.checkValue(currentPlayer);
	currentPlayer.playerHand.push(card);
	var currentSpot = currentPlayer.cardImage + timesHit[x];
	document.getElementById(currentSpot).src = card.image;
	document.getElementById(currentSpot).style.display = 'inherit'
	x++;
}

	//stay ------------------------------------------------------------------
Dealer.prototype.stay = function() {
	x = 0;
	if (this.players.length - 1 === this.currentPlayerSpot) {
		this.currentPlayerSpot = 0;
		
			dealer.dealerPlay();
	
	}else {
		this.currentPlayerSpot = this.currentPlayerSpot + 1;
		dealer.playerTurn()
	}
}
	// Dealer logic ------------------------------------------------------------------

Dealer.prototype.dealerPlay = function() {
	var deckLength = this.deck.length - 1;
	var randomCardNumber = Math.floor(Math.random() * deckLength);
	deckLength--;
	var card = this.deck[randomCardNumber];
	var num = card.value;
	var cardImage = dealer.name;
	var image = cardImage + 'two'
	var reveal = this.dealerHand[1].image;
	document.getElementById(image).src = reveal;
	document.getElementById(image).style.display = 'inherit'
	dealer.dealerAce()
	if (this.cardValue >= 16) {
		dealer.compare()
	}else {
		this.cardValue = this.cardValue + num;
		this.dealerHand.push(card); 
		var cardImage = dealer.name;
		var currentSpot = cardImage + timesHit[x]
		document.getElementById(currentSpot).src = card.image;
		document.getElementById(currentSpot).style.display = 'inherit'
		x++
		dealer.dealerPlay();
	}
	x = 0;
}

	//compare scores ------------------------------------------------------------------
Dealer.prototype.compare = function() {
	x = 0;
	var length = this.players.length
	for (i = 0; i < length; i++) {
		if(this.cardValue > 21 && this.players[i].cardValue < 21) {
			this.players[i].money = this.players[i].money + (this.players[i].currentBet * 2)
			this.players[i].currentBet = 0;
			document.getElementById(this.players[i].target).innerHTML = this.players[i].money
		} else if (this.players[i].cardValue > 21) {
			this.players[i].currentBet = 0;
			document.getElementById(this.players[i].target).innerHTML = this.players[i].money
		} else if (this.cardValue > this.players[i].cardValue) {
			this.players[i].currentBet = 0;
			document.getElementById(this.players[i].target).innerHTML = this.players[i].money
		} else if (this.cardValue === this.players[i].cardValue) {
			this.players[i].money = this.players[i].money + this.players[i].currentBet;
			document.getElementById(this.players[i].target).innerHTML = this.players[i].money
		} else { 
			this.players[i].money = this.players[i].money + (this.players[i].currentBet * 2)
			document.getElementById(this.players[i].target).innerHTML = this.players[i].money
		}	
	} x = 0;
	  currentPlayerSpot = 0;
	 $('.pUp').hide();
	$('#pOneUp').show();
	  dealer.addCards();
}
		// Ace to 1 function for players ------------------------------------------------------------------
Dealer.prototype.ace = function(player) {
	var i = player.playerHand.length;
	
	while (i--) {
		
		if (player.playerHand[i].value === 11) {
			player.playerHand[i].value = 1;
			player.cardValue = player.cardValue - 10;
		} 
	}

	return null;
}
		// Ace to 1 function for dealer ------------------------------------------------------------------
Dealer.prototype.dealerAce = function() {
	var i = this.dealerHand.length;
	
	while (i--) {
		
		if (this.dealerHand[i].value === 11) {
			this.dealerHand[i].value = 1;
			this.cardValue = this.cardValue - 10;
		} 
	}

	return null;
}


	// ------------------------------------------------------- Gambling
 	// asks players to make initial bets
 	//adds value to current bet from current money

$('#bet-btn').click(function(){
	dealer.requireBets()
})


	var minBtn = document.getElementById('min-btn')
	var oneBtn = document.getElementById('one-btn');
	var fourBtn = document.getElementById('four-btn');
	var tenBtn = document.getElementById('ten-btn');
	var twentyBtn = document.getElementById('twenty-btn');
			
			//listens for amount to bet
	minBtn.addEventListener('click', function(){
		if (dealer.players[dealer.currentPlayerSpot].money < parseInt(dealer.players[dealer.currentPlayerSpot].currentBet + 0.4)) {
				alert ('not enough chips') 
		} else {
			dealer.players[dealer.currentPlayerSpot].currentBet = parseInt(dealer.players[dealer.currentPlayerSpot].currentBet + 0.4)
		document.getElementById('current-bet').innerHTML = dealer.players[dealer.currentPlayerSpot].currentBet + '$';
		}
	});
	oneBtn.addEventListener('click', function(){
		if (dealer.players[dealer.currentPlayerSpot].money < parseInt(dealer.players[dealer.currentPlayerSpot].currentBet + 1)) {
				alert ('not enough chips') 
		} else {
			dealer.players[dealer.currentPlayerSpot].currentBet = parseInt(dealer.players[dealer.currentPlayerSpot].currentBet + 1)
		document.getElementById('current-bet').innerHTML = dealer.players[dealer.currentPlayerSpot].currentBet + '$';
		}
	});
	fourBtn.addEventListener('click', function(){
		if (dealer.players[dealer.currentPlayerSpot].money < parseInt(dealer.players[dealer.currentPlayerSpot].currentBet + 4)) {
				alert ('not enough chips') 
		} else {
			dealer.players[dealer.currentPlayerSpot].currentBet = parseInt(dealer.players[dealer.currentPlayerSpot].currentBet + 4)
		document.getElementById('current-bet').innerHTML = dealer.players[dealer.currentPlayerSpot].currentBet + '$';
		}
	});
	tenBtn.addEventListener('click', function(){
		if (dealer.players[dealer.currentPlayerSpot].money < parseInt(dealer.players[dealer.currentPlayerSpot].currentBet + 10)) {
				alert ('not enough chips') 
		} else {
			dealer.players[dealer.currentPlayerSpot].currentBet = parseInt(dealer.players[dealer.currentPlayerSpot].currentBet + 10)
		document.getElementById('current-bet').innerHTML = dealer.players[dealer.currentPlayerSpot].currentBet + '$';
		}
	});
	twentyBtn.addEventListener('click', function(){
		if (dealer.players[dealer.currentPlayerSpot].money < parseInt(dealer.players[dealer.currentPlayerSpot].currentBet + 20)) {
				alert ('not enough chips') 
		} else {
			dealer.players[dealer.currentPlayerSpot].currentBet = parseInt(dealer.players[dealer.currentPlayerSpot].currentBet + 20)
		document.getElementById('current-bet').innerHTML = dealer.players[dealer.currentPlayerSpot].currentBet + '$';
		}
	});

$('#place-bet-btn').click(function() {
	dealer.requireBets()
})

Dealer.prototype.requireBets = function(){
	var currentPlayer = this.players[this.currentPlayerSpot];
	var bet = currentPlayer.currentBet;
	currentPlayer.money = currentPlayer.money - bet
	var betBtn = document.getElementById('current-bet')
	betBtn.innerHTML = '0$'
	dealer.allBetsOff()
}



Dealer.prototype.allBetsOff = function(){
	this.currentPlayerSpot++;
	dealer.playerTurn()
	if (this.currentPlayerSpot ===  dealer.players.length){
		$('#bet-btn').hide();
		$('#deal-btn').show();
		this.currentPlayerSpot = 0;
		$('.pUp').hide();
		$('#pOneUp').show();
	} else {
		return null;
	}
}
		// resets everything but chips ------------------------------------------------------------------
Dealer.prototype.resetHands = function() {
		var length = this.players.length
	for (i = 0; i < length; i++) {
		var currentPlayer = this.players[i];
		currentPlayer.cardValue = 0;
		currentPlayer.playerHand = [];
	}
		this.deck = [];
		this.dealerHand = [];
		this.cardValue = 0;
		aceOfSpades.value = 11
		aceOfClubs.value = 11
		aceOfHearts.value = 11
		aceOfDiamonds.value = 11
		$('.cards').hide();
		$('.pUp').hide();
		$('#pOneUp').show();
		
}
	// turns on the player up------------------------------------------------------------------ other
Dealer.prototype.playerTurn = function() {
	var length = this.players.length
	if (length === 1) {
		return null;
	} else if (this.currentPlayerSpot < length){
		var previousSpot = this.players[this.currentPlayerSpot-1].targetTwo;
		var spot = this.players[this.currentPlayerSpot].targetTwo;
		var spot = '#'+spot
		var previousSpot = '#'+previousSpot
		$(previousSpot).hide()
		$(spot).show()
	} else {
		$('.pUp').hide();
		$('#pOneUp').show();
	}
}

	// adds cards
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
//card instances
	var twoOfClubs = new Cards(2, 'images/2_of_clubs.png', false);
	var twoOfSpades = new Cards(2, 'images/2_of_spades.png', false);
	var twoOfHearts = new Cards(2, 'images/2_of_hearts.png', false);
	var twoOfDiamonds = new Cards(2, 'images/2_of_diamonds.png', false);
								//3
	var threeOfClubs = new Cards(3, 'images/3_of_clubs.png', false);
	var threeOfSpades = new Cards(3, 'images/3_of_spades.png', false);
	var threeOfHearts = new Cards(3, 'images/3_of_hearts.png', false);
	var threeOfDiamonds = new Cards(3, 'images/3_of_diamonds.png', false);
								//4
	var fourOfClubs = new Cards(4, 'images/4_of_clubs.png', false);
	var fourOfSpades = new Cards(4, 'images/4_of_spades.png', false);
	var fourOfHearts = new Cards(4, 'images/4_of_hearts.png', false);
	var fourOfDiamonds = new Cards(4, 'images/4_of_diamonds.png', false);
								//5
	var fiveOfClubs = new Cards(5, 'images/5_of_clubs.png', false);
	var fiveOfSpades = new Cards(5, 'images/5_of_spades.png', false);
	var fiveOfHearts = new Cards(5, 'images/5_of_hearts.png', false);
	var fiveOfDiamonds = new Cards(5, 'images/5_of_diamonds.png', false);
								//6
	var sixOfClubs = new Cards(6, 'images/6_of_clubs.png', false);
	var sixOfSpades = new Cards(6, 'images/6_of_spades.png', false);
	var sixOfHearts = new Cards(6, 'images/6_of_hearts.png', false);
	var sixOfDiamonds = new Cards(6, 'images/6_of_diamonds.png', false);
								//7
	var sevenOfClubs = new Cards(7, 'images/7_of_clubs.png', false);
	var sevenOfSpades = new Cards(7, 'images/7_of_spades.png', false);
	var sevenOfHearts = new Cards(7, 'images/7_of_hearts.png', false);
	var sevenOfDiamonds = new Cards(7, 'images/7_of_diamonds.png', false);
								//8
	var eightOfClubs = new Cards(8, 'images/8_of_clubs.png', false);
	var eightOfSpades = new Cards(8, 'images/8_of_spades.png', false);
	var eightOfHearts = new Cards(8, 'images/8_of_hearts.png', false);
	var eightOfDiamonds = new Cards(8, 'images/8_of_diamonds.png', false);
								//9
	var nineOfClubs = new Cards(9, 'images/9_of_clubs.png', false);
	var nineOfSpades = new Cards(9, 'images/9_of_spades.png', false);
	var nineOfHearts = new Cards(9, 'images/9_of_hearts.png', false);
	var nineOfDiamonds = new Cards(9, 'images/9_of_diamonds.png', false);
								//10
	var tenOfClubs = new Cards(10, 'images/10_of_clubs.png', false);
	var tenOfSpades = new Cards(10, 'images/10_of_spades.png', false);
	var tenOfHearts = new Cards(10, 'images/10_of_hearts.png', false);
	var tenOfDiamonds = new Cards(10, 'images/10_of_diamonds.png', false);
								//jacks
	var jackOfClubs = new Cards(10, 'images/jack_of_clubs2.png', false);
	var jackOfSpades = new Cards(10, 'images/jack_of_spades2.png', false);
	var jackOfHearts = new Cards(10, 'images/jack_of_hearts2.png', false);
	var jackOfDiamonds = new Cards(10, 'images/jack_of_diamonds2.png', false);
								//queens
	var queenOfClubs = new Cards(10, 'images/queen_of_clubs2.png', false);
	var queenOfSpades = new Cards(10, 'images/queen_of_spades2.png', false);
	var queenOfHearts = new Cards(10, 'images/queen_of_hearts2.png', false);
	var queenOfDiamonds = new Cards(10, 'images/queen_of_diamonds2.png', false);
								//kings
	var kingOfClubs = new Cards(10, 'images/king_of_clubs2.png', false);
	var kingOfSpades = new Cards(10, 'images/king_of_spades2.png', false);
	var kingOfHearts = new Cards(10, 'images/king_of_hearts2.png', false);
	var kingOfDiamonds = new Cards(10, 'images/king_of_diamonds2.png', false);
								//aces
	var aceOfClubs = new Cards(11, 'images/ace_of_clubs.png', true);
	var aceOfSpades = new Cards(11, 'images/ace_of_spades2.png', true);
	var aceOfHearts = new Cards(11, 'images/ace_of_hearts.png', true);
	var aceOfDiamonds = new Cards(11, 'images/ace_of_diamonds.png', true);
							
							//Dealer Instance
var dealer = new Dealer('dealer-card-', 0, 0);


						// player instances

					//adds player too table
Dealer.prototype.addPlayer = function(player) {
	this.players.push(player);
}
								//me
var playerOne = new Player('Dan', 'playerOne-card-', 100, 0, 0, 'moneyOne', 'pOneUp');
						//Player 2 - 5 on click instances


var playerTwo;
var playerThree;
var playerFour;
var playerFive;


document.getElementById('player-two').addEventListener('click', function(){
	playerTwo = new Player('Player Two', 'playerTwo-card-', 100, 0, 0, 'moneyTwo', 'pTwoUp')
	document.getElementById('player-two').style.display = 'none';
	dealer.addPlayer(playerTwo)
	document.getElementById('pTwoName').innerHTML = 'Player 2'
	document.getElementById('moneyTwo').innerHTML = '100$'
	document.getElementById('player-three').style.display = 'inherit'
})
document.getElementById('player-three').addEventListener('click', function(){
	playerThree = new Player('Player Three', 'playerThree-card-', 100, 0, 0, 'moneyThree', 'pThreeUp')
	document.getElementById('player-three').style.display = 'none';
	dealer.addPlayer(playerThree)
	document.getElementById('pThreeName').innerHTML = 'Player 3'
	document.getElementById('moneyThree').innerHTML = '100$'
	document.getElementById('player-four').style.display = 'inherit'
})
document.getElementById('player-four').addEventListener('click', function(){
	playerFour = new Player('Player Four', 'playerFour-card-', 100, 0, 0, 'moneyFour', 'pFourUp')
	document.getElementById('player-four').style.display = 'none';
	dealer.addPlayer(playerFour)
	document.getElementById('pFourName').innerHTML = 'Player 4'
	document.getElementById('moneyFour').innerHTML = '100$'
	document.getElementById('player-five').style.display = 'inherit'
})
document.getElementById('player-five').addEventListener('click', function(){
	playerFive = new Player('Player Five', 'playerFive-card-', 100, 0, 0, 'moneyFive', 'pFiveUp')
	document.getElementById('player-five').style.display = 'none';
	dealer.addPlayer(playerFive)
	document.getElementById('pFiveName').innerHTML = 'Player 5'
	document.getElementById('moneyFive').innerHTML = '100$'
})


$('document').ready(function(){
	dealer.addPlayer(playerOne);
	$('#reset-btn').hide();
	$('#deal-btn').hide();
	$('#bet-btn').show();
	$('.pUp').hide()
	$('#pOneUp').show()
})

$('#reset-btn').click(function(){
	dealer.resetHands()
	$('#reset-btn').hide();
	$('#bet-btn').show();
})

$('#bet-btn').click(function(){
	dealer.requireBets()
})
	// Calls the deal function
$('#deal-btn').click(function(){
	dealer.addCards();
	dealer.deal();
	$('#deal-btn').hide();
	$('#reset-btn').show();
})

$('#hit-btn').click(function(){
	dealer.hit();
})

$('#stay-btn').click(function() {
	dealer.stay();
})



