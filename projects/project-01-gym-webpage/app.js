let products = [
    { name: "Protein", price: 50 },
    { name: "Creatine", price: 30 },
    { name: "Shaker", price: 10 }
];
let ages = [12, 18, 25, 15, 40];
let numbers = [10, 20, 30, 40];

products.forEach(function(name){
    console.log(name);
});

products.forEach( namee => {
    console.log(namee)
}



)


let taxed = products.map(products => {

    return products.price * 2 ;


});

console.log(taxed);





let adults = ages.filter(age => {

return age >= 18;
});

console.log(adults);


let result =  numbers.find( Number =>  {
    return Number > 25;
});
console.log(result);