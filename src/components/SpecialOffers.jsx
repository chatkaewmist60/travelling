
const offers = [
  { image: "https://via.placeholder.com/60", text: "Up to 50% Discount on Early Booking" },
  { image: "https://via.placeholder.com/60", text: "Extra $200 on Winter Tours coupon gift" },
  { image: "https://via.placeholder.com/60", text: "In Hotels Near Cities A Short Break!" },
  { image: "https://via.placeholder.com/60", text: "Discover Iceland Kayaking Tours" },
];

const SpecialOffers = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Special Offers</h2>
        <a href="#" className="text-blue-500 text-sm">See all</a>
      </div>
      <div className="flex gap-6 mt-4">
        {offers.map((offer, index) => (
          <div key={index} className="text-center">
            <img src={offer.image} alt="offer" className="w-16 h-16 rounded-full mx-auto" />
            <p className="text-xs text-gray-600 mt-2">{offer.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
