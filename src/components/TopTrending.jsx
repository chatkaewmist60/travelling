const trendingTours = [
  {
    id: 1,
    image: "https://source.unsplash.com/400x250/?atv,desert",
    location: "Paris, France",
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    price: "$189.25",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/400x250/?snorkeling,ocean",
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    price: "$225",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/400x250/?canyon,adventure",
    location: "London, UK",
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    price: "$943",
  },
  {
    id: 4,
    image: "https://source.unsplash.com/400x250/?island,hawaii",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    price: "$771",
  },
];

const TopTrending = () => {
  return (
    <div className="w-[80vw] mx-auto my-12">
      <h1 className="font-bold text-3xl mb-6">Top Trending</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingTours.map((tour) => (
          <div key={tour.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
            <img src={tour.image} alt={tour.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-sm text-gray-500">{tour.location}</p>
              <h2 className="text-lg font-semibold mt-1">{tour.title}</h2>
              <p className="text-sm text-gray-600 mt-2">
                ⭐ {tour.rating} ({tour.reviews})
              </p>
              <div className="flex justify-between items-center mt-4 text-gray-700">
                <span>{tour.duration}</span>
                <span className="font-bold text-blue-600">From {tour.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrending;
