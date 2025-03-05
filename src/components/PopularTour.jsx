
// import { useNavigate } from "react-router"

// const tours = [
//   {
//     id: 1,
//     image: "https://loremflickr.com/600/400/travel?random=420",
//     location: "Paris, France",
//     title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
//     parag1: "aaaaaa",
//     rating: "4.8",
//     reviews: "243",
//     duration: "4 days",
//   },
//   {
//     id: 2,
//     image: "https://loremflickr.com/600/400/travel?random=111",
//     location: "New York, USA",
//     title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
//     rating: "4.8",
//     reviews: "243",
//     duration: "4 days",
//   },
//   {
//     id: 3,
//     image: "https://loremflickr.com/600/400/travel?random=409",
//     location: "London, UK",
//     title: "Westminster Walking Tour & Westminster Abbey Entry",
//     rating: "4.8",
//     reviews: "243",
//     duration: "4 days",
//   },
//   {
//     id: 4,
//     image: "https://loremflickr.com/600/400/travel?random=680",
//     location: "New York, USA",
//     title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
//     rating: "4.8",
//     reviews: "243",
//     duration: "4 days",
//   },
//   {
//     id: 5,
//     image: "https://loremflickr.com/600/400/travel?random=430",
//     location: "Paris, France",
//     title: "Space Center Houston Admission Ticket",
//     rating: "4.8",
//     reviews: "243",
//     duration: "4 days",
//   },
//   {
//     id: 6,
//     image: "https://loremflickr.com/600/400/travel?random=410",
//     location: "New York, USA",
//     title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
//     rating: "4.8",
//     reviews: "243",
//     duration: "4 days",
//   },
//   {
//     id: 7,
//     image: "https://loremflickr.com/600/400/travel?random=100",
//     location: "London, UK",
//     title: "History and Hauntings of Salem Guided Walking Tour",
//     rating: "4.8",
//     reviews: "243",
//     duration: "4 days",
//   },
//   {
//     id: 8,
//     image: "https://loremflickr.com/600/400/travel?random=200",
//     location: "New York, USA",
//     title: "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona",
//     rating: "4.8",
//     reviews: "243",
//     duration: "4 days",
//   },
// ];

// const PopularTour = () => {
//   const navigate = useNavigate();
//   // const routeChangBlockPost = (tour) => {
//   //   let path = '/blockpost';
//   //   navigate(path, { state: tour });
//   // }
//   return (
//     <div className="w-[80vw] mx-auto my-12">
//       <h1 className="font-bold text-4xl mb-6 text-left">Find Popular Tours</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
//         {tours.map((tour) => (
//           <div
//             key={tour.id} className="bg-white shadow-lg rounded-lg overflow-hidden"
//             onClick={() => navigate('/blockpost', { state: tour })}>


//             <img src={tour.image} alt={tour.title} className="w-full h-40 object-cover" />
//             <div className="p-4">
//               <p className="text-sm text-gray-500">{tour.location}</p>
//               <h2 className="text-lg font-semibold mt-1">{tour.title}</h2>
//               <p className="text-sm text-gray-600 mt-2">
//                 ⭐ {tour.rating} ({tour.reviews})
//               </p>
//               <div className="flex justify-between items-center mt-4 text-gray-700">
//                 <span>{tour.duration}</span>
//               </div>
//             </div>


//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularTour;



import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const toursData = [
  {
    id: 1,
    location: "Paris, France",
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    parag1: "aaaaaa",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    image:"https://plus.unsplash.com/premium_photo-1739226531311-a684a10ac16e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    id: 2,
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    image:"https://images.unsplash.com/photo-1727466943994-911d391dddb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    id: 3,
    location: "London, UK",
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    image:"https://images.unsplash.com/photo-1739907548147-f991baedfd5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    id: 4,
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    image:"https://images.unsplash.com/photo-1740560595023-15a496695e15?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    id: 5,
    location: "Paris, France",
    title: "Space Center Houston Admission Ticket",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    image:"https://images.unsplash.com/photo-1740422699287-d8bdbbaec629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"

  },
  {
    id: 6,
    location: "New York, USA",
    title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    image:"https://images.unsplash.com/photo-1740652646168-0d1557a6e8c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    id: 7,
    location: "London, UK",
    title: "History and Hauntings of Salem Guided Walking Tour",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    image:"https://images.unsplash.com/photo-1740680209832-e67f86f1122f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    id: 8,
    location: "New York, USA",
    title: "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona",
    rating: "4.8",
    reviews: "243",
    duration: "4 days",
    image:"https://images.unsplash.com/photo-1740103874714-d28ab0a9d4ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const generateUniqueImageUrls = async (numImages, width, height) => {
  const imageUrls = [];

  const getRandomImageUrl = async () => {
    const response = await fetch(
      `https://source.unsplash.com/random/${300}x${200}/?travel`
    );
    return response.url;
  };

  while (imageUrls.length < numImages) {
    const url = await getRandomImageUrl();
    if (!imageUrls.includes(url)) {
      imageUrls.push(url);
    }
  }
  return imageUrls;
};

const PopularTour = () => {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = await generateUniqueImageUrls(
        toursData.length,
        600,
        400
      );
      const updatedTours = toursData.map((tour, index) => ({
        ...tour,
        image: imageUrls[index],
      }));
      setTours(updatedTours);
    };

    fetchImages();
  }, []);

  return (
    <div className="w-[80vw] mx-auto my-12">
      <h1 className="font-bold text-4xl mb-6 text-left">Find Popular Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
        {toursData.map((tour) => (
          <div
            key={tour.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            onClick={() => navigate("/blockpost", { state: tour })}
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-40 object-cover"
            />
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