export const Button = ({ text, message }) => {
    
    return (
        <a href={`https://wa.me/523125952679?text=${ message }`} target="_blank">
            <button 
                className="py-4 w-[260px] bg-white text-black text-xl font-bold cormorant-garamond"
            >
                { text }
            </button>
        </a>
    )
}
