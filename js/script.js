
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carosello = document.querySelector('.carosello');

for(let i = 0; i < images.length; i++) {

    let newDiv = document.createElement('div');
    let immagine = document.createElement('img');
    immagine.src = `${images[i].image}`;
    newDiv.append(immagine);
    newDiv.classList.add('slide');
    console.log(newDiv);
    carosello.append(newDiv);

    let h2 = document.createElement('h2');
    h2.innerHTML += images[i].title;

    let p = document.createElement('p');
    p.innerHTML += images[i].text;

    let divAbs = document.createElement('div');
    //console.log(divAbs);
    divAbs.append(h2);
    divAbs.append(p);
    newDiv.append(divAbs);
    divAbs.classList.add('abs');

}



// seleziono i div contententi le immagini
const slides = document.querySelectorAll('.slide');

// ad ogni div selezionato do una class 'current'
slides[0].classList.add('current');

// dichiaro una variabile pari a 0
let currentSlide = 0;

const right = document.querySelector('.right');
const left = document.querySelector('.left');

if (currentSlide == 0) {
   //left.classList.add('hidden');
}

// aggiungo un evento alla freccia di scorrimento
right.addEventListener('click', scorri);

function scorri() {
    //console.log('cliccato su right');
    slides[currentSlide].classList.remove('current');

    if(currentSlide == slides.length - 1) {
        currentSlide = -1;
    }
    slides[1 + currentSlide].classList.add('current');
    currentSlide++;

   // console.log(currentSlide);
   // console.log(slides.length);

   /* if (currentSlide == slides.length - 1) {
        //right.classList.add('hidden');
        currentSlide = 0;
    } 
    if (currentSlide == 1) {
        left.classList.remove('hidden');
    }*/

}

// aggiungo un evento alla freccia di ritorno
left.addEventListener('click', back);

function back() {
    slides[currentSlide].classList.remove('current');

    if(currentSlide == 0) {
        currentSlide = slides.length;
    }
    slides[currentSlide - 1].classList.add('current');
    currentSlide--;
   // console.log(currentSlide);

    /*  if (currentSlide == 0) {
        left.classList.add('hidden');
    } */
   

    /*  if (currentSlide == slides.length - 2) {
        right.classList.remove('hidden');
    }

    if (currentSlide == 1) {
        left.classList.remove('hidden');
    }*/
}