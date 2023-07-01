import './App.css';
import React from "react";

function AboutScreen() {
  return (
    <div className="about">
      <h2 className="about-title">About AJ Newsletter</h2>
      <p className="about-description">
        AJ Newsletter is a premier source of information, inspiration, and
        insights in the world of newsletters. We are passionate about helping
        individuals and businesses harness the power of newsletters to engage,
        inform, and connect with their audiences.
      </p>
      <div className="about-features">
        <p>Our Features:</p>
        <ul className="feature-list">
          <li>Curated content tailored to your interests</li>
          <li>Expert tips and industry trends</li>
          <li>Exclusive offers and promotions</li>
          <li>Insider knowledge to stay ahead</li>
          <li>Inspiring and actionable content</li>
        </ul>
      </div>
      <div className="about-testimonial">
        <p>Here's what our subscribers have to say about us:</p>
        <blockquote className="testimonial-quote">
          "AJ Newsletter has been an absolute game-changer for my business. The
          content is consistently valuable, and I've gained incredible insights
          that have helped me improve my newsletter strategy. Highly
          recommended!"
          <cite>- AJ, Owner at AJ Company</cite>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutScreen;
