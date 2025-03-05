import React, { useState, useEffect } from "react";

const fetchHolidays = async (year) => {
  return {
    "January": ["New Year's Day - Jan 1"],
    "February": ["Makha Bucha Day - Feb 16"],
    "March": [],
    "April": ["Chakri Memorial Day - Apr 6", "Songkran Festival - Apr 13-15"],
    "May": ["Labor Day - May 1", "Coronation Day - May 4"],
    "June": [],
    "July": ["Asalha Bucha Day - Jul 23", "Buddhist Lent Day - Jul 24"],
    "August": ["Mother's Day - Aug 12"],
    "September": [],
    "October": ["King Bhumibol Memorial Day - Oct 13"],
    "November": [],
    "December": ["Father's Day - Dec 5", "Constitution Day - Dec 10", "New Year's Eve - Dec 31"],
  };
};

const LargeCalendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [holidays, setHolidays] = useState({});
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    const loadHolidays = async () => {
      const data = await fetchHolidays(year);
      setHolidays(data);
    };
    loadHolidays();
  }, [year]);

  return (
    <div className="min-h-screen bg-[#FEF7F4] flex flex-col items-center p-10 mx-[20%]">
      <div className="flex justify-between w-full max-w-6xl mb-5">
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setYear(year - 1)}>← {year - 1}</button>
        <h1 className="text-3xl font-bold">{year}</h1>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setYear(year + 1)}>{year + 1} →</button>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
        {months.map((month) => (
          <button
            key={month}
            className={`p-4 bg-white shadow-md rounded-lg text-center font-bold ${selectedMonth === month ? "bg-gray-300" : ""}`}
            onClick={() => setSelectedMonth(month)}
          >
            {month}
          </button>
        ))}
      </div>
      <div className="mt-10 flex w-full max-w-6xl">
        <div className="flex-1 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-bold">{selectedMonth} {year}</h2>
          <div className="grid grid-cols-7 text-xs text-center gap-1 mt-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={i} className="font-bold">{d}</span>
            ))}
            {Array.from({ length: 31 }).map((_, i) => (
              <span
                key={i}
                className={`p-1 ${holidays[selectedMonth]?.some(h => h.includes(i + 1)) ? "text-red-500 font-bold" : "text-gray-500"}`}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>
        <div className="w-64 p-6 bg-white shadow-md rounded-lg ml-6">
          <h2 className="text-xl font-bold">Holidays</h2>
          <ul className="mt-2 text-gray-600">
            {holidays[selectedMonth]?.length > 0 ? (
              holidays[selectedMonth].map((holiday, index) => <li key={index}>• {holiday}</li>)
            ) : (
              <li>No holidays</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LargeCalendar;