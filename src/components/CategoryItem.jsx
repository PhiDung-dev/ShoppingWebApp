export default function CategoryItem({name, img, className}) {
    
    return (
        <>
            <article className={"bg-[var(--color-dark)] text-white rounded-2xl hover:scale-110 "+ className}>
                <h3 className="text-xl px-4">{name}</h3>
                <img src={img} alt="" className="rounded-2xl"/>
            </article>
        </>
    )
}