import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

// used in any components that needs them
// this function will handle file uploads and returning useful values about the upload
const useStorage = (file) => {
    // progress of the upload
    const [progress, setProgress] = useState(0);
    // errors from the upload
    const [error, setError] = useState(null);
    // image url from storage
    const [url, setUrl] = useState(null);
    
    // takes a function as a parameter, 2nd arg is dependencies
    // function will fire everytime file dependency changes
    useEffect(() => {
        // logic to upload the file

    }, [file])
}