import { useRef, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";


export default function InputPassWord({placehoder, children}) {
    const [password, setPassWord] = useState("")
    const refPass = useRef()
    const [isShowPass, setIsShowPass] = useState(false) 

    function handleSetPassWord(e) {
        setPassWord(e.target.value)
    }

    function handleHidePass() {
        setIsShowPass(!isShowPass)
    }

    return (
        <>
            <div className="md:flex md:justify-between">
                <label htmlFor="pass"
                    className="text-xl mr-2"
                >
                    {children}
                </label>
                <span className="relative flex flex-col">
                    <input type={isShowPass?"text":"password"}
                        id="pass"
                        className="text-xl border rounded pl-4 pr-10"
                        placeholder={placehoder}
                        value={password}
                        onChange={handleSetPassWord}
                        ref={refPass}
                    />
                    <span className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer"
                        onClick={handleHidePass}
                    >
                    {
                        isShowPass?
                        <BiShow className="text-2xl"/>:
                        <BiHide className="text-2xl"/>
                    }
                    </span>
                </span>
            </div>
        </>
    )
}