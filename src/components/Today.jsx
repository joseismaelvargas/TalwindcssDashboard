import data from "../../data.json"
export const Today=()=>{
    return(
      <>
      <h2 className="ml-10 font-bold text-2xl mb-[27px] text-gray-600"> Overview-Today</h2>
      <section className="absolute-top[190px] w-[326px] mx-auto sm:flex sm:flex-wrap sm:w-[1240px] sm:h-[1440px]sm:absolute-top[0px]  sm:justify-between md:flex-wrap md:flex sm:mb-30"> 
        

        {
        data.overview.map(object=>(
              <article key={object.id} className="bg-gray-300 w-[326px] h-[166px] mx-auto rounded-[5px] p-[27px] mb-4 hover:brightness-95 cursor-pointer " >
              <div className="flex justify-between mb-[21px] cursor-pointer" >
                 <p className="text-gray-600 font-[600]">{object.estadisticas}</p>
                         <img src={object.img} alt="" className="rounded-[10px] w-[40px]" />
               
                
              </div>
              <div className="flex justify-between ">
                <p className="font-bold text-[42px]">{object.today}</p>
                <div className="flex place-content-center gap-1   ">

              

            {
                object.isUp?<p className="text-center font-sans text-green-500 font-bold mt-1 text-xs" >▲{object.porcentaje}Today</p>:<p className="text-center text-red-800 font-bold font-sans mt-1 text-xs" >▼{object.porcentaje}Today</p>
            }
            
            </div>
            
         
              </div>
          
              </article>
                )
            )
        }
      </section>

      </>
    )
}