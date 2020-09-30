const Review = () => {
  const template = `
    <div class="reviews">
    <section class="review-section card">
      <h1>Enter your information</h1> 
        <form class="review-form" action="" metnod="POST">
        <input type="text" name="username" placeholder="enter your name" required/>
        <input type="email" name="email" placeholder="enter your email" required/>
        <textarea name="review" placeholder="write a review" requred></textarea>
        <button type="submit" class="btn submit-btn">Submit</button>
        <a href="#" class="back">back to movie list</a>
        </form>
      </section>  
    </div>
    <div class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <div class="user-data"></div>
        </div>
    </div>
      `;
  return template;
};

export default Review;
