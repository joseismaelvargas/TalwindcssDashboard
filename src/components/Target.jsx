import data from "../../data.json"
import { OverView} from "./OverView.jsx"
export const Target=()=>{
 console.log(data)
    return(
        <>
       <section className="absolute-top[190px] w-[326px] mx-auto sm:flex sm:flex-wrap sm:w-[1240px] sm:h-[1440px]sm:absolute-top[0px]  sm:justify-between md:flex-wrap md:flex sm:mb-30">
        {
            data.overview.map(object=>(
                <OverView key={object.id} sube={object.sube} network={object.network} user={object.user} audienceType={object.audienceType} today={object.today} isUp={object.isUp} img={object.img} color={object.color}></OverView>
                )
            )
        }

       </section>
     
        </>
    )
}


