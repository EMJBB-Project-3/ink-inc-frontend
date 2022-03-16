import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

// used in any components that needs them
// this function will handle file uploads and returning useful values about the upload
const useStorage = (file) => {
    // 
    const [progress, setProgress] = useState(0);
    // 
    const [error, setError] = useState(null);
    // 
    const [url, setUrl] = useState(null);
}