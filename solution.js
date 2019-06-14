// your solution should go here
// for demo purposes use the console for any out you will need.


// favourite recipe
let eats = {
    'title': 'Cheese Cake',
    'servings': 5,
    'ingredients': ['cream cheese', 'graham cracker crust', 'sourcream', 'Garnish', 'Jello']
};

console.log(eats.title);
console.log('Servings: ' + eats.servings);
console.log('Ingredients:');
for (i = 0; i < eats.ingredients.length; i++) {
    console.log(eats.ingredients[i]);
}

// BOOKS TO READ

let books = [{
        title: 'Everything Everything',
        author: 'Nicola Yoon',
        alreadyRead: false
    },
    {
        title: 'Angels and Demons',
        author: 'Dan Brown',
        alreadyRead: false
    },
    {
        title: 'The DaVinci Code',
        author: 'Dan Brown',
        alreadyRead: true
    }
];

for (i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
        console.log('You already read "' + bookInfo);
    } else {
        console.log('You still need to read "' + bookInfo);
    }
}