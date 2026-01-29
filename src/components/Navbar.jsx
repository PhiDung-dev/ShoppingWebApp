import { useState } from "react"
import { Link } from 'react-router-dom'
import Logo from "./Logo.jsx"
import { BsSearch} from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false)

    function handleOpen(){
        setIsOpen((pre)=>!pre)
    }

    return (
        <> 
            <nav className="flex items-center justify-between sticky top-0 w-full h-20 select-none z-50 bg-white">
                <a href="/home" className="hidden md:inline-block "><Logo></Logo></a>
                <ul className="md:flex hidden justify-between items-center p-5 gap-4">
                    <li>
                        <Link className="p-4 text-xl text-nowrap hover:text-[var(--color-primary)] active:underline" to={"/home"}>Trang chủ</Link>
                    </li>
                    <li>
                        <Link className="p-4 text-xl whitespace-nowrap hover:text-[var(--color-primary)] active:underline" to={"/products"}>Sản phẩm</Link>
                    </li>
                    <li className="relative">
                        <input 
                            type="text" 
                            className="border border-[var(--color-secondary)] rounded focus:outline-[var(--color-primary)] w-150 h-10 pr-15 pl-5"
                            placeholder="Tìm kiếm sản phẩm"  
                        />
                        <button className="absolute top-[50%] right-0 -translate-[50%]"><BsSearch /></button>
                    </li>
                    <li>
                        <Link to={"/cart"} className="">
                            <FaCartShopping className="size-8 text-blue-500"/>
                        </Link>
                    </li>
                </ul> 
                <div className="md:flex hidden justify-center items-center">
                    <Link className="p-4 text-xl text-nowrap hover:text-[var(--color-primary)] active:underline" to={"/signin"}>Đăng ký</Link>
                    <Link className="p-4 text-xl text-nowrap hover:text-[var(--color-primary)] active:underline mx-5" to={"/login"}>Đăng nhập</Link>
                </div>
                <input type="text" 
                    className="md:hidden flex-1 border border-[var(--color-secondary)] rounded focus:outline-[var(--color-primary)] h-10 pr-15 pl-5 ml-3"
                    placeholder="Tìm kiếm sản phẩm"  
                />
                <button className="md:hidden text-3xl mx-5"
                    onClick={handleOpen}                
                >
                    ☰
                </button>
                {
                    isOpen&&
                    <ul className="flex flex-col md:hidden justify-center absolute top-20 w-full bg-white p-2 m-auto">
                        <li className="text-center">
                            <Link onClick={handleOpen} className="block py-2 text-xl active:underline" to={"/home"}>Trang chủ</Link>
                        </li>
                        <li className="text-center">
                            <Link onClick={handleOpen} className="block py-2 text-xl active:underline" to={"/signin"}>Đăng ký</Link>
                        </li>
                        <li className="text-center">
                            <Link onClick={handleOpen} className="block py-2 text-xl active:underline" to={"/login"}>Đăng nhập</Link>
                        </li>
                    </ul>
                }
            </nav>
        </>
    )
}