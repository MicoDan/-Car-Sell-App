import React, { useState } from 'react';
import './App.css'

function CarSellApp() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    features: [],
    transmission: '',
    priceRange: 5000,
    contactNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? formData.features.includes(value) ? formData.features.filter(feature => feature !== value) : [...formData.features, value] : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform any other logic or API calls here
  };

  return (
    <div className="car-sell-app">
      <h2>Car Sell App</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Car Name:</label>
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Car Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="date"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Mileage:</label>
          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Condition:</label>
          <label>
            <input
              type="radio"
              name="condition"
              value="Excellent"
              checked={formData.condition === 'Excellent'}
              onChange={handleInputChange}
              required
            />
            Excellent
          </label>
          <label>
            <input
              type="radio"
              name="condition"
              value="Good"
              checked={formData.condition === 'Good'}
              onChange={handleInputChange}
            />
            Good
          </label>
          <label>
            <input
              type="radio"
              name="condition"
              value="Fair"
              checked={formData.condition === 'Fair'}
              onChange={handleInputChange}
            />
            Fair
          </label>
          <label>
            <input
              type="radio"
              name="condition"
              value="Poor"
              checked={formData.condition === 'Poor'}
              onChange={handleInputChange}
            />
            Poor
          </label>
        </div>
        <div>
          <label>Features:</label>
          <label>
            <input
              type="checkbox"
              name="features"
              value="Air Conditioning"
              checked={formData.features.includes('Air Conditioning')}
              onChange={handleInputChange}
            />
            Air Conditioning
          </label>
          <label>
            <input
              type="checkbox"
              name="features"
              value="Power Steering"
              checked={formData.features.includes('Power Steering')}
              onChange={handleInputChange}
            />
            Power Steering
          </label>
          <label>
            <input
              type="checkbox"
              name="features"
              value="Power Windows"
              checked={formData.features.includes('Power Windows')}
              onChange={handleInputChange}
            />
            Power Windows
          </label>
          <label>
            <input
              type="checkbox"
              name="features"
              value="ABS"
              checked={formData.features.includes('ABS')}
              onChange={handleInputChange}
            />
            ABS
          </label>
          <label>
            <input
              type="checkbox"
              name="features"
              value="Navigation System"
              checked={formData.features.includes('Navigation System')}
              onChange={handleInputChange}
            />
            Navigation System
          </label>
        </div>
        <div>
          <label>Transmission:</label>
          <select
            name="transmission"
            value={formData.transmission}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div>
          <label>Price Range:</label>
          <input
            type="range"
            name="priceRange"
            min="0"
            max="10000"
            step="100"
            value={formData.priceRange}
            onChange={handleInputChange}
          />
          <span>{formData.priceRange}</span>
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarSellApp;
