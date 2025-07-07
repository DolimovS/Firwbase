import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/config';


import { useState, useEffect } from "react";

export const useCollection = (colloctionName) => {
    const [data, setData] = useState([])
    useEffect(() => {
        onSnapshot(collection(db, colloctionName), (querySnapshot) => {

            const data = []
            querySnapshot.forEach((doc) => {
                data.push({
                    id: doc.id,
                    email: doc.data().email,
                    password: doc.data().password
                })
            });
            setData(data)
        });
    }, [])

    return {data}
}