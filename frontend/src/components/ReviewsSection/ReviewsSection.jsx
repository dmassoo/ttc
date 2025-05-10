// Component for Reviews Section
function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      image: "/images/Екатерина.jpg",
      name: "Екатерина, 31 год",
      text: "Нашла себе настоящих подруг благодаря клубу"
    },
    {
      id: 2,
      image: "/images/Галина.jpg",
      name: "Галина, 35 лет",
      text: "Если искать место для душевного отдыха - это именно то, что нужно"
    },
    {
      id: 3,
      image: "/images/Ольга.jpg",
      name: "Ольга, 28 лет",
      text: "Я недавно переехала в Санкт-Петербург, и мне было одиноко, но в клубе я нашла себе подругу!"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <h3>Отзывы</h3>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div 
              className={`review-card ${index === currentReview ? 'active' : ''}`} 
              key={review.id}
            >
              <div className="review-image">
                <img src={review.image} alt={review.name} loading="lazy" />
              </div>
              <div className="review-text">
                <h4>{review.name}</h4>
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button className="prev" onClick={prevReview}>‹</button>
          <button className="next" onClick={nextReview}>›</button>
        </div>
      </div>
    </section>
  );
}