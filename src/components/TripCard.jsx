
const TripCard = ({ image, location, title, price, oldPrice, days, isFeatured }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex gap-4">
      <div className="relative w-48 h-32">
        {isFeatured && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            FEATURED
          </span>
        )}
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500">{location}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">
          The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.
        </p>
        <p className="text-orange-500 text-xs font-bold mt-1">Best Price Guarantee</p>
      </div>
      <div className="text-right">
        <p className="text-gray-600">{days} วัน {days - 1} คืน</p>
        {oldPrice && <p className="text-gray-400 line-through text-sm">${oldPrice}</p>}
        <p className="text-lg font-bold text-orange-500">From ${price}</p>
        <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-md mt-2 hover:bg-orange-100">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TripCard;
