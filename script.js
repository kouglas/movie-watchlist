// omdb unique api key http://www.omdbapi.com/?i=tt3896198&apikey=3d08a817


fetch('http://www.omdbapi.com/?apikey=3d08a817&')
    .then((res) => res.json())
    .then(data => console.log(data))

    //need more info on using this