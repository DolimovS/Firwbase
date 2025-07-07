import './App.css'
import { useEffect, useState } from 'react';

import Transaction from './components/Transaction';

//costum hooks
import { useCollection } from './hooks/useCollection';

//firebase
import { db } from './firebase/config';
import { collection, addDoc,doc, deleteDoc } from "firebase/firestore";


function App() {
  const {data:email} = useCollection("emaildate")
  const [newEmail, setNewEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  //handleSubmit


  // add new date 

  //delete date
  const deleteDocument=(id)=>{
    deleteDoc(doc(db, "emaildate", id))
    .then(()=>alert("Malumot ochirildi"))
    .catch((error)=>alert(error.massage));

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(collection(db, "emaildate"), {
      email: newEmail,
      password: newPassword
    })
      .then(() => {
        alert("malumot jonatildi")
      })
      .catch((error) => alert(error.massage))

    console.log({
      email: newEmail,
      password: newPassword,
    });
    setNewEmail("")
    setNewPassword("")

  }



  return (
    <div className='container' >

      <form onSubmit={handleSubmit} >
        <label >
          <span>Email</span>
          <input onChange={(e) => { setNewEmail(e.target.value) }} value={newEmail} type="email" />
        </label>
        <label >
          <span>Password</span>
          <input onChange={(e) => { setNewPassword(e.target.value) }} value={newPassword} type="text" />
        </label>
        <button className='add_btn'>Add</button>
      </form>
      <h1>Bu yerda backenddagi barcha malumotlar ko'rsatiladi :)</h1>
      <div className="cards">
        {email.length==0?
        <h2>Hozircha malumotlar yoq :(</h2>:
        email?.map((item) => (
        <Transaction  key={item.id} item={item}/>
      ))}
      </div>

    </div>
  )
}

export default App
