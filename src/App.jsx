import './App.css';
import { useState } from 'react';
import Header from './components/header'
import Confirmation from './components/confirmation';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    githubUsername: '',
  })
  const [errorMessage, seterrorMessage] = useState({})

  const [imagePreview, setImagePreview] = useState(null)

 // Resize the uploaded image
const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxDimension = 500; // Max width or height
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions while maintaining aspect ratio
        if (width > height && width > maxDimension) {
          height *= maxDimension / width;
          width = maxDimension;
        } else if (height > width && height > maxDimension) {
          width *= maxDimension / height;
          height = maxDimension;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const resizedImageURL = canvas.toDataURL(file.type);
        setImagePreview(resizedImageURL); // Set the resized image as preview
      };
    };

    reader.readAsDataURL(file);
  } else {
    alert("Please upload a valid image file.");
  }
};

  // Remove the uploaded image
  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  // Trigger the file input to change the image
  const handleChangeImage = () => {
    document.getElementById("image-upload").click();
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Get name and value
    console.log(`Updating ${name} to: ${value}`); // Debug log
    setFormData((prevState) => ({
        ...prevState, 
        [name]: value, // Dynamically update state
    }));

    // set the error message
    seterrorMessage((prevState) => ({
      ...prevState,
      [name]: ""
  }));
};
 // Handle form validation and submission
 const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleSubmit(e);
  }
};

const handleSubmit = (e) => {
  e.preventDefault(); // Prevent form from reloading the page
  
  const newErrors = {};

  if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
  if (!formData.email.trim()) { 
    newErrors.email = "Email is required"; 
  }else {
        // Validate email formatting with regex
        const emailRegex = /^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(formData.email)) {
          newErrors.email = "The email address is not formatted correctly";
        }
  }
  if (!formData.githubUsername.trim()) newErrors.githubUsername = "Github username is required";

  if (Object.keys(newErrors).length > 0) {
    seterrorMessage(newErrors);
    return;
  }
  console.log('Submitted Form Data:', formData); // Display the state in the console
};

  return (
  <>
    <Header />
    <div className="">

    <div className="flex flex-col items-center justify-center gap-4 upload-placeholder border-dashed border-2 border-gray-300 p-6 text-center rounded-lg">
      {imagePreview ? (
        <div className="flex items-center gap-4">
          <button
            onClick={handleRemoveImage}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-600 transition"
          >
            Remove Image
          </button>

          <img
            src={imagePreview}
            alt="Uploaded Preview"
            className="w-30 h-auto rounded-lg"
          />

          <button
            onClick={handleChangeImage}
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Change Image
          </button>
          <input
            type="file"
            id="image-upload"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <label className="cursor-pointer text-gray-500">
        <input
          type="file"
          accept="image/*"
          className="hidden" // Hide the input element
          onChange={handleFileChange}
        />
        Drag and drop or click to upload
      </label>
      )}
    </div> 
   
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} class="mt-6">
        <div class="mb-5">
            <input type="text" id="fullName" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            {errorMessage.fullName && (
              <p className="text-red-500 text-sm mt-4">{errorMessage.fullName}</p>
            )}
        </div>
        <div class="mb-5">
            <input type="text" id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" />
            {errorMessage.email && (
              <p className="text-red-500 text-sm mt-4">{errorMessage.email}</p>
            )}
        </div>
        <div class="mb-5">
            <input type="text" id="githubUsername" name="githubUsername" value={formData.githubUsername} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@yourusername" />
            {errorMessage.githubUsername && (
              <p className="text-red-500 text-sm mt-4">{errorMessage.githubUsername}</p>
            )}
        </div>
        <button type="submit" class="text-white text-lx btn bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-6 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate my ticket</button>
        </form>
    </div>
  </>
  );
}

export default App;
