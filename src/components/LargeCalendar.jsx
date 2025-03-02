import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

const holidays = [
  { date: "2025-01-01", name: "New Year's Day" },
  { date: "2025-04-13", name: "Songkran Festival" },
  { date: "2025-05-01", name: "Labor Day" },
  { date: "2025-12-05", name: "Father's Day" },
];

const LargeCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHoliday, setSelectedHoliday] = useState(new Date());

  const onDateChange = (date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setSelectedDate(formattedDate);
    const holiday = holidays.find((h) => h.date === formattedDate);
    setSelectedHoliday(holiday || null);
  };

  const tileClassName = ({ date }) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    return holidays.some((h) => h.date === formattedDate) ? "bg-orange-500 text-white" : "";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#05073C] to-[#EB662B] p-10">
      <div className="flex bg-[#1E1F3D] shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="p-6 w-3/4 bg-white text-black rounded-lg">
          <h2 className="text-3xl font-bold text-[#EB662B] text-center mb-4">📅 Calendar</h2>
          <Calendar
            onChange={onDateChange}
            tileClassName={tileClassName}
            value={selectedDate ? new Date(selectedDate) : new Date()}
            className="!w-full !h-full border-none bg-transparent text-black"
          />
        </div>
        <div className="w-1/4 bg-[#05073C] text-white p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#EB662B]">📌 Events</h3>
          {selectedHoliday ? (
            <div className="p-4 bg-white text-black rounded-lg">
              <h4 className="text-lg font-bold">{selectedHoliday.name}</h4>
              <p>📅 {dayjs(selectedDate).format("DD MMMM YYYY")}</p>
            </div>
          ) : (
            <p>No event selected</p>
          )}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-[#EB662B]">🎉 Upcoming Events</h4>
            <ul className="mt-2 space-y-2">
              {holidays.map((h, index) => (
                <li key={index} className="bg-white text-black p-2 rounded-md">
                  {dayjs(h.date).format("DD MMMM YYYY")} - {h.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCalendar;



