import Image from "next/image";

const Step = () => {
  return (
    <div className=" lg:pl-0">
      <section className="bg-blue-600 text-white py-8 lg:py-0 px-4 md:px-6 rounded-3xl flex flex-col lg:flex-row md:justify-between">
        {/* Left Content */}
        <div className="flex flex-col p-6   gap-8 md:gap-[100px] text-center md:text-left">
          <h1 className="text-sm md:text-base">September 4, 2024</h1>

          <div className="flex flex-col gap-3 md:gap-[16px]">
            <h1 className="flex items-center justify-center md:justify-start gap-2 font-semibold text-sm md:text-[16px] leading-[100%]">
              Class Cod: 44553
            </h1>

            <h1 className="font-montserrat font-bold text-2xl md:text-[16px] leading-[100%]">
              Philosophy of The Person
            </h1>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-6 md:mt-0 flex justify-center lg:justify-end ">
          <div className="w-48 h-48 md:w-72 md:h-72 rounded-lg flex  items-center justify-center overflow-hidden">
            <Image
              src="/hh.png"
              alt="Hero students"
              width={280}
              height={280}
              className="object-cover rounded-lg w-full h-full   "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Step;
