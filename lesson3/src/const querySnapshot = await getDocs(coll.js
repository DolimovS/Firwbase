      const querySnapshot = await getDocs(collection(db, "emaildate"));
      const isArray=[]
      querySnapshot.forEach((doc) => {
        isArray.push({
        email:doc.data().email,
        password:doc.data().password
      })
      });
      setEmail(isArray)