import React from "react";
import { useLocation } from "react-router";

const BlockPost = () => {

     const location = useLocation();
     const tour = location.state;

     return (
          <div className="bg-white p-6 max-w-2xl mx-auto shadow-md rounded-lg">
               {/* Post Title */}
               <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {tour.title}
               </h1>

               {/* Author Section */}
               <div className="flex items-center space-x-4 mb-4">
                    <img
                         src="/user-avatar.png"
                         alt="Author Avatar"
                         className="w-10 h-10 rounded-full"
                    />
                    <div>
                         <p className="font-semibold text-gray-700">{tour.location}</p>
                         <p className="text-sm text-gray-500">6 min read · Jun 1, 2022</p>
                    </div>
               </div>

               {/* Interaction Section */}
               <div className="flex items-center justify-between text-gray-500 text-sm border-b pb-4 mb-4">
                    <div className="flex items-center space-x-2">
                         <span>👏 5.3K</span>
                         <span>💬 69</span>
                    </div>
                    <div className="flex items-center space-x-2">
                         <button className="hover:text-gray-700">🔗</button>
                         <button className="hover:text-gray-700">▶</button>
                         <button className="hover:text-gray-700">📤</button>
                         <button className="hover:text-gray-700">⋮</button>
                    </div>
               </div>

               {/* Post Content */}
               <p className="text-gray-700 mb-4">
                    {tour.parag1}
               </p>

          </div>
     );
};

export default BlockPost;
