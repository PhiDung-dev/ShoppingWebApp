import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";
import Footer from "./Footer";
import {Link} from "react-router-dom"

export default function Home({categories,products}) {

    return (
        <>
            <div>
                <h1 className="text-4xl text-center p-10 text-white select-none bg-blue-400 rounded-2xl">“Tất cả sản phẩm, trong một nơi.”</h1>
                <section>
                    <h2 className="text-2xl text-[var(--color-primary)] mt-10 mb-5">Danh mục sản phẩm</h2>
                    <div className="grid md:grid-cols-6 grid-rows-[auto_1fr] gap-6 grid-cols-3">
                        {
                            categories.slice(0,5).map((item)=>{
                                return <Link to={"/categorydetail/"+item.id}
                                            key={item.id}
                                            className="row-span-2 grid grid-rows-subgrid"
                                        >
                                            <CategoryItem className={"row-span-2 grid grid-rows-subgrid gap-0 hover:shadow-2xl rounded"} 
                                                    img={item.image}
                                                    name={item.name}
                                            >
                                            </CategoryItem>
                                        </Link>
                            })
                        }
                    </div>
                </section>
                
                <section>
                    <h2 className="text-2xl text-[var(--color-primary)] mt-10 mb-5">Sản phẩm nổi bật</h2>
                    <div className="grid md:grid-cols-6 grid-rows-[1fr_auto_auto] gap-6 grid-cols-3">
                        {
                            products.slice(0, 12).map((item)=>{
                                return <ProductItem className={"row-span-3 grid grid-rows-subgrid gap-0 hover:shadow-2xl bg-white rounded-2xl"} 
                                                img={item.images[0]}
                                                key={item.id}
                                                productName={item.title}
                                                price={item.price}
                                        >
                                        </ProductItem>
                            })
                        }
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl text-[var(--color-primary)] mt-10 mb-5">Ưu đãi hôm nay</h2>
                    <div className="grid md:grid-cols-6 grid-rows-[1fr_auto_auto] gap-6 grid-cols-3">
                        {
                            products.slice(12, 24).map((item)=>{
                                return <ProductItem className={"row-span-3 grid grid-rows-subgrid gap-0 hover:shadow-2xl bg-white rounded-2xl"} 
                                                img={item.images[0]}
                                                key={item.id}
                                                productName={item.title}
                                                price={item.price}
                                        >
                                        </ProductItem>
                            })
                        }
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </>
    )
}