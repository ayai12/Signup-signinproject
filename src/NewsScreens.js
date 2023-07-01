import './App.css';
import React from "react";

function NewsScreen() {
  return (
    <div className="newsletter">
      <h2 className="newsletter-brand">AJ Newsletter</h2>
      <p className="newsletter-text glowing-border animate__animated animate__fadeIn animate__slower">
        Subscribe to our newsletter and stay in the loop with the latest updates, exclusive offers, and exciting news! By subscribing, you'll gain access to valuable insights, expert tips, and inspiring content delivered right to your inbox.

        Join our community of thousands of subscribers who are already benefiting from our informative newsletters. Don't miss out on the opportunity to be the first to know about our upcoming events, product launches, and special promotions.

        As a subscriber, you'll receive carefully curated content tailored to your interests, ensuring you get the most relevant information that matters to you. Be empowered with industry trends, actionable advice, and insider knowledge that will help you stay ahead in your field.

        We respect your privacy and promise to keep your information safe. Your email address will only be used to send you our newsletters, and you can unsubscribe at any time with a simple click.

        Take a step towards enhancing your knowledge and unlocking new opportunities. Subscribe now and be part of our vibrant community!
      </p>
    </div>
  );
}

export default NewsScreen;