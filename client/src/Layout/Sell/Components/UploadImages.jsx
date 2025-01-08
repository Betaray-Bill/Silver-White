import { CarFrontIcon } from 'lucide-react';
import React, { useRef, useState } from 'react';
import upload from '../../../assets/upload.png';

function UploadImages( { images, setImages }) {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // const [images, setImages] = useState([])

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Allow up to 10 images
    if (images?.length + files.length > 10) {
      alert('You can only upload up to 10 images.');
      return;
    }

    // Validate file size and format
    const validFiles = files.filter((file) => {
      const isValidFormat = ['image/png', 'image/jpeg'].includes(file.type);
      const isValidSize = file.size <= 10200 * 1024; // 500 KB
      if (!isValidFormat) alert(`${file.name} has an unsupported format.`);
      if (!isValidSize) alert(`${file.name} exceeds the 500 KB size limit.`);
      return isValidFormat && isValidSize;
    });

    // Update the state with the new valid files
    setImages((prevImages) => [...prevImages, ...validFiles]);
  };

  console.log(images)

  return (
    <div
      className="my-4 py-2 px-3 border border-gray-300 w-[80vw] rounded-md"
      style={{
        borderRadius: '8px',
      }}
    >
      <div className="flex justify-start items-center pb-3 border-b border-gray-300">
        <div>
          <p className="bg-blue-400 py-1 px-3 font-semibold rounded-full">3</p>
        </div>
        <div className="flex items-center text-blue-600 ml-4">
          <CarFrontIcon size={24} />
          <h1 className="text-lg ml-2 font-semibold text-center my-2">
            Upload Car Images
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div
          className="rounded-md h-[40vh] grid place-content-center outline-dotted p-4 my-4 cursor-pointer"
          style={{
            borderRadius: '8px',
          }}
          onClick={handleUploadClick}
        >
          <div className="grid place-content-center">
            <div className="flex justify-center">
              <img src={upload} alt="" className="w-[60px]" />
            </div>
            <div className="mt-4">
              <h2 className="font-semibold text-lg">Upload your car images</h2>
              <div className="font-light text-sm text-gray-600 mt-4">
                <p>Maximum size: each 500 KB</p>
                <p>Supported format: .png, .jpg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden input for file uploads */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/png, image/jpeg"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Preview of uploaded images */}
        {images?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {images.map((image, index) => (
              <div key={index} className="relative border rounded-xl">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index}`}
                  className="w-full h-[100px] object-contain rounded-md"
                />
                <button
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1"
                  onClick={() =>
                    setImages((prevImages) =>
                      prevImages.filter((_, i) => i !== index)
                    )
                  }
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadImages;
