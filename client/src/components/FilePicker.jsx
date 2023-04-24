import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          type="file"
          id="file-upload"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/*"
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-xs truncate">
          {file ? (
            <span className="text-green-500">file.name</span>
          ) : (
            <span className="text-red-500">No File Uploaded</span>
          )}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs font-semibold"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs font-semibold"
        />
      </div>
    </div>
  );
};

export default FilePicker;
