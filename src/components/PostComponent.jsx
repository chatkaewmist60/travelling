import React from "react";

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 h-screen border-r border-gray-300">
      <h2 className="text-lg font-bold mb-4">Search</h2>
      <ul>
        {[
          "Home",
          "Events",
          "Tasks",
          "Notes",
          "People",
          "Main discussions",
          "Announcements",
          "Quest & answer",
          "Meeting schedule",
        ].map((item, index) => (
          <li key={index} className="p-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ChatMessage Component
const ChatMessage = ({ name, time, message, link, image }) => {
  return (
    <div className="mb-4">
      <p className="font-bold text-gray-800">{name} <span className="text-gray-500 text-sm">{time}</span></p>
      <p className="text-gray-700">{message}</p>
      {link && (
        <p className="text-blue-600"><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
      )}
      {image && <img src={image} alt="Preview" className="w-full mt-2 rounded-lg" />}
    </div>
  );
};

// ChatSection Component
const ChatSection = () => {
  const messages = [
    {
      name: "Ben Ten",
      time: "11:25 AM",
      message: "Hi everyone, can we get an update on the progress of the web design project?",
    },
    {
      name: "Mark Roll",
      time: "11:27 AM",
      message: "Sure thing! I've attached a Figma file that shows the landing page design.",
      link: "https://www.figma.com/file/jG4Y0UMZEhRqeMQJb1k",
      image: "https://via.placeholder.com/400",
    },
  ];

  return (
    <div className="flex-1 p-6 overflow-auto bg-[#FEF7F4]">
      <h2 className="text-xl font-bold mb-4">Designer Chat</h2>
      {messages.map((msg, index) => (
        <ChatMessage key={index} {...msg} />
      ))}
      <input type="text" placeholder="Message..." className="w-full p-2 border rounded-lg mt-4" />
    </div>
  );
};

// Members Section
const MembersSection = () => {
  const members = [
    "Mark Roll - Creative Director",
    "Ben Ten - UI/UX Designer",
    "Enzo Fernandez - UI/UX Designer",
    "Marco Asencio - Graphic Designer",
    "Esther Howard - Illustrator",
    "Dianne Russell - UI/UX Designer",
  ];

  return (
    <div className="w-64 bg-gray-100 p-4 h-screen border-l border-gray-300">
      <h2 className="text-lg font-bold mb-4">Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index} className="p-2 text-gray-700 border-b">{member}</li>
        ))}
      </ul>
    </div>
  );
};


// Main App Component
const PostComponent = () => {
  return (
    <div className="flex h-screen mx-[10%]">
      <Sidebar />
      <ChatSection />
      <MembersSection />
    </div>
  );
};

export default PostComponent;