import SignIn from "./components/SignIn"
import LogIn from "./components/LogIn"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/Cart"
import {Routes, Route} from 'react-router-dom'
import CategoryDetail from "./components/CategoryDetail"
import { useEffect, useState } from "react"
import ProductDetail from "./components/ProductDetail"

function App() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([])
   
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

    useEffect(()=>{
      async function getUser() {
        const response = await fetch("https://api.escuelajs.co/api/v1/users")
        const data = await response.json()
        console.log(data)
        setUsers(data)
      }
      getUser()
    }, [])

  return (
    <>
      {/* <ProductDetail></ProductDetail> */}
          <div className="flex flex-col bg-[#f5f5f5]">
            <Navbar></Navbar>
            <div className="flex-1 w-[80%] m-auto">
              <Routes>
                <Route path="/" element={<Home products={products} categories={categories}></Home>}></Route>
                <Route path="/products" element={<Products products={products}></Products>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/signin" element={<SignIn users={users}></SignIn>}></Route>   
                <Route path="/login" element={<LogIn users={users}></LogIn>}></Route>
                <Route path="/categorydetail/:categoryid" element={<CategoryDetail products={products}></CategoryDetail>}></Route>
                <Route path="/productdetail/:productid" element={<ProductDetail products={products}></ProductDetail>}></Route>
              </Routes>
            </div>
          </div>
    </>
  )
}

export default App