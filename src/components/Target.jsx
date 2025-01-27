import data from "../../data.json"
import { Overview } from "./overView"
export const Target=()=>{
 console.log(data)
    return(
        <>
       <section>
        {
            data.overview.map(object=>(
                <Overview key={object.id} sube={object.sube} network={object.network} user={object.user} audienceType={object.audienceType} today={object.today} isUp={object.isUp} img={object.img} color={object.color}></Overview>
                )
            )
        }

       </section>
        </>
    )
}