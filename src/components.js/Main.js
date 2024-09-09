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

  const AdminLog=(e)=>{
    window.location.href = '/AdminLogin'

  }

  const handleSubmit = async (event) => {
    event.preventDefault();



    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Send image to Python backend
      const response = await axios.post("http://localhost:5000/predict", formData, {
      //const response = await axios.post("http://192.168.108.146:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const fishSpecies = response.data.prediction;
      
      setPrediction(fishSpecies);

      // Retrieve survival data from Spring Boot service
      const survivalResponse = await axios.get(`http://localhost:8080/survival/${fishSpecies}`);
      //const survivalResponse = await axios.get(`http://192.168.108.146:8080/survival/${fishSpecies}`);
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
        
        <div className='content'>
        <h1 class="display-1" className="head">Aqua Life</h1>
        <h1 className="description">Know more about your loved fish</h1>
        <div class="mt-4">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload and Identify</button><br></br><br></br>
        <button type="button" class="btn btn-dark" onClick={AdminLog}>Admin?</button>
      </form></div>
      {prediction && (
        <div class="offset-md-1 col-md-10 mt-1 b p-4" className="output">
          <h3 className="prediction">Prediction: {prediction}</h3>
          <h4 className="suv">Survival Data:</h4>
          <p>Name: {survivalData.name}</p>
          <p>Temperature: {survivalData.water_temp} °C</p>
          <p>pH: {survivalData.ph_level}</p>
          <p>Tank Size: {survivalData.tank_size} Feet</p>
          <p>Diet: {survivalData.diet}</p>
          <p>Behaviour: {survivalData.behaviour}</p>
          
          
        </div>
      )}
    
    </div>
    </div>
    </div>
    
    
    
  );
}

export default Main;
