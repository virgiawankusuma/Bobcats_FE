// for loop
// for (let book = 0; book < bookStore.length; book++) {
//     console.log(bookStore[book]);
// }

// for of loop
// for (const book of bookStore) {
//     console.log(book);
// }

let bookStore = [
    {
        name: 'Harry Potter',
        qty: 1
    },
    {
        name: 'Lord of the Rings',
        qty: 5
    },
    {
        name: 'The Hobbit',
        qty: 20
    },
    {
        name: 'The Alchemist',
        qty: 15
    }
];

const buyBook = (name, qty) => {
    for (const book of bookStore) {
        if (name === book.name) {
            if (book.qty > 1) {
                console.log(`You have successfully purchased ${book.qty} ${book.name} books`)
                book.qty = book.qty - qty;
                console.log(`There are ${book.qty} ${book.name} books left in stock, you can get this book anymore now`)
            } else {
                console.log(`You have successfully purchased ${book.qty} ${book.name} books`)
                book.qty = 0;
                console.log(`There are ${book.qty} ${book.name} books left in stock, you can't get this book anymore now`)
            }
        }
    }
};

buyBook('Harry Potter', 1);
// buyBook('The Alchemist', 5);
