import { useState } from "react"
import InputPassWord from "./InputPassword"
import {Link} from 'react-router-dom'
import Logo from "./Logo"
export default function LogIn() {
    const [email, setEmail] = useState()

    // const [isSuccess, setIsSucces] = useState(null)

    function handleSetEmail(e) {
        setEmail(e.target.value)
    }

    // function handleLogIn(e) {
    //     e.preventDefault()
    //     if(email){
    //         if(password===passAgain) {
    //             setIsSucces(true)
    //         }
    //         else{
    //             setIsSucces(false)
    //         }
    //     }
    // }

    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div className="w-130 rounded-lg p-3 mx-auto hover:shadow-2xl select-none border-2 border-[var(--color-secondary)]">
                    <h1 className="text-4xl mb-11 text-center mt-7 text-[var(--color-primary)]">Đăng nhập</h1>
                    <form action="" /*onSubmit={handleLogIn}*/>
                        <div className="mb-3 flex justify-between flex-col md:flex-row">
                            <label htmlFor="username"
                                className="text-xl mr-2 select-none"
                            >
                                Nhập email: 
                            </label>
                            <input type="email"
                                id="username"
                                className="text-xl border rounded pl-4 pr-10"
                                placeholder="Enter email..."
                                value={email}
                                onChange={handleSetEmail}
                                autoComplete="off"
                                size={20}
                            />
                        </div>
                        <div className="mb-3 relative">
                            <InputPassWord placehoder={"Enter password..."}>Mật khẩu: </InputPassWord>
                            
                        </div>
                        <button type="summit"
                            className="text-xl text-white cursor-pointer rounded-lg w-[100%] mx-auto block mb-4 px-4 py-1 mt-8 bg-[var(--color-secondary)] hover:bg-blue-500 active:bg-[var(--color-primary)]"
                        >
                            Đăng nhập
                        </button>
                    </form>
                    <p >Quên mật khẩu? <a className="text-[var(--color-primary)]" href="#">Lấy lại mật khẩu</a></p>
                    <p >Chưa có tài khoản? <Link className="text-[var(--color-primary)]" to={"/signin"}>Đăng ký</Link></p>
                    {/* {
                        isSuccess && <p>Đăng ký thành công</p>
                    } */}
                </div>
            </div>
        </>
    )
}