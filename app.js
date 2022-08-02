const input =document.querySelector("#movieInput")
const item =document.querySelector(".item")
const search=document.querySelector(".search")
const moviesList=document.querySelector(".moviesList")
const wholeData=document.querySelector(".wholeData")
const cross=document.querySelector(".cross")

search.addEventListener("click",()=>{
  if(input.value=="") return;
  console.log(input.value)
  const URL=`https://www.omdbapi.com/?s=${input.value}&apikey=2635936b`
  fetch(URL)
.then(response => response.json())
.then(data =>{ console.log(data);
  moviesList.innerHTML="";
     for(let x of data.Search){ console.log(x);
        createMovie(x);
    }
});
  input.value=""
})
var movieData={Poster: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
Title: "Fast & Furious 6",
Type: "movie",
Year: "2013",
imdbID: "tt1905041"}
function setonPage(movieList){
    
}

let createMovie= function(movieData){
    let movie= document.createElement("div");
    movie.classList.add("movie")
    let poster= document.createElement("div");
    poster.classList.add("poster")
    let img= document.createElement("img");
    img.setAttribute("src",movieData.Poster)
    let data= document.createElement("div");
    data.classList.add("data")
    let title= document.createElement("div");
    title.classList.add("title")
    title.innerText=movieData.Title;
    let year= document.createElement("div");
    year.classList.add("year")
    year.innerText=movieData.Year
    let moreInfo= document.createElement("div");
    moreInfo.classList.add("moreInfo")
    moreInfo.innerText="info"
    moreInfo.setAttribute("onclick","displayNone(this)")
    moreInfo.ibdm=movieData.imdbID;
    console.log(moreInfo.ibdm)
    // item.append(movie);
    data.appendChild(title)
    data.appendChild(year)
    data.appendChild(moreInfo)
    poster.appendChild(img)
    movie.appendChild(poster)
    movie.appendChild(data)
    moviesList.appendChild(movie)
}
// createMovie(movieData);

// fetch("https://www.omdbapi.com/?i=tt1905041&apikey=2635936b")
// .then(response => response.json())
// .then(data => console.log(data))


// Actors: "Vin Diesel, Paul Walker, Dwayne Johnson"
// Awards: "10 wins & 22 nominations"
// BoxOffice: "$238,679,850"
// Country: "United States, Japan, Spain, United Kingdom"
// DVD: "29 Oct 2013"
// Director: "Justin Lin"
// Genre: "Action, Crime, Thriller"
// Language: "English, Spanish, Russian, Japanese, Cantonese, Dutch"
// Metascore: "61"
// Plot: "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty."
// Poster: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
// Production: "N/A"
// Rated: "PG-13"
// Ratings: Array(3)
// 0: {Source: 'Internet Movie Database', Value: '7.0/10'}
// 1: {Source: 'Rotten Tomatoes', Value: '71%'}
// 2: {Source: 'Metacritic', Value: '61/100'}
// length: 3
// [[Prototype]]: Array(0)
// Released: "24 May 2013"
// Response: "True"
// Runtime: "130 min"
// Title: "Fast & Furious 6"
// Type: "movie"
// Website: "N/A"
// Writer: "Chris Morgan, Gary Scott Thompson"
// Year: "2013"
// imdbID: "tt1905041"
// imdbRating: "7.0"
// imdbVotes: "386,721"

const wdata ={Actors: "Vin Diesel, Paul Walker, Dwayne Johnson",
Awards: "10 wins & 22 nominations",
BoxOffice: "$238,679,850",
Country: "United States, Japan, Spain, United Kingdom",
DVD: "29 Oct 2013",
Director: "Justin Lin",
Genre: "Action, Crime, Thriller",
Language: "English, Spanish, Russian, Japanese, Cantonese, Dutch",
Metascore: "61",
Plot: "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.",
Poster: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
Production: "N/A",
Rated: "PG-13",
Ratings:[
{Source: 'Internet Movie Database', Value: '7.0/10'},
{Source: 'Rotten Tomatoes', Value: '71%'},
{Source: 'Metacritic', Value: '61/100'}],

Released: "24 May 2013",
Response: "True",
Runtime: "130 min",
Title: "Fast & Furious 6",
Type: "movie",
Website: "N/A",
Writer: "Chris Morgan, Gary Scott Thompson",
Year: "2013",
imdbID: "tt1905041",
imdbRating: "7.0",
imdbVotes: "386,721"}
const moreInfo=document.querySelector(".moreInfo")
const createWholeData = (movieData)=>{
    wholeData.innerHTML=`
     <div class="outer">
       <div class="box1">
         <img src="${movieData.Poster}" alt="" srcset="">
         <div class="impinfo">
           <div class="title">${movieData.Title}</div>
           <div class="actors">Actors : ${movieData.Actors}</div>
           <div class="genre">Genre : ${movieData.Genre}</div>
           <div class="released">Release date : ${movieData.Released}</div>
           <div class="runTime">Runtime : ${movieData.Runtime}</div>
            <div class="boxoffice">BoxOffice : ${movieData.BoxOffice}</div>
         </div>
       </div>
       <div class="box2">
         <div class="plot">Plot : ${movieData.Plot}</div>
         <div class="director">Director : ${movieData.Director}</div>
          <div class="writer">Writer : ${movieData.Writer}</div>
       </div>
     </div>
    `
}
let displayNone= (e) =>{ 
  if(e.ibdm!=undefined){
   fetch(`https://www.omdbapi.com/?i=${e.ibdm}&apikey=2635936b`)
   .then(response => response.json())
   .then(data  =>{ console.log(data)
  createWholeData(data)})
console.log(e.ibdm)}
  cross.classList.toggle("displayNone");
  wholeData.classList.toggle("displayNone");}


cross.addEventListener("click", displayNone);

