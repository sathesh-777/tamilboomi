import Image from "next/image";
import React from "react";

const ImageUploadDropZone = ({
  imageUrl,
  setImageUrl,
}: {
  imageUrl: string;
  setImageUrl: (e: string) => void;
}) => {
  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader: any = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        name=""
        id=""
        className="my-5"
        onChange={(e: any) => handleFileChange(e)}
      />
    </div>
  );
};

export default ImageUploadDropZone;
