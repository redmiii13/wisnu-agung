import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { BiCloudDownload } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-4xl flex items-center justify-center flex-wrap lg:flex-nowrap gap-10 px-5"
    >
      {/* Bagian Deskripsi */}
      <div className="w-full lg:w-1/2 text-primary mb-10 lg:mb-0">
        <h1 className="text-4xl font-semibold text-white">Hello I'm 👋 </h1>
        <span
          className="inline-block text-4xl lg:text-5xl font-semibold text-primary text-left lg:text-right lg:whitespace-nowrap"
          style={{ wordSpacing: "-2px" }}
        >
          <TypeAnimation
            sequence={["Wisnu Agung Prayogo", 9000]}
            wrapper="span"
            speed={10}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </span>

        <h2 className="text-lg font-base text-white lg:text-lg mt-4">
          Undergraduate Mining Engineering |{" "}
          <span className="text-primary font-bold"> Universitas Jember </span>
        </h2>
        <p className="text-base text-white max-w-xl lg:text-md mt-4">
          A mining engineering graduate with a strong interest in mine planning
          positions. I have strong analytical skills and dedicate myself to
          learning about mining. I am currently looking for a suitable job
          opportunity to develop my skills in the Mining Industry and be able to
          apply my knowledge and interests.
        </p>

        <div className="flex items-center mt-5 flex-wrap justify-center lg:justify-start gap-1">
          <a
            href="https://www.instagram.com/wisnu23pache/profilecard/?igsh=MTF6OHlsMWRtdHV1OA=="
            className="w-9 h-9 mr-3 rounded-full flex justify-center text-primary items-center border border-primary hover:border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/wisnu-agung-prayogo-2b6393233"
            className="w-9 h-9 mr-3 rounded-full flex justify-center text-primary items-center border border-primary hover:border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
          >
            <BsLinkedin />
          </a>

          <a
            href=" https://wa.me/qr/U5MP2Y62PR5CA1"
            className="w-9 h-9 mr-3 rounded-full flex justify-center text-primary items-center border border-primary hover:border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Whatsapp"
          >
            <BsWhatsapp />
          </a>
          <a
            href="https://youtube.com/@wisnulurahtambang?si=eJ2x7i3oK0qQGGfu"
            className="w-9 h-9 mr-3 rounded-full flex justify-center text-primary items-center border border-primary hover:border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Whatsapp"
          >
            <BsYoutube />
          </a>

          <a
            href="https://drive.google.com/file/d/1xgYWZO-l6RzRw9C5J4B3QeL_8E-GGPX9/view?usp=sharing"
            className="w-48 h-9 rounded-full flex justify-center text-primary items-center border border-primary hover:border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Curriculum Vitae"
          >
            <span className="mr-4">Download CV</span>{" "}
            <BiCloudDownload className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Bagian Gambar */}
      <div className="w-full lg:w-1/2 flex justify-center items-center relative">
        <div className="absolute w-64 h-64 rounded-full border-4 border-dashed border-primary animate-spin duration-900"></div>
        <img
          src="img/wisnu.png"
          alt="nug"
          className="w-60 h-60 object-contain filter brightness-60 relative"
        />
      </div>
    </div>
  );
}
