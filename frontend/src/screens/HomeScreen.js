import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Button } from 'react-bootstrap'
import Product from '../components/Product'


const HomeScreen = () => {
  const [products,setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
        <Row>
          <Col md={10}>
            <h1>Products</h1>
          </Col>

          <Col md={2}>
            <Button className='btn-block' type='button'>Connect Wallet</Button>
          </Col>
        </Row>
        
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen