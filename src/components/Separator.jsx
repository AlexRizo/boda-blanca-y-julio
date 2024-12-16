export const Separator = ({ position = '' }) => {
  return (
    <div className={`absolute w-full ${position}`}>
        <div className="w-full h-[100px] bg-gradient-to-t from-black to-transparent "></div>
        <div className="w-full h-[100px] bg-gradient-to-b from-black to-transparent "></div>
    </div>
  )
}
