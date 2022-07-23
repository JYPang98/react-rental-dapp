import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'

const MyListedProductScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList
  
    useEffect(() => {
      dispatch(listProducts())
    }, [dispatch])  

  return (
    <>
        <Row>
          <Col md={10}>
            <h1>My Listed Items</h1>
          </Col>

          <Col md={2}>
            <Button className='btn-block' type='button'>Add New Items</Button>
          </Col>
        </Row>

        {loading ? (
          <Loader/>
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ): (
          <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
          </Row>
        )}
        
        
    </>
  )
}

export default MyListedProductScreen