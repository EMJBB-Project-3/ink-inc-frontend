import React from 'react';

// component
const UploadForm = () => {
    // change event
    const changeHandler = (e) => {
        // access file user has selected
        let selected = e.target.files[0]
    }
    return (
        <form>
            <input type='file' onChange={changeHandler} />
        </form>
    )
}

export default UploadForm;