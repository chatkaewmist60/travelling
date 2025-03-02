import React, { useState, useEffect } from "react";
import axios from "axios";

const BudgetTravelExpenses = () => {
  const [country, setCountry] = useState("Thailand");
  const [airlineCost, setAirlineCost] = useState(0);
  const [rentalCarCost, setRentalCarCost] = useState(0);
  const [hotelCost, setHotelCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // Fetch airline cost from Skyscanner API
  const fetchAirlineCost = async () => {
    try {
      const response = await axios.get(`https://api.example.com/flights?destination=${country}`);
      setAirlineCost(response.data.estimated_price || 500); // ใช้ค่า default ถ้าไม่มีข้อมูล
    } catch (error) {
      console.error("Error fetching airline cost:", error);
      setAirlineCost(500);
    }
  };

  // Fetch rental car cost from Google Places API
  const fetchRentalCarCost = async () => {
    try {
      const response = await axios.get(`https://api.example.com/rentalcars?location=${country}`);
      setRentalCarCost(response.data.estimated_price || 40); // ใช้ค่า default ถ้าไม่มีข้อมูล
    } catch (error) {
      console.error("Error fetching rental car cost:", error);
      setRentalCarCost(40);
    }
  };

  // Fetch hotel cost from Booking API
  const fetchHotelCost = async () => {
    try {
      const response = await axios.get(`https://api.example.com/hotels?destination=${country}`);
      setHotelCost(response.data.estimated_price || 80); // ใช้ค่า default ถ้าไม่มีข้อมูล
    } catch (error) {
      console.error("Error fetching hotel cost:", error);
      setHotelCost(80);
    }
  };

  // คำนวณค่าใช้จ่ายทั้งหมด
  useEffect(() => {
    fetchAirlineCost();
    fetchRentalCarCost();
    fetchHotelCost();
  }, [country]);

  useEffect(() => {
    setTotalCost(airlineCost + rentalCarCost + hotelCost);
  }, [airlineCost, rentalCarCost, hotelCost]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-[#EB662B]">✈️ Budget and Travel Expenses</h2>

      {/* Country Selection */}
      <div className="mt-6 space-y-4">
        <div>
          <label className="block font-semibold">Country:</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full p-2 border rounded-md">
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
            <option value="France">France</option>
          </select>
        </div>

        {/* Show Estimated Prices */}
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <h3 className="text-lg font-semibold">Estimated Costs:</h3>
          <p>✈️ Flight: ${airlineCost}</p>
          <p>🚗 Rental Car: ${rentalCarCost}</p>
          <p>🏨 Hotel: ${hotelCost}</p>
          <hr className="my-2" />
          <h3 className="text-xl font-bold">💰 Total: ${totalCost}</h3>
        </div>
      </div>
    </div>
  );
};

export default BudgetTravelExpenses;


