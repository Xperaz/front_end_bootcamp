
// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Trust men and they will be true to you; treat them greatly, and they will show themselves great."`,
    person: `Mary Wollstonecraft Shelley`
}, {
    quote: `"The most radical revolutionary will become a conservative the day after the revolution."`,
    person: `Ralph Waldo Emerson`
}, {
    quote: `"It is never too late to give up our prejudices."`,
    person: `Hannah Arendt`
}, {
    quote: `"I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy."`,
    person: `Ray Kroc`
}, {
    quote: `"When we have respect for ourselves and others, we gravitate towards connections that encourage that."`,
    person: `Simeon Lindstrom`
}, {
    quote: `"Anger is the ultimate destroyer of your own peace of mind"`,
    person: `Dalai Lama`
},{
    quote: `"Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot."`,
    person: `Wayne Gretzky`
}, {
    quote: `"Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered."`,
    person: `Michelle Obama`
},];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})