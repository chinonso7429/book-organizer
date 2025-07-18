

let books = [
  { title: "The Pragmatic Programmer", authorName: "Andrew Hunt", releaseYear: 1999 },
  { title: "Clean Code", authorName: "Robert C. Martin", releaseYear: 2008 },
  { title: "You Don't Know JS", authorName: "Kyle Simpson", releaseYear: 2015 },
  { title: "JavaScript: The Good Parts", authorName: "Douglas Crockford", releaseYear: 2008 }
];

// 2. Define sortByYear function with two parameters
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

// 3. Create filteredBooks by filtering out books released before 2000
let filteredBooks = books.filter(book => book.releaseYear >= 2008);

// 4. Sort filteredBooks using sortByYear
filteredBooks.sort(sortByYear);

// 5. Log filteredBooks to verify
console.log(filteredBooks);



