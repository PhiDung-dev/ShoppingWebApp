import SignIn from "./components/SignIn"
import LogIn from "./components/LogIn"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/Cart"
import {Routes, Route} from 'react-router-dom'
import CategoryDetail from "./components/CategoryDetail"
import { useEffect, useState } from "react"
function App() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([]);
   
   
    useEffect(()=>{
        async function getProducts() {
            const response = await fetch("https://api.escuelajs.co/api/v1/products")
            const data = await response.json()
            console.log(data)
            setProducts(data);
        }
        getProducts()
    }, [])
    useEffect(()=>{
        async function getCategories() {
            const response = await fetch("https://api.escuelajs.co/api/v1/categories")
            const data = await response.json()
            console.log(data)
            setCategories(data)
        }
        getCategories()
    }, [])

  return (
    <>
          <div className="flex flex-col bg-[#f5f5f5]">
            <Navbar></Navbar>
            <div className="flex-1 w-[80%] m-auto">
              <Routes>
                <Route path="/" element={<Home products={products} categories={categories}></Home>}></Route>
                <Route path="/products" element={<Products products={products}></Products>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/signin" element={<SignIn></SignIn>}></Route>   
                <Route path="/login" element={<LogIn></LogIn>}></Route>
                <Route path="/categorydetail/:categoryid" element={<CategoryDetail products={products}></CategoryDetail>}></Route>
              </Routes>
            </div>
          </div>
    </>
  )
}

export default App