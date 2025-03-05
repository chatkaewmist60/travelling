const trendingTours = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1637062771013-63343ccfc7d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "Paris, France",
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    rating: "4.8",
    reviews: "243",
    duration: "5 days",
    price: "$189.25",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1637062771078-eca465634238?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "5.0",
    reviews: "243",
    duration: "2 days",
    price: "$225",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1637062769490-1348bba66653?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "London, UK",
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    rating: "2.8",
    reviews: "243",
    duration: "8 days",
    price: "$943",
  },
  {
    id: 4,
    image: "https://plus.unsplash.com/premium_photo-1661812347879-4f953c3f2679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.0",
    reviews: "243",
    duration: "6 days",
    price: "$771",
  },
  {
    id: 5,
    image: "https://plus.unsplash.com/premium_photo-1661812347879-4f953c3f2679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.0",
    reviews: "243",
    duration: "6 days",
    price: "$771",
  },
  {
    id: 6,
    image: "https://plus.unsplash.com/premium_photo-1661812347879-4f953c3f2679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.0",
    reviews: "243",
    duration: "6 days",
    price: "$771",
  },
  {
    id: 7,
    image: "https://plus.unsplash.com/premium_photo-1661812347879-4f953c3f2679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.0",
    reviews: "243",
    duration: "6 days",
    price: "$771",
  },
  {
    id: 8,
    image: "https://plus.unsplash.com/premium_photo-1661812347879-4f953c3f2679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.0",
    reviews: "243",
    duration: "6 days",
    price: "$771",
  },
  {
    id: 9,
    image: "https://plus.unsplash.com/premium_photo-1661812347879-4f953c3f2679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.0",
    reviews: "243",
    duration: "6 days",
    price: "$771",
  },
  {
    id: 10,
    image: "https://plus.unsplash.com/premium_photo-1661812347879-4f953c3f2679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.0",
    reviews: "243",
    duration: "6 days",
    price: "$771",
  },
  {
    id: 11,
    image: "https://plus.unsplash.com/premium_photo-1661812347879-4f953c3f2679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.0",
    reviews: "243",
    duration: "6 days",
    price: "$771",
  },
  {
    id: 12,
    image: "https://plus.unsplash.com/premium_photo-1661812347879-4f953c3f2679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.0",
    reviews: "243",
    duration: "6 days",
    price: "$771",
  },
  {
    id: 13,
    image: "https://plus.unsplash.com/premium_photo-1661812347879-4f953c3f2679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.0",
    reviews: "243",
    duration: "6 days",
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
