import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useState } from "react";




const URL="https://openlibrary.org/search.json?title=";
const AppContext=createContext()


const AppProvider=({children})=>{
   const [searchterm, setSearchTerm] = useState("the lost world")
   const [books, setBooks] = useState([])
   const [loading, setLoading] = useState(true)
   const [resultTitle, setResultTitle] = useState("")

   const getDataBooks=useCallback(async()=>{
setLoading(true)
try {
    const response=await axios.get(`${URL}${searchterm}`)
    const data=response.data
console.log(data)
} catch (error) {
    console.log(error)
    setLoading(false)
    
}
   },[searchterm])
 
   useEffect(()=>{
     getDataBooks()
   },[searchterm,getDataBooks])

   return(
     <AppContext.Provider value={{loading,books,searchterm,resultTitle,setResultTitle}}>
       {children}
     </AppContext.Provider>
   )

}

export const useGlobalContext=()=>{
  return useContext(AppContext)
}

export {AppContext,AppProvider};