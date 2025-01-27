export const Overview=({user,key,network,audienceType,today,isUp,img,color,sube})=>{

 const colores={
    Twitter:"bg-blue-300",
    facebook:"bg-blue-800",
    instagram:"bg-red-400",
    tiktok:"bg-black"

 }
   
    return(
        <>
        <article key={key} className="bg-gray-300 w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden ">
            <div className={`${colores[network]} h-[4px]`}></div>
            <div className="flex items-center place-content-center gap-2 mt-5  ">
             <img src={img} alt="logo" className="w-[50px]" />
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