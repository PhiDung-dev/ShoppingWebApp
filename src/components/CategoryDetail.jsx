import { useParams, Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
import ProductItem from "./ProductItem"

export default function CategoryDetail({products}) {
    const {categoryid} = useParams()

    const categoryFilter = products.filter((item)=>{
        return item.category.id === Number(categoryid)
    })

    const categoryName = categoryFilter[0]?.category.name;

    return (
        <>
            <span className="relative">
                <Link to={"/"}><BiArrowBack className="absolute top-[50%] -translate-y-[50%] text-5xl text-blue-500 border rounded-full"/></Link>
                <h1 className="text-3xl text-[var(--color-primary)] pl-15 mt-10">Chi tiết mặt hàng</h1>
            </span>
            <section>
                <h2 className="text-2xl text-[var(--color-primary)] mt-10 mb-5">{categoryName}</h2>
                    <div className="grid md:grid-cols-6 grid-rows-[1fr_auto_auto] gap-6 sm:grid-cols-4 grid-cols-3">
                        {
                            categoryFilter.map((item)=>{
                                    return <ProductItem className={"row-span-3 grid grid-rows-subgrid gap-0 hover:shadow-2xl bg-white rounded-2xl"} 
                                                key={item.id}
                                                product={item}
                                            >
                                            </ProductItem>
                            })
                        }
                    </div>
            </section>
        </>
    )
}