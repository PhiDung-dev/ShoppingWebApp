    import { useState } from "react"
    import InputPassWord from "./InputPassword"
    import { Link } from "react-router-dom"
    import { FaRegCheckCircle } from "react-icons/fa";

    export default function SignIn({users}) {
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [passwordAgain, setPasswordAgain] = useState("")
        const [isSucess, setIsSucess] = useState(null)

        function handleSetEmail(e) {
            setEmail(e.target.value)
        }

        function handleSetPassword(e) {
            setPassword(e.target.value)
        }

        function handleSetPasswordAgain(e) {
            setPasswordAgain(e.target.value)
        }

        function handleSignIn(e) {
            e.preventDefault()
            if(email && password && passwordAgain){
                const existsEmail = users.find((user)=>user.email===email)
                if(existsEmail){
                    setIsSucess(false)
                    return
                }
                else {
                    if(password===passwordAgain) {
                        setIsSucess(true)
                    }
                    else{
                        setIsSucess(false)
                        return
                    }
                }
            }
        }

        return (
            <>           
                <div className="flex items-center justify-center h-screen">
                    <div className="w-130 border-2 border-[var(--color-secondary)] rounded-lg p-3 hover:shadow-2xl select-none">
                        <h1 className="text-4xl text-[var(--color-primary)] mb-11 text-center mt-7">Đăng ký</h1>
                        <form action="" onSubmit={handleSignIn}>
                            <div className="mb-3 flex justify-between flex-col md:flex-row">
                                <label htmlFor="username"
                                    className="text-xl mr-2"
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
                                />
                            </div>
                            <div className="mb-3">
                                <InputPassWord placehoder={"Enter password..."}
                                    onChange={handleSetPassword}
                                    value={password}
                                >Mật khẩu: </InputPassWord>
                            </div>
                            <div className="mb-3">
                                <InputPassWord placehoder={"Enter password again..."}
                                    onChange={handleSetPasswordAgain}
                                    value={passwordAgain}
                                >Xác nhận mật khẩu: </InputPassWord>
                            </div>
                            <button type="submit"
                                className="text-xl text-white cursor-pointer rounded-lg w-[100%] bg-[var(--color-secondary)] hover:bg-blue-500 active:bg-[var(--color-primary)] mx-auto block mb-4 px-4 py-1 mt-8"
                            >
                                Đăng ký</button>
                        </form>
                        <p>
                            Bạn đã có tài khoản?
                            <Link to="/login" className="ml-1 text-[var(--color-primary)]">
                                Đăng nhập
                            </Link>
                        </p>

                        {
                            isSucess && <p className="text-xl text-right text-green-600 relative pr-8">Đăng ký thành công <FaRegCheckCircle className="absolute right-1 top-[50%] -translate-y-[50%]"></FaRegCheckCircle></p>
                        }
                    </div>
                </div>
            </>
        )
    }