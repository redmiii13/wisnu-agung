import { BsEnvelope, BsTelephone } from "react-icons/bs";

export default function Contact() {
  return (
    <div
      id="contact"
      className="section min-h-screen container mx-auto flex items-center justify-center px-5 py-10 text-white"
    >
      {/* Left Side: Explanation */}
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:px-10 mb-10 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
          Contact Me
        </h1>
        <p className="text-sm text-gray-400 animate__animated animate__fadeIn animate__delay-1s">
          Feel free to reach out to me using the icons below. I would be happy
          to hear from you!
        </p>

        {/* Email Section */}
        <div className="flex items-center my-6 hover:scale-105 transition-transform duration-300 justify-center sm:justify-start">
          <a
            href="mailto:nugrohocn6@gmail.com"
            className="w-10 h-10 rounded-full flex justify-center items-center border-2 border-primary hover:bg-primary hover:text-gray-800 text-primary transition-all duration-300 transform hover:scale-110 mr-4 shadow-lg hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <BsEnvelope size={20} />
          </a>
          <span className="text-lg font-semibold text-gray-200">
            wisnuap313@gmail.com
          </span>
        </div>

        {/* Phone Section */}
        <div className="flex items-center my-6 hover:scale-105 transition-transform duration-300 justify-center sm:justify-start">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B6287739772955&text&type=phone_number&app_absent=0"
            className="w-10 h-10 rounded-full flex justify-center items-center border-2 border-primary hover:bg-primary hover:text-gray-800 text-primary transition-all duration-300 transform hover:scale-110 mr-4 shadow-lg hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
            title="Phone"
          >
            <BsTelephone size={20} />
          </a>
          <span className="text-lg font-semibold text-gray-200">
            +62 857-4779-1259
          </span>
        </div>
      </div>
    </div>
  );
}
