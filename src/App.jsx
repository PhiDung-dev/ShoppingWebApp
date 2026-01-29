import SignIn from "./components/SignIn"
import LogIn from "./components/LogIn"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/Cart"
import {Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
          <div className="flex flex-col bg-[#f5f5f5]">
            <Navbar></Navbar>
            <div className="flex-1 w-[80%] m-auto">
              <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/signin" element={<SignIn></SignIn>}></Route>   
                <Route path="/login" element={<LogIn></LogIn>}></Route>
              </Routes>
            </div>
          </div>
    </>
  )
}

export default App