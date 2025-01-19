import { BsArrowRight } from "react-icons/bs";

function Experience() {
  return (
    <>
      <div className="px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl my-4"> Education</h1>
      </div>

      {/* Univ */}
      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-48 px-4 md:px-8 justify-center items-center md:justify-start md:items-start">
        <div className="w-30 h-24 rounded-full px-2 flex justify-center items-center mb-4 md:mb-0">
          <img
            src="img/logo/unej.png"
            className="w-full h-full object-cover hover:text-primary"
            alt="University Logo"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-md md:text-lg text-center md:text-left">
            Mining Engineering
          </h1>
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
            Universitas Jember
          </h1>
          <span className="text-sm md:text-base text-primary font-bold border border-primary px-6 py-2 rounded-full">
            2021 - Now
          </span>
        </div>
      </div>
    </>
  );
}

export default Experience;
