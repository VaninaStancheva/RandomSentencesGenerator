let names = ['Todor', 'Nikoleta', 'Vanina', 'Pesho', 'Desi'];
let places = ['Sofia', 'Plovdiv', 'Varna', 'Burgas'];
let verbs = ['eats', 'holds','sees', 'plays with', 'brings'];
let nouns = ['stones', 'cake', 'apple', 'laptop', 'bikes'];
let adverbs = ['slowly', 'diligently', 'warmly', 'sadly', 'rapidly'];
let details = ['near the river', 'at home', 'in the park'];

function getRandomWord (array) {
    return array[Math.floor(Math.random() * array.length)];
}

const output = `${getRandomWord(names)} from ${getRandomWord(places)} ${getRandomWord(verbs)} ${getRandomWord(nouns)} ${getRandomWord(adverbs)} ${getRandomWord(details)}. Some change`;

console.log(output);
