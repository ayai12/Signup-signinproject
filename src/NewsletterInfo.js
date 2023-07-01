import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css'

function NewsletterInfo() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/api/products'); // Assuming your backend API endpoint is '/api/products'
        const products = await response.json();
        if (products.length > 0) {
          setProduct(products[0]);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <Card className="newsletter-info-card">
      <Card.Body>
        {product && (
          <>
            <Card.Title className="newsletter-info-title">{product.title}</Card.Title>
            <Card.Text className="newsletter-info-content">{product.content}</Card.Text>
            <Card.Text className="newsletter-info-description">{product.author.description}</Card.Text>
            {/* Render other properties as needed */}
            <Card.Text className="newsletter-info-date">
              Published: {product.date}
            </Card.Text>
            <Card.Text className="newsletter-info-author">
              Author: {product.author.name}
            </Card.Text>
            <Link to="/contact">
              <Button variant="primary" className="newsletter-info-subscribe-button">
                Subscribe
              </Button>
            </Link>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default NewsletterInfo;
