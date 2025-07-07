import { deleteDoc,doc } from "firebase/firestore";
import { db } from "../firebase/config";


const Transaction = ({item}) => {


      const deleteDocument=(id)=>{
        deleteDoc(doc(db, "emaildate", id))
        .then(()=>alert("Malumot ochirildi"))
        .catch((error)=>alert(error.massage));
    
      }

  return (
   <div className='card' >
          <div className="text">
            <h2>Email:{item.email}</h2>
          <p>password:{item.password}</p>
          </div>
          <button onClick={()=>{deleteDocument(item.id)}} className='deletes'>Delete</button>
        </div>
  )
}

export default Transaction