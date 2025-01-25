 import "./header.css"
 import React,{useState,useEffect} from "react"
 export const Header=()=>{
  const [dark,setdark]=useState(false)

  const darkMode=()=>{
    setdark(!dark)
  }
  useEffect(()=>{
     
  },[darkMode])

    return(
        <>
        <header className={!dark?"bg-gray-300 h-[235px] rounded-b-[20px]  pt-8 px-6  font-thin":"dark:bg-gray-800 h-[235px] rounded-b-[20px]  pt-8 px-6 "} >
            <h1 className="text-Very-Dark-blue text-2xl font-bold mb-1 ">Social Media dashbord</h1>
            <p className="text-gray-600 font-bold mb-6 text-[20px]">Total followers:23.004</p>
            <hr className="bg-gray-800 mb-7 " />
            <div className="flex place-content-between">
                <p className="text-blue-950 font-bold dark:text-white">Dark Mode</p>
       
                   <label htmlFor="darkmode" className={!dark?" border bg-gray-400 w-12 h-6 rounded-full cursor-pointer p-[3px] flex items-center":"labeldark border w-12 h-6 rounded-full cursor-pointer p-[3px] flex items-center"}>
                <input id="darkmode" type="checkbox"  className="peer sr-only"  onClick={darkMode}/>
                     <div className="w-[18px] h-[18px] bg-gray-300 rounded-full  peer-checked:translate-x-[24px] transition-all label"></div>
                        </label>


            </div>
        </header>
        </>
    )
 }