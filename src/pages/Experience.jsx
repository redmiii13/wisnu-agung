import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs"; // Import icon
import { TypeAnimation } from "react-type-animation";

export default function Experience() {
  const experiences = [
    {
      logo: "",
      posisi: "Research and Surveyor Assistance",
      tempat: "LP2M Universitas Jember dan BAPPEDA Provinsi Jawa Timur",
      deskripsi:
        "Cooperation Projects Between BAPPEDA of East Java Province and Jember University Related to (Background Study RPJMD dan RPJPD Urusan Energi dan Sumber Daya Mineral (ESDM) Provinsi Jawa Timur)",
      tanggal: "Mei 2023 - August 2023",
      sertifikat: ["img/sertifikat/lp2m1.jpg", "img/sertifikat/lp2m2.jpg"],
    },
    {
      logo: "img/logo/bumi-suksesindo.png",
      posisi: "Visitor Service",
      tempat: "PT Bumi Suksesindo",
      deskripsi: "Observing the gold mining process",
      tanggal: "1 Juli 2023 - 31 Juli 2023",
      sertifikat: ["img/sertifikat/bumi.jpeg"],
    },
    {
      logo: "img/logo/himata.png",
      posisi: "Staff Departemen Pengembangan Minat dan Bakat",
      tempat: "Himpunan Mahasiswa Tambang Universitas Jember",
      deskripsi: "",
      tanggal: "Februari 2023 - Desember 2023",
      sertifikat: ["img/sertifikat/hima.jpeg"],
    },

    {
      logo: "",
      posisi: "Petrology Mineralogy and Cristalography Assistant Lecture",
      tempat: "Laboratorium Mekanika Batuan Universitas Jember",
      deskripsi:
        "Managing the recapitulation of grades and assignments from the practitioner and then making sure it is approved by the lecturer",
      tanggal: "Agustus 2023 - Desember 2023",
      sertifikat: ["img/sertifikat/asisten-lecture.jpeg"],
    },
    {
      logo: "",
      posisi: "Research Assistant",
      tempat: "Bondowoso District",
      deskripsi:
        "Natural Disaster Mapping, Map of potential natural disasters, and Socialization of Disaster Response Village in Sempol Village, Ijen Sub-district, Bondowoso District",
      tanggal: "Januari 2024 - Oktober 2024",
      sertifikat: [
        "img/sertifikat/research-1.jpeg",
        "img/sertifikat/research-2.jpeg",
        "img/sertifikat/research-3.jpeg",
      ],
    },
    {
      logo: "",
      posisi: "Research Study Assistant",
      tempat:
        "Akuisisi Geolistrik Desa Tanjungrejo, Kecamatan Wuluhan, Kabupaten Jember",
      deskripsi: "-",
      tanggal: "Januari 2022 - Desember 2022",
      sertifikat: [
        "img/sertifikat/jagung-1.jpeg",
        "img/sertifikat/jagung-2.jpeg",
        "img/sertifikat/jagung-3.jpeg",
      ],
    },
    {
      logo: "img/logo/bumi-suksesindo.png",
      posisi: "Production Management Mining Department",
      tempat: "Internship in PT Bumi Suksesindo",
      deskripsi: "",
      tanggal: "Juli 2024 - Agustus 2024",
      sertifikat: [
        "img/sertifikat/magang-1.jpeg",
        "img/sertifikat/magang-2.jpeg",
        "img/sertifikat/magang-3.jpeg",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length
    );
  };

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const ExperienceCard = ({ experience }) => {
    const { logo, posisi, tempat, deskripsi, tanggal, sertifikat } = experience;

    return (
      <div className="flex justify-center">
        <div className="flex flex-col sm:flex-row p-6 mb-6 max-w-4xl justify-center w-full sm:w-auto">
          <div className="flex justify-center w-full sm:w-[200px]">
            {logo ? (
              <div className="rounded-full w-36 h-36 px-2 py-2 bg-white flex justify-center items-center">
                <img
                  src={logo}
                  className="w-full h-full object-contain rounded-full"
                  alt="Logo"
                />
              </div>
            ) : null}
          </div>

          <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-center items-center sm:items-start">
            <h1 className="text-3xl font-bold text-white">Experience</h1>
            <h2
              className="text-2xl font-bold text-white text-center sm:text-left"
              style={{ wordSpacing: "-2px" }}
            >
              <TypeAnimation
                sequence={[posisi, 9000]}
                wrapper="span"
                speed={30}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h2>

            <h3 className="text-lg text-primary text-center sm:text-left">
              {tempat}
            </h3>
            <p className="text-white mb-2 text-center sm:text-left">
              {deskripsi || "-"}
            </p>
            <p className="text-md text-primary mb-4 text-center sm:text-left">
              {tanggal}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
              {sertifikat.map((imgSrc, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={imgSrc}
                    alt={`Sertifikat ${index + 1}`}
                    className="w-full h-48 object-cover rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(imgSrc)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 mt-16">
      <div className="flex justify-center items-center">
        <button
          className="px-4 py-2 text-primary rounded-l-lg"
          onClick={goToPrev}
        >
          <BsArrowLeftSquareFill size={30} />
        </button>

        <ExperienceCard experience={experiences[currentIndex]} />

        <button
          className="px-4 py-2 text-primary rounded-r-lg"
          onClick={goToNext}
        >
          <BsArrowRightSquareFill size={30} />
        </button>
      </div>

      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute flex justify-center items-center top-2 right-2 text-white text-2xl w-10 h-10 font-bold bg-slate-900 rounded-full"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Sertifikat"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
