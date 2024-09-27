const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputIsbn = document.querySelector('#isbn');
const addBtn = document.querySelector('#submit');
const bookList = document.querySelector('#book-list');

// Corrected event listener with proper event type 'click'
addBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    const inpTitle = inputTitle.value;
    const inpAuthor = inputAuthor.value;
    const inpIsbn = inputIsbn.value;

    if (inpTitle === '' || inpAuthor === '' || inpIsbn === '') {
        alert('Please fill all fields'); // Updated alert message for clarity
        return;
    }

    const addRow = document.createElement('tr');
    addRow.innerHTML = `
        <td>${inpTitle}</td>
        <td>${inpAuthor}</td>
        <td>${inpIsbn}</td>
        <td><button class="delete">X</button></td>
    `;

    bookList.append(addRow); // Append the new row to the book list

    // Clear the input fields after adding
    inputTitle.value = "";
    inputAuthor.value = "";
    inputIsbn.value = "";
});

// Corrected event listener for the delete button with proper event type 'click'
bookList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const row = e.target.closest('tr'); // Find the closest row to the button
        bookList.removeChild(row); // Remove the row from the table
    }
});
