import React from "react";
import { useNavigate } from "react-router";


const TravelPlans = () => {
  const navigate = useNavigate();
  return (
    <div className="flex px-10 py-6">
      {/* Sidebar Filters */}
      <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Travel Plan Dashboard</h2>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full" onClick={() => navigate('/createplan')}>
          Create Plan
        </button>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 px-6">
        <h1 className="text-3xl font-bold mb-6">Hello, Ploychat</h1>
        <div className="grid gap-6">
          {/* Trip Card */}
          {tripData.map((trip, index) => (
            <div key={index} className="flex bg-white shadow-md rounded-lg overflow-hidden">
              <img src={trip.image} alt="trip" className="w-1/3 object-cover" />
              <div className="p-4 w-2/3">
                <h2 className="text-xl font-bold">{trip.title}</h2>
                <p className="text-gray-600">{trip.description}</p>
                <span className="text-orange-500 font-semibold">Best Price Guarantee</span>
              </div>
              <div className="p-4 w-1/4 flex flex-col justify-between items-end">
                <p className="text-lg font-semibold">3 วัน 2 คืน</p>
                <p className="line-through text-gray-400">$1200</p>
                <p className="text-orange-500 text-lg font-bold">From $114</p>
                <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const tripData = [
  {
    image: "/images/trip1.jpg",
    title: "Phi Phi Islands Adventure Day Trip",
    description: "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
  },
  {
    image: "/images/trip2.jpg",
    title: "Phi Phi Islands Adventure Day Trip",
    description: "Explore caves, islands, and the beauty of Thailand's waters on this guided trip.",
  },
  {
    image: "/images/trip3.jpg",
    title: "Phi Phi Islands Adventure Day Trip",
    description: "Enjoy the sunset and sea breeze with a full package adventure tour.",
  },
];

export default TravelPlans;
