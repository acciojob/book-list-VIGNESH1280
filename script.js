//your JS code here. If required.
const inputTitle = document.querySelector('#title')
const inputAuthor = document.querySelector('#author')
const inputIsbn = document.querySelector('#isbn')
const button = document.querySelector('#submit')
const bookList = document.querySelector('#book-list')



button.addEventListener('click', (e)=>{
e.preventDefault();
	
const title = inputTitle.value
const author = inputAuthor.value
const isbn = inputIsbn.value

if(title=='' || author=='' || isbn==''){
	alert('Please Enter');
	return
}
	
const row=document.createElement('tr');
row.innerHTML=`
<td>${title}</td>
<td>${author}</td>
<td>${isbn}</td>
<td><button class="delete">X</button></td>
`;
	
bookList.appendChild(row)
inputTitle.value = "";
inputAuthor.value = "";
inputIsbn.value = "";

});

bookList.addEventListener('click',()=>{
	if(e.traget.classList.contains(delete)){
		bookList.removeChild(row);

	}
})