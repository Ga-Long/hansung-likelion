const APIKEY ="79b890aa513c1b748265cdf52c88f840"
const IMAGE_URL ="https://image.tmdb.org/t/p/w500/"

const now_playingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key="+APIKEY+"&language=en-US&page=1";
const now_playing = document.getElementById("now-playing");
const modal =document.querySelector('.modal');
fetch(now_playingURL)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element)=>{
            console.log(element);
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            movie.className ="item1"; //li태그에 class넣어주기
            //movie.setAttribute("id",element.id); //li 태그에 id 추가 
            //movie.setAttribute('onclick',makeModel(now_playingURL,element.id)); //id도 같이 넘겨줘
            let movieDiv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText=element.title;
            let rate=document.createElement("span");
            rate.innerText="★ " + element.vote_average;
            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(rate);
            movie.appendChild(movieDiv);
            now_playing.appendChild(movie);

            movieDiv.dataset.movieID = element.id; //dataset으로 id를 div태그에 넣어주고
            movieDiv.style.cursor = 'pointer';

            movieDiv.addEventListener("click",()=>{ //eventlistener 넣어주고
                let id= movieDiv.dataset.movieID //dataset으로 넣은 id 가져오고
                makeModel(id); //함수 호출
                
                modal.classList.toggle("show");//modal 태그에 class 추가 toggle속성으로 show 추가 
                modal.addEventListener("click",()=>{
                    modal.classList.remove("show"); //modal 한번 더 클릭하면 show class가 제거
                })
                
            })

        })
    });

const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key="+APIKEY+"&language=en-US&page=1";
const popular = document.getElementById("popular");
fetch(popularURL)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element)=>{
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            //movie.setAttribute("id",element.id); //li 태그에 id 추가
            let movieDiv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText=element.title;
            let rate=document.createElement("span");
            rate.innerText="★ " + element.vote_average;
            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(rate);
            movie.appendChild(movieDiv);
            popular.appendChild(movie);

        })
    });
const top_ratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key="+APIKEY+"&language=en-US&page=1";
const top_rated = document.getElementById("top-rated");
fetch(top_ratedURL)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element)=>{
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            //movie.setAttribute("id",element.id); //li 태그에 id 추가
            let movieDiv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText=element.title;
            let rate=document.createElement("span");
            rate.innerText="★ " + element.vote_average;
            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(rate);
            movie.appendChild(movieDiv);
            top_rated.appendChild(movie);

        })
    });

const upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key="+APIKEY+"&language=en-US&page=1";
const upcoming = document.getElementById("upcoming");
fetch(upcomingURL)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element)=>{
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            let movieDiv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText=element.title;
            let rate=document.createElement("span");
            rate.innerText="★ " + element.vote_average;
            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(rate);
            movie.appendChild(movieDiv);
            upcoming.appendChild(movie);

        })
    });

const content = document.querySelector('.content');

//해당 태그(li)를 선택하면 
function makeModel(id){
    const modalURL= `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`;
    fetch(modalURL)
        .then(response => response.json())
        .then(response => {
            let poster = document.getElementById("poster");
            poster.setAttribute("src",IMAGE_URL+response.backdrop_path);
            let title = document.getElementById("title");
            title.innerText = response.title;
            let release_date = document.getElementById("release_date");
            release_date.innerText = response.release_date;
            let overview = document.getElementById("overview");
            overview.innerText = response.overview;
        })
}

var slideWrapper = document.querySelector('.container');
var slides = document.querySelectorAll('.item1');
var totalSlides = slides.length; // item의 갯수

