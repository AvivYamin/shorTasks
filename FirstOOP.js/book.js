class BookList{
    constructor(readBooks, notReadBooks, nextBook, currentBook, lastBook, books){
        this.readBooks = readBooks;
        this.notReadBooks = notReadBooks;
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.lastBook = lastBook;
        this.books = books;
    }
    add(book){
        this.books.push(book);
    }
    finishCurrentBook(){
        this.currentBook.read = true;
        this.currentBook.readDate = new Date(Date.now());
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.books.forEach(book => {
            if(book.read === false){
                this.nextBook = book;
            }
        });
        this.notReadBooks--;
        this.readBooks++;
        console.log(this);
    }
}

class Book{
    constructor(title, genre, author, read, readDate){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}
