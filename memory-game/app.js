document.addEventListener('DOMContentLoaded', ()=>{
    //card options
    const cardArray = [
        {
            name:'fries',
            img: 'images/fries.png'
        },
         {
            name:'fries',
            img: 'images/fries.png'
        },
         {
            name:'burger',
            img: 'images/burgerF.png'
        },
         {
            name:'burger',
            img: 'images/burgerF.png'
        },
         {
            name:'donut',
            img: 'images/donutF.png'
        },
         {
            name:'donut',
            img: 'images/donutF.png'
        },
         {
            name:'hotdog',
            img: 'images/hotdog.png'
        },
         {
            name:'hotdog',
            img: 'images/hotdog.png'
        },
         {
            name:'pizza',
            img: 'images/pizza.png'
        },
         {
            name:'pizza',
            img: 'images/pizza.png'
        },
         {
            name:'taco',
            img: 'images/taco.png'
        },
         {
            name:'taco',
            img: 'images/taco.png'
        } 
        //  {
        //     name:'sandwich',
        //     img: 'images/sandwichF.png'
        // },
        //  {
        //     name:'sandwich',
        //     img: 'images/sandwichF.png'
        // }
    ]


    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    //create board
    function createBoard() {
        for(let i=0; i<cardArray.length; i++)
        {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/front.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1])
        {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/front.png')
            cards[optionTwoId].setAttribute('src', 'images/front.png')
            alert('Sorry, Try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2)
        {
            resultDisplay.textContent = 'Congratulations! You found them all'
        }
    }
    //flip your card
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2)
        {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
})