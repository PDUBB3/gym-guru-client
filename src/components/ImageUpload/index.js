import { useState } from "react";
import { Controller } from "react-hook-form";

const ImageUpload = ({ setValue }) => {
  const [file, setFile] = useState();
  const [imagePreviewUrl, setImagePreviewUrl] = useState();

  const handleChange = (event) => {
    console.log(event.target.files[0]);
    const reader = new FileReader();

    const selectedFile = event.target.files[0];
    reader.onloadend = () => {
      setFile(URL.createObjectURL(selectedFile));
      setImagePreviewUrl(reader.result);
      setValue("profileImageUrl", reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  console.log({ file, imagePreviewUrl });
  console.log(typeof imagePreviewUrl);
  return (
    <div className="form-element">
      <p> Choose a profile image:</p>
      <br></br>
      <input type="file" onChange={handleChange} />
      {imagePreviewUrl && (
        <img
          alt="profile-img"
          style={{ height: "100px", width: "100px" }}
          src={imagePreviewUrl}
        />
      )}
    </div>
  );
};

export default ImageUpload;
