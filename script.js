// response that the api returns if you search 'hmm' grab from these to change
// what you display in the html
// {"Title":"Hmm, lecker Sperma","Year":"2005","Rated":"N/A",
// "Released":"01 Sep 2005","Runtime":"N/A","Genre":"Adult",
// "Director":"John Thompson","Writer":"N/A","Actors":"Dani, Betty Extreme, Martina, Tima",
// "Plot":"N/A","Language":"German","Country":"Germany","Awards":"N/A","Poster":"N/A",
// "Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A",
// "imdbID":"tt3065508","Type":"movie","DVD":"N/A","BoxOffice":"N/A",
// "Production":"N/A","Website":"N/A","Response":"True"}


//elements to control
const titleInput = document.getElementById('title-input') //movieName
const searchButton = document.getElementById('search-button') //searchButton
const movieSearchResults = document.getElementById('search-results') //movieData
const noMovieResult = document.getElementById('no-results') //moviesEmptyList 
// const addWatchlist = document.getElementById('watchlistBtn')





searchButton.addEventListener('click', async function() {
    // empty variable to hold 
    // a list of movies that
    // we will get from API 
    // response 
    let moviesDisplayList = ''

    // default display for the movies
    // list is 'none' or empty because
    // there hasn't been a search yet
    noMovieResult.style.display = 'none'
    // setting the results display
    // to block so the results fill
    // entire line
    movieSearchResults.style.display = 'block'

    const response = await fetch(`https://www.omdbapi.com/?apikey=3d08a817&s=${titleInput.value}`)
    const data = await response.json()

    // search each matching response
    // and determine position 
    for (let i of data.Search) {
        const movieResponse = await fetch(`https://www.omdbapi.com/?apikey=3d08a817&i=${i.imdbID}`)
        const movieData = await movieResponse.json()

        // minus icon needs class="plus-minus" for styling 
        // dictate how we want
        // the movie data to display

        moviesDisplayList += `
            <div id="movies" class="movies-container">
                <img src="${i.Poster}" class="poster">
                    <div class="movies-display">
                        <p id="movie-title">${i.Title} <span id="rating"><img id="star" src="/icons/star.png"></span><span class="rating">${movieData.imdbRating}</span></p>
                        <div id="movie-details">
                        <span class="movie-length">${movieData.Runtime}</span> <span id="genre">
                        ${movieData.Genre}<button data-movie="${movieData.imdbID}" id="watchlistBtn"><img class="plus-minus" src="/icons/plus.png"> Watchlist </button></span>
                        </div>
                        

                        <p id="plot">${movieData.Plot}</p>
                    </div>
            </div>

            <hr></hr>
        
        `
    }

    movieSearchResults.innerHTML = moviesDisplayList
})


// you wanted to grab the watchListBtn and then implement saving movies to local storage
// this may be the most direct solution you could find but really didn't feel like
// implementing that sh*t 
// https://stackoverflow.com/questions/30601620/adding-an-event-listener-to-an-element-that-doesnt-exist-yet-in-vanilla-javascr
document.addEventListener('click', addWatchList)
    function addWatchList(event){

    }