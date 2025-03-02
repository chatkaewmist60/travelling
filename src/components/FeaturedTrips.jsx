import React from "react";

const trips = [
  {
    image: "https://via.placeholder.com/300",
    location: "Paris, France",
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    rating: "4.8 (243)",
    days: "4 days",
    price: "$189.25",
  },
  {
    image: "https://via.placeholder.com/300",
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "4.8 (243)",
    days: "4 days",
    price: "$225",
  },
  {
    image: "https://via.placeholder.com/300",
    location: "London, UK",
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    rating: "4.8 (243)",
    days: "4 days",
    price: "$943",
  },
  {
    image: "https://via.placeholder.com/300",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.8 (243)",
    days: "4 days",
    price: "$771",
  },
];

const FeaturedTrips = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Featured Trips</h2>
        <button className="border border-gray-300 px-3 py-1 rounded-md text-sm">By Travel Style</button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {trips.map((trip, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={trip.image} alt="trip" className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-500 text-sm">{trip.location}</p>
              <h3 className="text-lg font-semibold">{trip.title}</h3>
              <p className="text-yellow-500 text-sm">{trip.rating}</p>
              <p className="text-gray-600 text-sm">{trip.days}</p>
              <p className="text-blue-600 font-bold">From {trip.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTrips;
