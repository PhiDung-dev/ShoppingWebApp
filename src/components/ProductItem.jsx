import {Link} from 'react-router-dom'

export default function ProductItem({product, className}) {
    
    return (
        <>
            <Link className={className} to={"/productdetail/"+product.id}>
                <article className=" row-span-3 grid grid-rows-subgrid">
                    <img src={product.images[0]} alt="item" className="rounded-2xl" />
                    <h4 className="px-2 hover:underline">{product.title}</h4>
                    <p className="text-right pr-4"><strong>${product.price}</strong></p>
                </article>
            </Link>
            
        </>
    )
}