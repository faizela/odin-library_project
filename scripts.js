// Define the Book constructor function
function Book(title, author, year, status, removebtn) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
  this.removebtn = removebtn
}

// Initial book instances
const book1 = new Book('Meditations', 'Marcus Aurelius', 180, 'Finished');
const book2 = new Book('Letters from a Stoic', 'Seneca', 65, 'Finished');
const myLibrary = [book1, book2];

// Get references to DOM elements
const addbookBtn = document.getElementById('add_book_btn');
const dialog = document.getElementById('dialog');
const submit = document.getElementById('submit');
const cards_Container = document.getElementById('cards_container');
const book_form = document.getElementById('book_form');




// Function to add a book to the library and update the display
function addBookToLibrary(book) {
  myLibrary.push(book);
  addBooksToCards();
}

// Function to display books as cards
function addBooksToCards() {
  cards_Container.innerHTML = ''; // Clear previous cards

function removeBookFromLibrary (index) {
  myLibrary.splice(index, 1)
  addBooksToCards()
}  

  myLibrary.forEach((book, index) => {
      const card = document.createElement('div');
      card.classList.add('card'); // Changed class name to singular for consistency

      const title = document.createElement('h1');
      title.textContent = book.title;

      const author = document.createElement('h2');
      author.textContent = book.author;

      const year = document.createElement('p');
      year.textContent = `Year: ${book.year}`;

      const status = document.createElement('p');
      status.textContent = `Status: ${book.status}`;

      const removebtn = document.createElement('button');
      removebtn.classList.add('removebtn')
      removebtn.textContent = `Remove Card`;
      removebtn.dataset.id = index
      removebtn.addEventListener('click', (e) =>  {
      e.stopPropagation()
      removeBookFromLibrary(index)
      })

      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(year);
      card.appendChild(status);
      card.appendChild(removebtn)
      cards_Container.appendChild(card);
  });
}

// Function to display the form dialog
function formDisplay() {
  dialog.showModal();
}

// Event listener for the Add Book button
addbookBtn.addEventListener('click', formDisplay);

// Event listener for the Submit button
submit.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('book').value;
  const author = document.getElementById('author').value;
  const year = parseInt(document.getElementById('year').value, 10);
  const status = document.getElementById('Book-status').value;
 
 if  (year < 50 || year > 2024) {
  alert('Enter a year number between 50 or 2024')
  return
 }


  if (title && author && year  && status) {
      const newBook = new Book(title, author, year, status);
      addBookToLibrary(newBook);
      dialog.close();
      book_form.reset();
  }
});

// Initial display of books
addBooksToCards();

