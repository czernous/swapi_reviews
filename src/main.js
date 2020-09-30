import App from './app';

const app = async () => {
  document.getElementById('app').appendChild(await App());
  (function displayMovies() {
    const movieTitle = document.querySelectorAll('.movie-title');
    const movieDescription = document.querySelectorAll('.movie-desc');
    const descriptions = document.querySelector('.descriptions');
    descriptions.innerHTML = movieDescription[0].outerHTML;
    movieTitle.forEach((mov, movIndex) => {
      mov.addEventListener('click', () => {
        movieDescription.forEach((desc, descIndex) => {
          if (descIndex === movIndex) {
            descriptions.innerHTML = desc.outerHTML;
          }
        });
      });
    });
  })();
  (function submitReview() {
    const reviews = document.querySelector('.reviews');
    const reviewBtn = document.querySelector('.review-btn');
    const movieInfo = document.querySelector('.movie-info');
    const backToMovieList = document.querySelector('.back');
    const form = document.querySelector('form');
    const hideMovies = () => {
      if (movieInfo.classList.contains('is-hidden')) {
        movieInfo.classList.remove('is-hidden');
        reviews.classList.remove('is-hidden');
      }
      if (reviews.classList.contains('is-hidden')) {
        reviews.classList.remove('is-hidden');
        movieInfo.classList.add('is-hidden');
      } else {
        reviews.classList.add('is-visible');
        movieInfo.classList.add('is-hidden');
      }
    };
    const hideReviews = () => {
      if (reviews.classList.contains('is-hidden')) {
        reviews.classList.remove('is-hidden');
      } else {
        reviews.classList.add('is-hidden');
        movieInfo.classList.remove('is-hidden');
      }
    };
    reviewBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hideMovies();
    });
    backToMovieList.addEventListener('click', (e) => {
      e.preventDefault();
      hideReviews();
    });
    form.onsubmit = (e) => {
      e.preventDefault();
      const submitForm = () => {
        const formData = new FormData(form);
        const username = formData.get('username');
        const email = formData.get('email');
        const review = formData.get('review');
        const modal = document.querySelector('.modal');
        const modalData = document.querySelector('.user-data');
        const closeModal = document.querySelector('.close-button');
        modalData.innerHTML = `
        <h2>Dear ${username}, thank you for submitting your review</h2>
        <span>Review text:</span>
        <p>${review}</p>
        `;
        modal.classList.toggle('show-modal');
        closeModal.addEventListener('click', () => {
          hideReviews();
          modal.classList.toggle('show-modal');
        });
      };
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(submitForm());
        }, 1000);
      });
    };
  })();
};
// Load app
app();
