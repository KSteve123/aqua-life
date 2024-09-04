import React, { useState } from "react";
import axios from "axios";
import bg from '../assets/bg.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {

  
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [survivalData, setSurvivalData] = useState({});
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Send image to Python backend
      const response = await axios.post("http://localhost:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const fishSpecies = response.data.prediction;
      
      setPrediction(fishSpecies);

      // Retrieve survival data from Spring Boot service
      const survivalResponse = await axios.get(`http://localhost:8080/survival/${fishSpecies}`);
      setSurvivalData(survivalResponse.data);
    } catch (error) {
      console.error("Error occurred:", Error);
    }
  };

  return (
    
    <div>
        <div className='background'>
          <div className="overlay"></div>
        <video src={bg} autoPlay loop muted/>
        
        <div className="content">
        <h1>Freshwater Fish Species Identifier</h1>
        <div class="mt-4">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload and Identify</button>
      </form>
      {prediction && (
        <div>
          <h3>Prediction: {prediction}</h3>
          <h4>Survival Data:</h4>
          <p>Temperature: {survivalData.temperature}</p>
          <p>pH: {survivalData.ph}</p>
          <p>Diet: {survivalData.diet}</p>
          <p>Habitat: {survivalData.habitat}</p>
          
        </div>
      )}
    </div>
    </div>
    </div>
    </div>
    
  );
}

export default Main;
