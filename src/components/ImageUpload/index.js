import { useState } from "react";

const ImageUpload = ({ setValue }) => {
  const [file, setFile] = useState();
  const [imagePreviewUrl, setImagePreviewUrl] = useState();

  const handleChange = (event) => {
    const reader = new FileReader();

    const selectedFile = event.target.files[0];
    reader.onloadend = () => {
      setFile(URL.createObjectURL(selectedFile));
      setImagePreviewUrl(reader.result);
      setValue("profileImageUrl", reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

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
