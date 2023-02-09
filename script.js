const screen1 =  document.querySelector('.screen1')
const screen2 =  document.querySelector('.screen2')

const boxQuote = document.querySelector('.boxQuote')

const btnRead = document.querySelector('#btnRead')
const btReadAgain = document.querySelector('#btReadAgain')

function closeCookie(e){
    e.preventDefault()
    toggleScreen()
}

function readSort(){
    let numberRandom = Math.floor(Math.random() * 10) 
    console.log(numberRandom)
    switch(numberRandom){
        case 1:
            screen2
                .querySelector('p')
                .innerText = 'Nada é tão comum, como o desejo de ser extraordinário. _ William Shakespeare'
        break

        case 2:
            screen2
                .querySelector('p')
                .innerText = 'Não meça o trabalho até que o dia tenha acabado e o trabalho concluído. _ Elizabeth Barrett Browning'
        break

        case 3:
            screen2
                .querySelector('p')
                .innerText = 'O mal une os homens. _ Aristóteles'
        break

        case 4:
            screen2
                .querySelector('p')
                .innerText = 'A casa nunca se apóia no chão, mas sobre uma mulher. _ Provérbio Mexicano'
        break

        case 5:
            screen2
                .querySelector('p')
                .innerText = 'Dos desejo mais profundos, nascem os ódios mais mortais. _ Sócrates'
        break

        case 6:
            screen2
                .querySelector('p')
                .innerText = 'Viva como se fosse morrer amanhã. Aprenda como se fosse viver para sempre. _ Mahatma Gandhi'
        break

        case 7:
            screen2
                .querySelector('p')
                .innerText = 'Deus manda a carne, o diabo os cozinheiros. _ Thomas Deloney'
        break

        case 8:
            screen2
                .querySelector('p')
                .innerText = 'Ame a todos. Confie em poucos. Não faça mal a ninguém. _ William Shakespeare'
        break

        case 9:
            screen2
                .querySelector('p')
                .innerText = 'Dos desejos o paraíso do tolo, é o inferno do sábio. _ Thomas Fuller'
        break

        case 10:
            screen2
                .querySelector('p')
                .innerText = 'A abundância permanece no mesmo local. A fome é viajante. _ Provérbio Zulu'
        break

        default:
            screen2
                .querySelector('p')
                .innerText = 'Aquele que não pune o mal, ordena que ele seja feito. _ Leonardo da Vinci'
        break
    }

    toggleScreen()
}

function openQuote(){
    boxQuote.classList.toggle('toHide')
}

function toggleScreen(){ 
    openQuote()

    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

btnRead.addEventListener('click', readSort)
btReadAgain.addEventListener('click', closeCookie)
