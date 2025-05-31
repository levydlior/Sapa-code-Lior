import { formatEventDate } from "@/utils/functions";
import React from "react";

interface EventCardProps {
  location: string;
  date: string;
  time: string;
  note?: string;
  onBookClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  location,
  date,
  time,
  note,
  onBookClick,
}) => {
  const { weekday, month, day, suffix, year } = formatEventDate(date);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch bg-[#f5f5f5] border border-[#35711f] rounded-xl p-6 gap-6 md:gap-20">
      <div
        className="flex items-center justify-center text-center text-[#35711f] font-medium
 whitespace-pre-line min-w-[120px]"
      >
        {location}
      </div>
      <div className="flex flex-col justify-center text-[#1c4d1a] flex-grow text-center md:text-left">
        <p className="font-extrabold text-lg">
          {weekday}, {month} {day}
          <sup className="text-sm relative top-[-4px]">{suffix}</sup> {year}
        </p>
        <p>{time}</p>
        {note && <p>{note}</p>}
      </div>
      <div className="flex items-center justify-center md:justify-end min-w-[140px]">
        <button
          onClick={onBookClick}
          className="bg-[#eac8a5] text-[#1c4d1a] font-medium px-6 py-2 rounded-full cursor-pointer"
        >
          Book Time
        </button>
      </div>
    </div>
  );
};

export default EventCard;
