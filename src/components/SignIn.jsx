    import { useState } from "react"
    import InputPassWord from "./InputPassword"
    import { Link } from "react-router-dom"

    export default function SignIn() {
        const [email, setEmail] = useState()

        // const [isSuccess, setIsSucces] = useState(null)


        function handleSetEmail(e) {
            setEmail(e.target.value)
        }

        // function handleSignIn(e) {
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
                <div className="flex items-center justify-center h-screen">
                    <div className="w-130 border-2 border-[var(--color-secondary)] rounded-lg p-3 hover:shadow-2xl select-none">
                        <h1 className="text-4xl text-[var(--color-primary)] mb-11 text-center mt-7">Đăng ký</h1>
                        <form action="" /*onSubmit={handleSignIn}*/>
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
                                <InputPassWord placehoder={"Enter password..."}>Mật khẩu: </InputPassWord>
                                
                            </div>
                            <div className="mb-3">
                                <InputPassWord placehoder={"Enter password again..."}>Xác nhận mật khẩu: </InputPassWord>
                            </div>
                            <button type="summit"
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

                        {/* {
                            isSuccess && <p>Đăng ký thành công</p>
                        } */}
                    </div>
                </div>
            </>
        )
    }