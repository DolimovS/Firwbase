import './App.css'
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase/config';
import { useEffect, useState } from 'react';

function App() {
  const [email, setEmail] = useState([])

  useEffect(() => {
    const getDocument =async () => {
      const querySnapshot = await getDocs(collection(db, "emaildate"));
      const isArray=[]
      querySnapshot.forEach((doc) => {
        isArray.push({
        email:doc.data().email,
        password:doc.data().password
      })
      });
      setEmail(isArray)
    }
    getDocument()
  }, [])
  // console.log(email);


  return (
    <>
      <h1>Salom</h1>
      {email?.map((item,index)=>(
        <div key={index}>
          <h2>Email:{item.email}</h2>
        <p>passwors:{item.password}</p>
        </div>
      ))}

    </>
  )
}

export default App
