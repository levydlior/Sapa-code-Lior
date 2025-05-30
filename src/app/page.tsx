import EventCard from "@/components/EventCard/EventCard";
import Header from "@/components/Header/Header";
import { eventsArray } from "@/utils/eventsArray";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col items-center h-[calc(100vh-51px)] py-5 ">
        <p className="sm:text-2xl">Utah&apos;s Cannabis community</p>
        {/* Upcoming event component */}
        <div className="flex flex-col  gap-6 mt-10">
          {eventsArray.map((event, index) => (
            <EventCard
              key={index}
              location={event.location}
              date={event.date}
              time={event.time}
              note={event.note}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
