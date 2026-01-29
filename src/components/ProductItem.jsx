export default function ProductItem({img, productName, price, className}) {
    
    return (
        <>
            <article className={className}>
                <img src={img} alt="item" className="rounded-2xl" />
                <h4 className="px-2 hover:underline">{productName}</h4>
                <p className="text-right pr-4"><strong>${price}</strong></p>
            </article>
        </>
    )
}