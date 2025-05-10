import { useState, useEffect } from 'react';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <section className="reviews-section">
        <div className="container">
          <h3>Отзывы</h3>
          <p>Загрузка отзывов...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="reviews-section">
        <div className="container">
          <h3>Отзывы</h3>
          <p>Ошибка загрузки: {error}</p>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return (
      <section className="reviews-section">
        <div className="container">
          <h3>Отзывы</h3>
          <p>Нет доступных отзывов</p>
        </div>
      </section>
    );
  }

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
                <img
                  src={review.image || '/images/default-avatar.jpg'}
                  alt={review.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/images/default-avatar.jpg';
                  }}
                />
              </div>
              <div className="review-text">
                <h4>{review.name}</h4>
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}