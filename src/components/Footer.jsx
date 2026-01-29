import Logo from "./Logo"
import { BiLogoFacebook, BiLogoGithub  } from "react-icons/bi"

export default function Footer() {
    
    return (
        <>
            <footer className="mt-20 mb-10 bg-white pt-4">
                <div className="grid grid-cols-4">
                    <div className="col-span-2 pl-10">
                        <Logo></Logo>
                        <p>Nền tảng mua sắm trực tuyến</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl mb-3 ">Contact</h3>
                        <p>Email: nguyenphidung@dtu.edu.vn</p>
                        <p>Phone: 0799031496</p>
                        <p>Location: Quảng Nam, Việt Nam</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl mb-3 ">About me</h3>
                        <a href="https://www.facebook.com/phidung.1412" className="pl-15 py-2 relative"><BiLogoFacebook className="absolute left-5 top-[50%] -translate-[50%] text-xl"></BiLogoFacebook> Facebook</a>
                        <a href="https://github.com/PhiDung-dev" className="pl-15 py-2 relative"><BiLogoGithub className="absolute left-5 top-[50%] -translate-[50%] text-xl"></BiLogoGithub>Github</a>
                    </div>
                </div>
                <div className="pt-10 mt-10 text-center border-t border-[var(--color-secondary)] w-[80%] mx-auto">
                    <p>© Copyright 2026 by Nguyen Phi Dung. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}