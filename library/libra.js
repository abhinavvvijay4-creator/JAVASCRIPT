const shelf = ["Wings of Fire", "The Alchemist", "Let Us C"];
 console.log(shelf);
   console.log(shelf.length);
console.log(shelf[0]);
console.log(shelf[shelf.length - 1]);
 shelf.push("Clean Code");
shelf.unshift("Godan");
console.log(shelf);
 shelf.pop();
shelf.shift();
console.log(shelf);
console.log(shelf.indexOf("Let Us C"));
console.log(shelf.includes("Godan"));
const books = shelf.slice(0, 2);
console.log(shelf);
console.log(books);

const sortedShelf = [...shelf].sort();
console.log(sortedShelf);

console.log(Array.isArray(shelf));
shelf.forEach((item) => {
  console.log(item);
});
const book = {
  id: 101,
  title: "Wings of Fire",
  author: "A. P. J. Abdul Kalam",
  price: 350,
  copies: 4,
  publisher: {
    name: "Universities Press",
    city: "Hyderabad"
  },
  tags: ["biography", "science"],
  describe() {
    return `${this.title} by ${this.author} - Rs ${this.price}`;
  }
};
console.log(book.describe());
console.log(book.title);
console.log(book["author"]);
console.log(book.publisher.city);
console.log(book.tags[1]);

book.price = 380;
book.isbn = "978-8173711466";
console.log(book.isbn);
delete book.isbn;

console.log("isbn" in book);
console.log("price" in book);
console.log(Object.keys(book));
console.log(Object.values(book.publisher));
console.log(Object.entries(book.publisher));

const { title, price } = book;
console.log(title, price);
const updatedBook = { ...book, price: 400 };
console.log(book.price);
console.log(updatedBook.price);

 function formatPrice(amount) {
  return "Rs " + amount;
}

const calculateLateFee = function (daysLate, ratePerDay = 2) {
  return daysLate * ratePerDay;
};
const isAvailable = (item) => item.copies > 0;

function createBook(id, title, author, category, price, copies, rating) {
  return {
    id,
    title,
    author,
    category,
    price,
    copies,
    rating
  };
}

console.log(formatPrice(350));
console.log(calculateLateFee(5));
console.log(calculateLateFee(5, 3));
console.log(createBook(107, "Ikigai", "Hector Garcia", "Self-help", 399, 6, 4.3));
const library = [
  createBook(101, "Wings of Fire", "A. P. J. Abdul Kalam", "Autobiography", 350, 4, 4.8),
  createBook(102, "The Alchemist", "Paulo Coelho", "Fiction", 299, 2, 4.5),
  createBook(103, "Let Us C", "Yashavant Kanetkar", "Programming", 450, 5, 4.2),
  createBook(104, "Clean Code", "Robert C. Martin", "Programming", 899, 0, 4.7),
  createBook(105, "Godan", "Munshi Premchand", "Fiction", 220, 3, 4.6),
  createBook(106, "Malgudi Days", "R. K. Narayan", "Fiction", 275, 1, 4.4)
];

const allTitles = library.map((b) => b.title);
console.log(allTitles);
const affordableTitles = library.filter((b) => b.price < 300).map((b) => b.title);
console.log(affordableTitles);

const book104 = library.find((b) => b.id === 104);
console.log(book104.title);
const index105 = library.findIndex((b) => b.id === 105);
console.log(index105);

const hasOutOfStock = library.some((b) => b.copies === 0);
const allRatedAboveFour = library.every((b) => b.rating > 4);
console.log(hasOutOfStock);
console.log(allRatedAboveFour);
const addBook = function (lib, newBook) {
  return [...lib, newBook];
};

const removeBook = function (lib, id) {
  return lib.filter((b) => b.id !== id);
};
const borrowBook = function (lib, id) {
  const found = lib.find((b) => b.id === id);

  if (found === undefined) {
    return "Book not found";
  }
  if (found.copies === 0) {
    return "Sorry, " + found.title + " is out of stock";
  }
  found.copies -= 1;
  return "Borrowed: " + found.title + " (" + found.copies + " copies left)";
};

const searchByAuthor = function (lib, text) {
  const query = text.toLowerCase();
  return lib
    .filter((b) => b.author.toLowerCase().includes(query))
    .map((b) => b.title);
};
const printReport = function (lib) {
  console.log("ID - Title - Price - Copies - Status");
  for (let i = 0; i < lib.length; i++) {
    const b = lib[i];
    const status = isAvailable(b) ? "In stock" : "Out of stock";
    console.log(
      b.id + " - " + b.title + " - " + formatPrice(b.price) + " - " + b.copies + " - " + status
    );
  }
};

console.log(borrowBook(library, 101));
console.log(borrowBook(library, 104));
console.log(borrowBook(library, 999));

const updated = addBook(
  library,
  createBook(107, "Ikigai", "Hector Garcia", "Self-help", 399, 6, 4.3)
);
console.log(library.length); 
console.log(updated.length);

const trimmed = removeBook(updated, 102);
console.log(trimmed.length);

console.log(searchByAuthor(library, "kalam"));

printReport(trimmed);