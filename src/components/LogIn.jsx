import { useState } from "react"
import InputPassWord from "./InputPassword"
import {Link} from 'react-router-dom'
import { FaRegCheckCircle } from "react-icons/fa";

export default function LogIn({users}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSucess, setIsSucess] = useState(null)

    function handleSetEmail(e) {
        setEmail(e.target.value)
    }

    function handleSetPassword(e) {
        setPassword(e.target.value)
    }

    function handleLogIn(e) {
        e.preventDefault()
        if(email && password){
            const user = users.find((user)=>email===user.email)
            console.log(user.password, password)
            if(user?.password===password) {
                setIsSucess(true)
                return
            }
            else{
                setIsSucess(false)
                return 
            }
        }
    }

    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div className="w-130 rounded-lg p-3 mx-auto hover:shadow-2xl select-none border-2 border-[var(--color-secondary)]">
                    <h1 className="text-4xl mb-11 text-center mt-7 text-[var(--color-primary)]">Đăng nhập</h1>
                    <form action="" onSubmit={handleLogIn}>
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
                            <InputPassWord placehoder={"Enter password..."}
                                value={password}
                                onChange={handleSetPassword}
                            >Mật khẩu: 
                            </InputPassWord>
                        </div>
                        <button type="submit"
                            className="text-xl text-white cursor-pointer rounded-lg w-[100%] mx-auto block mb-4 px-4 py-1 mt-8 bg-[var(--color-secondary)] hover:bg-blue-500 active:bg-[var(--color-primary)]"
                        >
                            Đăng nhập
                        </button>
                    </form>
                    <p >Quên mật khẩu? <a className="text-[var(--color-primary)]" href="#">Lấy lại mật khẩu</a></p>
                    <p >Chưa có tài khoản? <Link className="text-[var(--color-primary)]" to={"/signin"}>Đăng ký</Link></p>
                    {
                        isSucess && <p className="text-xl text-right text-green-600">Đăng nhập thành công <FaRegCheckCircle className="inline-block"></FaRegCheckCircle></p>
                    }
                </div>
            </div>
        </>
    )
}