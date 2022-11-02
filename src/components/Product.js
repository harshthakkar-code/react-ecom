import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import css from './css/Nav.css'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded home-card'>
      <Link to={`/product/${product._id}`} >
        <Card.Img src={'http://localhost:5000'+product.image} variant='top'  style={{maxHeight:'275px'}}/>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
      <Button variant="success" className="card-btn" style={{backgroundColor:'#187aa3'}}><Link  to={`/product/${product._id}`}>Details</Link></Button>
    </Card>
  )
}

export default Product
