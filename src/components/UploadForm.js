// import React, { useState } from 'react';
// import ProgressBar from './ProgressBar';

// // component
// const UploadForm = () => {
//     const [file, setFile] = useState(null);
//     const [error, setError] = useState(null);
//     // an array of allowed file types
//     const types = ['image/png', 'image/jpeg'];
    
//     // change event
//     const changeHandler = (e) => {
//         // access file user has selected
//         let selected = e.target.files[0]
//         // makes sure files uploaded are included in the types array
//         if (selected && types.includes(selected.type)) {
//             setFile(selected);
//             setError(''); //if correct file no error msg appears
//         } else {
//             setFile(null); //resets the value
//             // registers error if correct file not selected
//             setError('Please select a png or jpeg file type');
//         }
//     }
//     return (
//         <form>
//             <input type='file' onChange={changeHandler} />
//             {/* will display error msg if it exists */}
//             <div className='ouput'>
//                 {error && <div className='error'>{error}</div>}
//                 {/* inserts progress bar only when file selected */}
//                 {file && <ProgressBar file={file} setFile={setFile} />}
//             </div>
//         </form>
//     )
// }

// export default UploadForm;