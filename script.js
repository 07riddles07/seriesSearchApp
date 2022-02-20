const searchInput = document.querySelector('#search');
const films = document.querySelectorAll('.film');

searchInput.addEventListener('keyup', function(event) {
    const word = event.target.value.toLowerCase();
    console.log(word);

    films.forEach(item => {
        item.querySelector('p').textContent.toLocaleLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
})