import TripCard from "../components/TripCard";

const trips = [
  {
    image: "https://via.placeholder.com/150", // แทนด้วย URL จริง
    location: "Paris, France",
    title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
    price: 114,
    oldPrice: 1200,
    days: 3,
    isFeatured: false,
  },
  {
    image: "https://via.placeholder.com/150", // แทนด้วย URL จริง
    location: "Paris, France",
    title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
    price: 114,
    oldPrice: 1200,
    days: 3,
    isFeatured: false,
  },
  {
    image: "https://via.placeholder.com/150", // แทนด้วย URL จริง
    location: "Paris, France",
    title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
    price: 114,
    oldPrice: 1200,
    days: 3,
    isFeatured: true,
  },
];

const TripList = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">สวัสดี, คุณพลอยฉัตร</h1>
      <div className="grid grid-cols-1 gap-4 mt-6">
        {trips.map((trip, index) => (
          <TripCard key={index} {...trip} />
        ))}

      
      </div>

      <TripCard />
    </div>
  );
};

export default TripList;
