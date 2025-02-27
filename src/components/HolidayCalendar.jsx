import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

const holidays = [
  { date: "2025-01-01", name: "วันขึ้นปีใหม่" },
  { date: "2025-04-13", name: "วันสงกรานต์" },
  { date: "2025-04-14", name: "วันสงกรานต์" },
  { date: "2025-04-15", name: "วันสงกรานต์" },
  { date: "2025-05-01", name: "วันแรงงานแห่งชาติ" },
  { date: "2025-12-05", name: "วันพ่อแห่งชาติ" },
];

const HolidayCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  const onDateChange = (date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setSelectedDate(formattedDate);
    const holiday = holidays.find((h) => h.date === formattedDate);
    setSelectedHoliday(holiday || null);
  };

  const tileClassName = ({ date }) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    return holidays.some((h) => h.date === formattedDate) ? "bg-red-200" : "";
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">📅 ปฏิทินวันหยุด</h2>
      <div className="bg-white shadow-lg p-4 rounded-lg">
        <Calendar
          onChange={onDateChange}
          tileClassName={tileClassName}
          value={selectedDate ? new Date(selectedDate) : new Date()}
        />
      </div>

      {selectedHoliday ? (
        <div className="mt-6 p-4 bg-green-200 border-l-4 border-green-500 w-80">
          <h3 className="text-lg font-semibold">📌 รายละเอียดวันหยุด</h3>
          <p>📅 วันที่: {dayjs(selectedDate).format("DD MMMM YYYY")}</p>
          <p>🏖️ ชื่อวันหยุด: {selectedHoliday.name}</p>
        </div>
      ) : selectedDate ? (
        <div className="mt-6 p-4 bg-gray-200 w-80">
          <p>📅 วันที่ {dayjs(selectedDate).format("DD MMMM YYYY")} ไม่ใช่วันหยุด</p>
        </div>
      ) : null}
    </div>
  );
};

export default HolidayCalendar;
