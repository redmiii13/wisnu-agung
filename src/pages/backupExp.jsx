import { BsArrowRightSquareFill, BsFileCode } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";


const [activeIndex, setActiveIndex] = useState(0);
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState("");

const handleNext = () => {
  // Jika indeks saat ini adalah yang terakhir, kembali ke 0
  setActiveIndex((prevIndex) => (prevIndex + 1) % experience.length);
};

const handleImageClick = (gambar) => {
  setSelectedImage(gambar);
  setIsModalOpen(true); // Membuka modal
};

const closeModal = () => {
  setIsModalOpen(false); // Menutup modal
  setSelectedImage(""); // Menghapus gambar yang dipilih
};

const currentExperience = experience[activeIndex];

return (
  <>
    <div className="flex justify-center items-center">
      <div
        id="home"
        className="section container mx-auto max-w-full flex-col items-center justify-center flex-wrap lg:flex-nowrap gap-10 px-5"
      >
        {/* Bagian Deskripsi */}
        <div className="w-full sm:w-1/2 text-primary text-center sm:text-left">
          <h1 className="text-2xl text-primary font-bold mb-4 flex justify-center sm:justify-start">
            <span className="text-2xl">EXPERIENCE</span>
          </h1>
          <h1 className="text-3xl font-semibold text-white mb-2">
            <TypeAnimation
              key={activeIndex} // Menambahkan key agar merender ulang saat activeIndex berubah
              sequence={[currentExperience.posisi, 3000]}
              wrapper="span"
              speed={5}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>

          <p className="text-lg text-primary max-w-xl sm:text-md mt-2">
            {currentExperience.tempat} |{" "}
            <span className="text-sm  text-primary   ">
              {currentExperience.tanggal}
            </span>
          </p>

          <div className="sm:justify-start mt-4">
            <span className="h-9 rounded-lg flex justify-center text-sm text-white items-center mb-2 ">
              {currentExperience.deskripsi}
            </span>
          </div>
        </div>

        {/* Bagian Gambar */}
        {/* Percobaan */}
        <div className="w-full sm:w-1/2 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {/* Gambar Pertama */}
            {experience.map((item, index) => (
              <div
                className="w-full aspect-video overflow-hidden border-2 border-white rounded-xl"
                onClick={() => handleImageClick(item.sertifikat[index])}
              >
                <img
                  src={item.sertifikat[index]}
                  className="w-full h-full object-cover cursor-pointer"
                  alt="Sertifikat 1"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lawas */}
      {/* <div className="w-full sm:w-1/2 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
              className="w-full aspect-video overflow-hidden border-2 border-white rounded-xl"
              onClick={() =>
                handleImageClick(currentExperience.sertifikat[0])
              }
            >
              <img
                src={currentExperience.sertifikat[0]}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Tombol Next */}
      <div className="text-primary text-2xl mt-4 mr-64 sm:mt-0">
        <button
          type="button"
          className="hover:scale-110"
          onClick={handleNext}
        >
          <BsArrowRightSquareFill />
        </button>
      </div>
    </div>

    {/* Modal untuk Menampilkan Gambar */}
    {isModalOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="relative  p-4 rounded-lg">
          <button
            onClick={closeModal}
            className="absolute top-1 right-0 text-white bg-slate-800 font-bold  rounded-full px-4 py-2"
          >
            X
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[80vh] object-contain rounded-xl"
          />
        </div>
      </div>
    )}