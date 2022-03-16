import React, { useEffect } from "react";
import useStorage from "../../hooks/Storage";

const ProgressBar = ({ file, setFile }) => {
    //useStorage hook
    const { url, progress } = useStorage(file);//fires useEffect function in useStorage hook

    //will delete progress bar once upload is complete
    useEffect(() => {
        if (url) {
            setfile(null);
        }
    }, [url, setFile])

    return (
        <div className='progress-bar' style={{ width: progress + '%' }}>Progress</div>
    )
}

export default ProgressBar;