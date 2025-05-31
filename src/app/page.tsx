import About from "@/components/About/About";
import AppointmentSteps from "@/components/AppointmentSteps/AppointmentSteps";
import EventCard from "@/components/EventCard/EventCard";
import FAQs from "@/components/FAQs/FAQs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import LeafNation from "@/components/LeafNation/LeafNation";
import PharmaciesList from "@/components/PharmaciesList/PharmaciesList";
import ReviewBanner from "@/components/ReviewBanner/ReviewBanner";
import UtahMedicalCards from "@/components/UtahMedicalCards/UtahMedicalCards";
import { eventsArray } from "@/utils/dataArrays";

export default function Home() {
  const sectionWrapper = "w-full my-10 px-4";
  const headingText =
    "text-3xl sm:text-3xl font-bold text-[#0b3d00] text-center";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center pt-5">
        <p className="sm:text-2xl">Utah&apos;s Cannabis community</p>

        <div className="flex flex-col gap-6 mt-5 w-full max-w-[1000px] px-10">
          <h4 className="sm:text-4xl text-dkGreen text-center font-bold mt-2 font-proxima">
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

        <div className="mt-10 mb-5">
          <h2 className={headingText}>
            Things to know before your appointment
          </h2>
          <AppointmentSteps />
        </div>

        <div className={sectionWrapper}>
          <LeafNation />
        </div>
        <div className={sectionWrapper}>

        <UtahMedicalCards />
   </div>
        <div className={`${sectionWrapper} sm:pl-8`}>
          <ReviewBanner />
        </div>

        <div className={sectionWrapper}>
          <FAQs />
        </div>

        <div className={sectionWrapper}>
          <PharmaciesList />
        </div>

        <div className={`${sectionWrapper} mb-0`}>
          <About />
        </div>
      </main>

      <Footer />
    </div>
  );
}
