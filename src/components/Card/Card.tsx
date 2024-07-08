import { FC } from "react"


type TProps={
    id:number,
    src:string
    handleClick : (id:number)=>void
}

const Card:FC<TProps> = ({id,src,handleClick}) => {
  return (
    <div key={id} className="cursor-pointer" onClick={()=>handleClick(id)}>
    <div>
      <img src={src} alt="front-image" />
      <img src={"/img/cover.png"} alt="cover-image" />
    </div>
  </div>
  )
}

export default Card