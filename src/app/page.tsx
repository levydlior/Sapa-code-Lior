import AppointmentSteps from "@/components/AppointmentSteps/AppointmentSteps";
import EventCard from "@/components/EventCard/EventCard";
import Header from "@/components/Header/Header";
import UtahMedicalCards from "@/components/UtahMedicalCards";
import { eventsArray } from "@/utils/eventsArray";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col items-center h-[calc(100vh-51px)] py-5 ">
        <p className="sm:text-2xl">Utah&apos;s Cannabis community</p>
        <div className="flex flex-col  gap-6 mt-5 w-full max-w-[1000px] px-10">
          <h4 className=" sm:text-4xl text-dkGreen text-center font-bold mt-2 font-proxima">
            Upcoming Utah Medical Card Events
          </h4>
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
        <div className="my-10">
          <h2 className="text-3xl sm:text-3xl font-bold text-[#0b3d00] text-center">
            Things to know before your appointment
          </h2>
          <AppointmentSteps />
        </div>
        <div className="my-20 px-10 flex flex-col items-end">
          <Image
            src="/assets/MockBannerAd@2x.png"
            alt="Leaf Nation Banner Ad"
            width={900}
            height={100}
          />
          <p className="text-[#808080] pr-2">Ad</p>
        </div>
        <UtahMedicalCards />
      </div>
    </div>
  );
}
