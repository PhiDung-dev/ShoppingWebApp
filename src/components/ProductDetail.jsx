import { useParams, useNavigate } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";

export default function ProductDetail({products}) {
    
    const {productid} = useParams();
    const navigate = useNavigate();

    function back(){
        return navigate(-1)
    }

    const product = products.find((product)=>product.id == productid)

    return (
        <>
            <div className="h-screen px-20 py-10">
                <span className="relative"> 
                    <BiArrowBack className="absolute top-[50%] -translate-y-[50%] text-5xl text-blue-500 border rounded-full"
                        onClick={back}
                    />
                    <h1 className="text-3xl py-4 px-15">Chi tiết sản phẩm</h1>
                </span>
                
                <div className="grid grid-rows-4 grid-cols-5 h-full">
                    <div className={`row-span-3 col-span-3 bg-no-repeat bg-contain mr-15`}
                        style={{backgroundImage: `url('${product.images[0]}')`}}    
                    >
                    </div>
                    <h2 className="col-span-2 text-2xl">{product.title}</h2>
                    <p className="col-span-2">{product.description}</p>
                    <p className="col-span-2">{product.price}</p>
                    <button className="col-start-4">Thêm giỏ hàng</button>
                    <button>mua</button>
                </div>
                <div>
                    <img src="https://i.imgur.com/DTfowdu.jpg" alt="" 
                    />
                    <img src="https://i.imgur.com/DTfowdu.jpg" alt="" 
                    />
                    <img src="https://i.imgur.com/DTfowdu.jpg" alt="" 
                    />
                </div>
            </div>
        </>
    )
}