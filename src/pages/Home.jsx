import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome to NutriTrack!</h1>
        <p>Your Personal Nutrition & Fitness Companion</p>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features">
          <div className="feature-card">
            <h3>AI-Powered Meal Recommendations</h3>
            <p>
              Get personalized meal plans based on your dietary preferences, goals,
              and fitness routine.
            </p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Progress Tracking</h3>
            <p>
              Keep track of your meals, exercise, and progress with ease.
            </p>
          </div>
          {/* Add more feature cards here */}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Start Your Journey Today!</h2>
        <Link to="/join">
          <button className="cta-button">Join Now</button>
        </Link>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <h2>Join the NutriTrack Community</h2>
        <p>
          Be part of a growing community of like-minded individuals who are committed to
          improving their health.
        </p>
      </section>
    </div>
  );
}

export default Home;
