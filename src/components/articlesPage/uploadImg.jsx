import React, { useRef } from 'react'
import { useGlobalContext } from '../context';

function UploadImg() {
    const {selectedImg, setSelectedImg} = useGlobalContext();
    const fileRef = useRef(null);

    const uploadImg = (event) => {
        const file = event.target.files[0];
        if (file) {
            const selectFile = new FileReader();
            selectFile.onload = (event) => setSelectedImg(event.target.result);
            selectFile.readAsDataURL(file);
        }
    }
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={uploadImg}
        ref={fileRef}
        style={{ display: "none" }}
      />
      <button className='border border-border-light px-2 py-4 rounded-lg my-2' type="button" onClick={() => fileRef.current.click()}>Upload Image</button>
      {selectedImg && <img className='w-40' src={selectedImg} alt='post'/>}
    </div>
  );
}

export default UploadImg;
