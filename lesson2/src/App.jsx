import { useEffect, useState } from "react";




import { collection, getDocs } from "firebase/firestore";
import { db } from "./firabase/config";


function App() {

  const [arrayDate,setArrayDate]=useState([])
  
  useEffect(()=>{
    const getDocumants= async()=>{
      const querySnapshot = await getDocs(collection(db, "samandar"));
      console.log(querySnapshot);
      querySnapshot.forEach((item)=>{

        console.log({ id:item.id, name:item.data()} );
      })}
    getDocumants()
  },[])

   console.log(arrayDate);


  return (
    <div>App</div>
  )
}

export default App