 document.addEventListener('DOMContentLoaded', () => {


	//card options
	const cardArray = [
		{
			name:'moon',
			img:'images/moon.png'
		},

		{
			name:'moon',
			img:'images/moon.png'
		},

		{
			name:'deku',
			img:'images/deku.png'
		},

		{
			name:'deku',
			img:'images/deku.png'
		},

		{
			name:'majoras',
			img:'images/majoras.png'
		},

		{
			name:'majoras',
			img:'images/majoras.png'
		},

		{
			name:'zelda',
			img:'images/zelda.png'
		},

		{
			name:'zelda',
			img:'images/zelda.png'
		},

		{
			name:'link',
			img:'images/link.png'
		},

		{
			name:'link',
			img:'images/link.png'
		},

		{
			name:'ganon',
			img:'images/ganon.png'
		},

		{
			name:'ganon',
			img:'images/ganon.png'
		}
	]

	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	var cardsChosen = []
	var cardsChosenId = []
	var cardsWon = []
	var refresh = window.location.reload

	const counterDisplay = document.querySelector('#time')
	let timeLeft = 120

	swal('Memory Game', 'Find all pairs')
//time Left counter
	setTimeout(function countDown() {
		
		setInterval(function() {
			if(timeLeft <= 0) {
				clearInterval(timeLeft = 0)
				swal('Sorry', 'Time is over :( Try again', 'error')
				setTimeout(window.location.reload.bind(window.location), 2000);
				
			}
			counterDisplay.innerHTML = timeLeft
			timeLeft -=1
			
		}, 1000)
	}, 2000)
	

	

	//creating the board
	function createBoard () 
	{
		for (let i=0; i < cardArray.length; i++) {
				var card = document.createElement('img');
				card.setAttribute('src', 'images/blank.png')
				card.setAttribute('data-id', i)
				card.addEventListener('click', flipCard)
				grid.appendChild(card)
			}
		
	}

	//check for matches
	function checkForMatch() {
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]
		if (cardsChosen[0] === cardsChosen[1]) {
	
		if(optionOneId == optionTwoId) {
		  cards[optionOneId].setAttribute('src', 'images/blank.png')
		  cards[optionTwoId].setAttribute('src', 'images/blank.png')
		  swal('Sorry', 'You have clicked the same image! :(', 'error') 
		
		}
		else if (cardsChosen[0] === cardsChosen[1]) {
		  swal('Great', 'You found a match', 'success')
		  cards[optionOneId].setAttribute('src', 'images/white.png')
		  cards[optionTwoId].setAttribute('src', 'images/white.png')
		  cards[optionOneId].removeEventListener('click', flipCard)
		  cards[optionTwoId].removeEventListener('click', flipCard)
		  cardsWon.push(cardsChosen) 
		}
		} else {
		  cards[optionOneId].setAttribute('src', 'images/blank.png')
		  cards[optionTwoId].setAttribute('src', 'images/blank.png')
		  swal('Sorry', 'Try again :(', 'error') 
		}
		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if  (cardsWon.length === cardArray.length/2) {
		  swal('You found them all!', 'Score ' + timeLeft  , 'success');
		  //resultDisplay.textContent = 'Congratulations! You found them all!'
		  setTimeout(window.location.reload.bind(window.location), 5000);
		}
	     
	}   

	//flip card
	function flipCard() {
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		

		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500)
		}
	}



	createBoard()
})


 // cards won must be unable to click (DONE)
// after found every card, reload the page (DONE)
// score must be === time
//same card unable to click (DONE)