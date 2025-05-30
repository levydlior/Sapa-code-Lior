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
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#f5f5f5] border border-[#35711f] rounded-xl p-6 gap-4">
      <div className="text-[#35711f] font-semibold whitespace-pre-line">
        {location}
      </div>

      <div className="text-[#1c4d1a]">
        <p className="font-bold text-lg">{date}</p>
        <p>{time}</p>
        {note && <p>{note}</p>}
      </div>

      <div>
        <button
          onClick={onBookClick}
className="bg-[#eac8a5] text-[#1c4d1a] font-semibold px-6 py-2 rounded-full cursor-pointer"        >
          Book Time
        </button>
      </div>
    </div>
  );
};

export default EventCard;
