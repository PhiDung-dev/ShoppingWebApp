import ProductItem from "./ProductItem";
export default function Products({products}) {

    const category = products.reduce((category, item)=>{
        const name = item.category.name
        category[name] = category[name] || []
        category[name].push(item)
        return category
    }, {})

    return (
        <>
            <div>
                <div>
                    <h1 className="text-4xl text-[var(--color-primary)] mt-10 mb-5">Tất cả sản phẩm</h1>
                    {
                        Object.entries(category).map(([categoryName, item])=>{
                            return <section>
                                        <h2 className="text-2xl text-[var(--color-primary)] mt-10 mb-5">{categoryName}</h2>
                                        <div className="grid md:grid-cols-6 grid-rows-[1fr_auto_auto] gap-6 sm:grid-cols-4 grid-cols-3">
                                            {
                                                item.map((item)=>{
                                                    if(item.category.name===categoryName) {
                                                        return <ProductItem className={"row-span-3 grid grid-rows-subgrid gap-0 hover:shadow-2xl bg-white rounded-2xl"} 
                                                                img={item.images[0]}
                                                                key={item.id}
                                                                productName={item.title}
                                                                price={item.price}
                                                                >
                                                                </ProductItem>
                                                    }
                                                })
                                            }
                                        </div>
                                    </section>

                        })
                    }        
                </div>
            </div>
        </>
    )
}