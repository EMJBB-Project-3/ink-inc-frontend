import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";

// used in any components that needs them
// this function will handle file uploads and returning useful values about the upload
const useStorage = (file) => {
    // progress of the upload
    const [progress, setProgress] = useState(0);
    // errors from the upload
    const [error, setError] = useState(null);
    // image url from storage
    const [url, setUrl] = useState(null);

    // function will fire everytime file dependency changes
    useEffect(() => {
        // reference to where the file should be saved in the default firebase buckets
        const storageRef = projectStorage.ref(file.name);
        //refrence to where the file should be in the database collection
        const collectionRef = projectFirestore.collection('images');//creates collection in database

        // uploading file to reference, asychronous
        storageRef.put(file).on('state_changed', (snap) => {
            //figure out progress of upload
            let percentage = (snap, bytesTransfered / snap.totalBytes) * 100
            //set value of progress
            setProgress(percentage);
        }, (err) => {//function will fire if there's an error in upload
            setError(err)
        }, async () => {//function will fire when upload is complete
            //get url of image uploaded
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();//createdAt will create a timestamp to sort images by
            collectionRef.add({ url, createdAt });
            setUrl(url);
        })
    }, [file]);

    return { progress, url, error }//when this hook is used in another component, these values will be accessed
}

export default useStorage;
