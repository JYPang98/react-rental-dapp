import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import MyListedProductScreen from './screens/MyListedProductScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/listed-item' component={MyListedProductScreen} />
          <Route path='/' component={HomeScreen} exact/>
          
        </Container>   
      </main>
      <Footer />
      
    </Router>
  );
}

export default App;
