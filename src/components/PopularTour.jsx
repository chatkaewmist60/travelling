
const tours = [
  {
    id: 1,
    image: "https://source.unsplash.com/400x250/?atv,desert",
    location: "Paris, France",
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/400x250/?snorkeling,ocean",
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/400x250/?canyon,adventure",
    location: "London, UK",
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
  },
  {
    id: 4,
    image: "https://source.unsplash.com/400x250/?island,hawaii",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
  },
  {
    id: 5,
    image: "https://source.unsplash.com/400x250/?space,museum",
    location: "Paris, France",
    title: "Space Center Houston Admission Ticket",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
  },
  {
    id: 6,
    image: "https://source.unsplash.com/400x250/?kayak,beach",
    location: "New York, USA",
    title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
  },
  {
    id: 7,
    image: "https://source.unsplash.com/400x250/?art,sculpture",
    location: "London, UK",
    title: "History and Hauntings of Salem Guided Walking Tour",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
  },
  {
    id: 8,
    image: "https://source.unsplash.com/400x250/?cave,river",
    location: "New York, USA",
    title: "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
  },
];

const PopularTour = () => {
  return (
    <div className="w-[80vw] mx-auto my-12">
      <h1 className="font-bold text-4xl mb-6 text-left">Find Popular Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={tour.image} alt={tour.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">{tour.location}</p>
              <h2 className="text-lg font-semibold mt-1">{tour.title}</h2>
              <p className="text-sm text-gray-600 mt-2">
                ⭐ {tour.rating} ({tour.reviews})
              </p>
              <div className="flex justify-between items-center mt-4 text-gray-700">
                <span>{tour.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTour;
