console.log("Hello World");

type fitems = 'Burger' | 'Fries';
type fsize = 'sm' | 'md' | 'lg';

type foodsize = `${fitems}-${fsize}`;

let order : foodsize = 'Burger-md';

console.log(order);