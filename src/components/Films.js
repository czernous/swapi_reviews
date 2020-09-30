import axios from 'axios';

const Films = async () => {
  const res = await axios.get('https://swapi.dev/api/films/');
  const getMovies = res.data.results;
  let movList = ``;
  let movDesc = ``;
  const movies = () => {
    Object.keys(getMovies).forEach((movie) => {
      movList += `<li class="movie-title">${getMovies[movie].title}</li>`;
      movDesc += `<p class="movie-desc">${getMovies[movie].opening_crawl}</p>`;
    });
  };
  movies();
  const template = `
  <div class="movie-info">
    <section class="movie-titles card">
      <h1>Choose movie title</h1>
      <article class="card-body">
        <ul class="movie-list">
        ${movList}
        </ul>
      </article>
    </section>
    <section class="movie-descriptions">
    <h1>Plot summary</h1> 
      <article class="descriptions">  
        ${movDesc}
      </article>      
    </section>  
    <button class="review-btn btn">Write a review</button>
  </div>

  `;
  return template;
};

export default Films;
