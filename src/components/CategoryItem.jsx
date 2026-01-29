export default function CategoryItem({name, img}) {
    
    return (
        <>
            <article className="bg-[var(--color-dark)] text-white rounded-2xl hover:scale-110">
                <h3 className="text-xl pl-4">{name}</h3>
                <img src={img} alt="" className="rounded-2xl"/>
            </article>
        </>
    )
}