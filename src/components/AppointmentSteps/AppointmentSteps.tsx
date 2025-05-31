import Image from "next/image";

export default function AppointmentSteps() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto px-4 py-10 text-[#0b3d00]">
      <div className="flex items-start gap-4 flex-col">
        <div className="shrink-0 pt-1 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-10">
          <Image
            src="/assets/updated/number1.png"
            alt="Step 1"
            width={50}
            height={50}
          />
          <p className="text-base sm:text-lg leading-snug font-bold text-center sm:text-left">
            You’re going to register with the state of Utah. You can start this
            before you arrive.
          </p>
        </div>

        <div className="w-full space-y-4 items-center sm:items-start flex flex-col text-center sm:text-left sm:pl-22">
          <div className="grid sm:grid-cols-[180px_1fr] gap-y-3 gap-x-6 items-center">
            <a
              href="https://id.utah.gov/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="UtahID.org"
            >
              <button className="bg-[#eac8a5] text-[#0b3d00] font-semibold px-6 py-2 rounded-full w-[180px] text-center cursor-pointer">
                UtahID.org
              </button>
            </a>
            <p>Obtain access to your Utah Digital ID</p>
            <a
              href="https://evs.utah.gov/s//"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="EVS.Utah.gov"
            >
              <button className="bg-[#eac8a5] text-[#0b3d00] font-semibold px-6 py-2 rounded-full w-[180px] text-center">
                EVS.Utah.gov
              </button>
            </a>
            <p>
              Fill out all the fields until you get to “Awaiting Certification”
              status
            </p>

            <div className="sm:col-start-2 sm:col-span-1 pt-2 flex justify-center sm:justify-start sm:-ml-9">
              <Image
                src="/assets/updated/AwaitingCert-Image.png"
                alt="Awaiting Certification"
                width={280}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
        <div className="shrink-0 pt-1 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-10">
          <Image
            src="/assets/updated/number2.png"
            alt="Step 2"
            width={50}
            height={50}
          />
          <p className="text-base sm:text-lg leading-snug font-bold">
            Check in with your QMP
          </p>
        </div>

        <div className="w-full flex flex-col items-center sm:items-start pt-2">
          <div className="flex flex-col gap-1 text-sm sm:text-base pt-2">
            <p>1. QMP Registration</p>
            <p>2. Medical Evaluation/Consultation</p>
            <p>3. Payment</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
        <div className="shrink-0 pt-1 flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
          <Image
            src="/assets/updated/number3.png"
            alt="Step 3"
            width={50}
            height={50}
          />
          <p className="text-base sm:text-lg leading-snug font-bold">
            Renewal or New Patient?
          </p>
        </div>

        <div className="w-full flex flex-col items-center sm:items-start pt-4 space-y-2 sm:pl-0">
          <p>If this is a renewal, congratulations you are ready to shop...</p>
          <p>
            If you are a new patient, here are some helps to get you started...
          </p>

          <div className="flex flex-col gap-1 text-sm sm:text-base pt-2 sm:pl-20">
            {" "}
            <p>1. Meet with Pharmacist</p>
            <p>2. Set up your Portal Account</p>
            <p>3. Start Shopping</p>
            <p>**Don’t forget to take advantage of new patient deals**</p>
          </div>
        </div>
      </div>
    </div>
  );
}
