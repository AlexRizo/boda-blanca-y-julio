export const FamilyCard = ({ title, custom = 'bg-[#D3D3D3]', woman, man }) => {
    return (
        <div className={`py-14 px-10 xl:px-28 w-full xl:w-[575px] h-max ${ custom } flex flex-col items-center shadow-lg shadow-white/15 rounded`}>
            <h1 className="cormorant-garamond text-[#eaeaea] text-[55px] font-bold">{ title }</h1>
            <div className="border border-[#707070] w-24 mb-10 mt-2"></div>
            <div className="text-xl xl:text-2xl text-[#cbcbc0] text-center font-medium">
                <p>{ woman.mother }</p>
                <p>{ woman.father }</p>
                <p>&</p>
                <p>{ man.mother }</p>
                <p>{ man.father }</p>
            </div>
        </div>
    )
}
