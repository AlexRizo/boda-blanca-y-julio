export const Article = ({ title, subtitle, time, text, url }) => {
    const navigate = () => {
        if (url) return window.open(url, '_blank');
    }
    
    return (
        <article className="text-center cursor-pointer" onClick={ navigate }>
            <h1 className="text-2xl font-semibold">{ title }</h1>
            <p className="text-3xl font-light">{ subtitle }</p>
            { time && <p className="text-3xl font-light">{ time }</p> }
            { text && <p className="text-lg font-light w-[340px]">{ text }</p> }
        </article>
    )
}
