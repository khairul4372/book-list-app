const title =  document.querySelector('#title')
const author =  document.querySelector('#author')
const year =  document.querySelector('#year')
const btn =  document.querySelector('.btn')
const bookList =  document.querySelector('#book-list')

btn.addEventListener('click', function(e){
    e.preventDefault()

    if (title.value == '' || author.value == '' || year.value == ''){
        alert('Please enter a title or authon or year')
    } else{
        const newRow = document.createElement('tr')

        const newTile = document.createElement('th')
        newTile.innerHTML = title.value
        newRow.appendChild(newTile)

        const newAuthor = document.createElement('th')
        newAuthor.innerHTML = author.value
        newRow.appendChild(newAuthor)


        const newYear = document.createElement('th')
        newYear.innerHTML = year.value
        newRow.appendChild(newYear)

        bookList.appendChild(newRow)

    }
})

