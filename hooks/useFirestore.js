import { useState, useEffect  } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {

    //set up state for doc from collection
    const [ docs, setDocs ] = useState([]);

    //communicate w database to get docs
    useEffect(() => {
        //reach into collection to get docs
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')//sorts docs by date and time
        .onsnapshot((snap) => {
            let document = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})//creates properties for the data
            });//cycles through database
            setDocs(documents);
        });
        return () => unsub();//unsubscribes from collection
    }, [collection])

    return { docs };
}

export default useFirestore;