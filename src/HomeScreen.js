import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'animate.css';
import './App.scss';
import { Link } from 'react-router-dom';

const initialState = {
  products: [],
  loading: true,
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });

      try {
        const response = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(state.products); // Log the received products to check for duplicates
  }, [state.products]);

  return (
    <div className="page-container">
      <div className="main-container">
        <div className="main-content">
          <h1>Home page</h1>
          <div className="HomeScreen">
            {state.loading ? (
              <div>Loading...</div>
            ) : state.error ? (
              <div>Error: {state.error}</div>
            ) : state.products.length === 0 ? (
              <div>No products available.</div>
            ) : (



<Container>
  <Row className="card-row">
    {state.products.map((product, index) => (
      <Col key={index} xs={12} sm={6} md={4} lg={3}>
        <Card className="product-card animate__animated animate__fadeIn">
          <Card.Body>
            <Card.Title className="text-primary">{product.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{product.date}</Card.Subtitle>
            <Card.Text>{product.content}</Card.Text>
            <div className="author-info">
              <div className="author-name text-black">{product.author.name}</div>
              <div className="author-about text-lavender">{product.author.about}</div>
              <div className="author-description text-red">{product.author.description}</div>
            </div>
            <Link to={`/newsletterinfo/${product.slug}`}>
              <Button className="visit-button">Visit</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
