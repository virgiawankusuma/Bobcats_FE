const books = (book, qty) => {
    if (qty >= 1) {
        console.log(`There are ${qty} ${book} books left in stock, you can get this book now`);
    } else if (qty < 1) {
        console.log(`There are ${qty} ${book} books left in stock, you can't get this book now`);
    }
}

books('Harry Potter', 1);