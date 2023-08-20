import React, {useState,useEffect} from 'react'
import Nav from './nav'
import Rout from './rout';

import {BrowserRouter} from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail';
const App = () => {
  // add to cart
  const [cart, setCart] = useState([])
  //product Detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
const searchbtn=(searchText)=>{
      const update = Productdetail.filter((x) => 
      {
         return x.Cat === searchText;
      })
      setProduct(update);
  }
  //product detail
  const view = (product) => 
  {
    setDetail([{...product}])
    setClose(true)
  }

   useEffect(() => {
    try {
      const cart1 = JSON.parse(localStorage.getItem('react-Ecommerce-app-data'));
      if (cart1) {
        setCart(cart1);
       

      }
    } catch (error) {
      console.error('Error retrieving cart data from localStorage:', error);
    }
  }, []);
  
  useEffect(() => {
    try {
     
      localStorage.setItem('react-Ecommerce-app-data', JSON.stringify(cart));
    } catch (error) {
      console.error('Error storing cart data in localStorage:', error);
    }
  }, [cart]);
  // add to cart
  const addtocart = (product) => 
  {
    const exsit = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This Product is already added to cart")
    }
    else
    { 
      setCart([...cart, {...product, qty:1}])
      alert("product is added to cart")
    }
  } 
  console.log(cart)
  return (
    <>
    <BrowserRouter>
    <Nav searchbtn={searchbtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
