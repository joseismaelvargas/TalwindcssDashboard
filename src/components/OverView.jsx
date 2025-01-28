export const OverView=({user,key,network,audienceType,today,isUp,img,color,sube})=>{

 const colores={
    Twitter:"bg-blue-300",
    facebook:"bg-blue-800",
    instagram:"bg-red-400",
    tiktok:"bg-black",
    Youtube:"bg-red-900"

 }
   
    return(
        <>
        <article key={key} className="bg-gray-300 h-[216px] rounded-[5px] overflow-hidden sm:w-[350px] sm:mt-5 mb-[70px] hover:brightness-95 cursor-pointer ">
            <div className={`${colores[network]} h-[4px]`}></div>
            <div className="flex items-center place-content-center gap-2 mt-5  ">
             <img src={img} alt="logo" className="w-[50px] rounded-[10px]" />
            <p className="text-xs text-gray-600 font-bold">{user}</p>   
            </div>
            
            <p className="text-center text-[56px] font-bold text-gray-800 " >{today}</p>
            <p className="text-center uppercase tracking-[5px] text-gray-600 text-xs ">{audienceType}</p>

            {
                isUp?<p className="text-center font-sans text-green-500 font-bold mt-5 text-xs" >▲{sube}Today</p>:<p className="text-center text-red-800 font-bold font-sans mt-5 text-xs" >▼{sube}Today</p>
            }
            
          

        </article>
        </>
    )

}


export const overViewToday = () => {
  return (
    <div>
      holasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>
  )
}


