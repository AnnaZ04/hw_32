const input = document.createElement('input');
input.type ='text';
input.className = 'search-input';


const body = document.body;
body.appendChild(input);


const results = document.createElement ('div');
body.appendChild(results);

const apikey = '86686340';

input.addEventListener('input', async(e)=>{
    const query = e.target.value;
    if (query.length < 3) return;

if (!query) {
    return;
}
try{
const response = await fetch (`https://www.omdbapi.com/?s=${query}&apikey=${apikey}`)
    const data= await response.json();
if(data.Response==='True'){
    displayMovies(data.Search);
}else{
    alert (data.Error);
}
}catch(error){
    console.log('Error:', error)
}
});

function displayMovies(movies){
    results.innerHTML = '';
    results.className = 'movies-container'
    movies.forEach(movie=>{
        const div = document.createElement('div');
        div.className = 'movie-card';

        const title = document.createElement('h3');
        title.textContent = movie.Title;
        title.className = 'movie-title'

        const year = document.createElement ('p');
        year.textContent = movie.Year;
        year.className = 'movie-year'

        const img = document.createElement('img');
        img.src = movie.Poster;
        img.width = 100;
        img.className= 'movie-poster'

        div.appendChild(title);
        div.appendChild(year);
        div.appendChild(img);

        results.appendChild(div);
    })
}
