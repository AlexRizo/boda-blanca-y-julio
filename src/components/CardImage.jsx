export const CardImage = ({ img, rotation }) => {
    return (
        <div className={`px-2 py-2 pb-14 border-2 border-[#EBE8E8] bg-white w-max transform ${ rotation }`}>
            <img src={ img } className="w-[210px] xl:w-auto" />
        </div>
    )
}
