import  Home  from "./pages/Home"
import { useState } from "react"
import Header from "./components/Header"
import Cart from "./components/Cart"
import ProductPage from "./pages/ProductPage"
import { Routes, Route } from "react-router-dom"
import './App.css'


function App() {
  
  const [ carrinho, setCarrinho ] = useState([])

  const addToCart = (product) => {
      setCarrinho([...carrinho, product])
    }

const total = carrinho.reduce((acumulador, product) => {

    return acumulador + Number(product.price)
  }, 0)

  const removeFromCart = (index) => {

    setCarrinho(carrinho.filter((_, i) => i !== index ))
  }

  return (
   
   <>
        <Header carrinho={carrinho} total={total} />
        <Routes>
            <Route path="/" element={
                <div className="container">
                    <div className="produtos-lado">
                        <Home addToCart={addToCart} />
                    </div>
                    <Cart carrinho={carrinho} total={total} removeFromCart={removeFromCart} />
                </div>
            } />
            <Route path="/produto/:id" element={<ProductPage addToCart={addToCart} />} />
        </Routes>
    </>

  
   
    
  )
}

export default App
