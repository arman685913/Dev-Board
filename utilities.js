// disabled btn
function dable(id){
        id.setAttribute('disabled', 'true');
    }

// time
const today = new Date();
const time = today.toLocaleTimeString();
const date = today.toLocaleDateString();
const day = today.toLocaleDateString('en-US', { weekday: 'short' });

//calender date
const calender = document.getElementById('calender');
calender.innerHTML = ` <p class="text-xl">
                        ${day}, </p>
                        <h1 class="text-xl font-semibold">
                        ${date} </h1> `
//---------------------------------------------//


// card date 1
const spanTeg = document.createElement('span');
spanTeg.innerText = `${date}`;
spanTeg.classList.add('text-xl')
spanTeg.classList.add('font-semibold')

// card date 2
const spanTeg2 = document.createElement('span');
spanTeg2.innerText = `${date}`;
spanTeg2.classList.add('text-xl')
spanTeg2.classList.add('font-semibold')

// card date 3
const spanTeg3 = document.createElement('span');
spanTeg3.innerText = `${date}`;
spanTeg3.classList.add('text-xl')
spanTeg3.classList.add('font-semibold')

// card date 4
const spanTeg4 = document.createElement('span');
spanTeg4.innerText = `${date}`;
spanTeg4.classList.add('text-xl')
spanTeg4.classList.add('font-semibold')

// card date 5
const spanTeg5 = document.createElement('span');
spanTeg5.innerText = `${date}`;
spanTeg5.classList.add('text-xl')
spanTeg5.classList.add('font-semibold')

// card date 6
const spanTeg6 = document.createElement('span');
spanTeg6.innerText = `${date}`;
spanTeg6.classList.add('text-xl')
spanTeg6.classList.add('font-semibold')