import React, { useState } from "react";
import { BsArrowRightSquareFill, BsFileCode } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Portfolio() {
  const portfolio = [
    {
      id: 1,
      judul: "Pendidikan & Pelatihan Kompetensi AHLI KESELAMATAN & KESEHATAN KERJA UMUM",
      tempat: "NAGAN TRAINING | 22-23 & 29-30 November 2025 ",
      skill:
        "Merancang Strategi Pengendalian Risiko K3 di Tempat Kerja, Merancang Sistem Tanggap Darurat , Melakukan Komunikasi K3, Mengawasi Pelaksanaan Izin Kerja, Melakukan Pengukuran Faktor Bahaya di Tempat Kerja, Mengelola Pertolongan Pertama pada Kecelakaan Kerja (P3K) di Tempat Kerja, Mengelola Tindakan Tanggap Darurat, Mengelola Alat Pelindung Diri (APD) di Tempat Kerja, Menerapkan Program Pelayanan Kesehatan Kerja, Mengelola Sistem Dokumentasi K3, Menerapkan Manajemen Risiko K3, Mengevaluasi Pemenuhan Persyaratan dan Prosedur K3 , Melakukan Investigasi Kecelakaan Kerja ",
      link: "https://drive.google.com/file/d/1YGnSyVZcDLaL3u-DCz3up9GJ-sld8Y4u/view?usp=drive_link",
      gambar: "",
    },
    {
      id: 2,
      judul: "BASIC INTENSIVE ENGLISH PROGRAM",
      tempat: "Kampung Inggris Language Center | February - March 2026",
      skill:
        "Grammar, Speaking",
      link: "https://drive.google.com/file/d/19ElAaOhiHTZ2lZa5t3G4WlHRDM1muzwB/view?usp=drive_link",
      gambar: "",
    },
    {
      id: 3,
      judul: "Mine Scheduling & Short Term Plan (Case Study: Gold)",
      tempat: "PITINDO TRAINING | 25-27 March 2025",
      skill:
        "Mine Schedulling, Short Term Plan, Short Term Design, Haul Road Design",
      link: "https://drive.google.com/file/d/10X75XV1t8nw4W2Jmdb6sM8WjKLwmmLJH/view",
      gambar: "",
    },
    {
      id: 4,
      judul: "Pit Optimization & Mine Plan Design (Case Study : Gold)",
      tempat: "PITINDO TRAINING | Januari 2025",
      skill:
        "Set Up Block Model, Whittle Algorithm, Pit Optimization, Pit Design, Report With Ramp Design, Report Total Reserves, Disposal Design, Haul Road Design,  Open-Pit Mining",
      link: "https://drive.google.com/file/d/1aMdV5XhqElrOR0EcSZegYVWa5vp4Rf7O/view?usp=drivesdk",
      gambar: "img/sertif5.png",
    },
    {
      id: 4,
      judul: "TOEFL Certification",
      tempat: "Brighten English | Oktober 2025",
      skill:
        "Listening Comprehension, Structure and Written Expression, and Reading Comprehension",
      link: "https://drive.google.com/file/d/1JMCyFY1HaXkOyUBZPKxt5zY2-0DUDTU0/view?usp=drive_link",
      gambar: "",
    },
    {
      id: 5,
      judul: "Pit Optimization & Mine Plan Design (Case Study : Nickel)",
      tempat: "PITINDO TRAINING | Oktober 2024",
      skill:
        "Set Up Block Model, Whittle Algorithm, Pit Optimization, Pit Design, Report With Ramp Design, Report Total Reserves, Disposal Design, Haul Road Design,  Open-Pit Mining",
      link: "https://drive.google.com/file/d/1CtlD5rkNIIfksIjgWbz3GG-0P1tldcZv/view?usp=sharing",
      gambar: "img/sertif3.png",
    },
    {
      id: 6,
      judul:
        "Geological Modelling & Resources Estimation (Case Study : Nickel)",
      tempat: "PITINDO TRAINING | September 2024",
      skill:
        "WACC, Net Present Value (NPV), Internal Rate of Return (IRR), Cash Flow , Forecasting",
      link: "https://drive.google.com/file/d/1TXMZpluiO3iSoFWUQpL28bAChl5GMw5O/view?usp=sharing",
      gambar: "img/sertif4.png",
    },
    {
      id:7,
      judul: "Pelatihan Dasar Pengoperasian Drone",
      tempat: "TERRA DRONE INDONESIA | Oktober 2024",
      skill:
        "Drone Piloting, Drone Photography,  Drone Mapping,  Drone Videography",
      link: "https://drive.google.com/file/d/1cVvsbST6rgtRN_BqkaPGUIunV3s7imUb/view?usp=drivesdk",
      gambar: "img/sertif2.png",
    },
    {
      id: 8,
      judul: "Introduction to Mining Finance Model",
      tempat: "PITINDO TRAINING | Oktober 2024",
      skill:
        "WACC, Net Present Value (NPV), Internal Rate of Return (IRR), Cash Flow , Forecasting",
      link: "https://drive.google.com/file/d/1pAv2M5ut1HVb_A_0y7H9II7kOOIl1b5V/view?usp=drivesdk",
      gambar: "img/sertif1.png",
    },
    
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    // Jika indeks saat ini adalah yang terakhir, kembali ke 0
    setActiveIndex((prevIndex) => (prevIndex + 1) % portfolio.length);
  };

  const currentPortfolio = portfolio[activeIndex];

  return (
    <div
      id="home"
      className="section container mx-auto max-w-full flex items-center justify-center flex-wrap lg:flex-nowrap gap-10 px-5"
    >
      {/* Bagian Gambar */}
      <div className="w-full sm:w-1/2 max-w-lg aspect-video overflow-hidden border-2 border-white rounded-xl">
        <img
          src={currentPortfolio.gambar}
          alt={currentPortfolio.judul}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bagian tempat */}
      <div className="w-full sm:w-1/2 text-primary text-center sm:text-left">
        <h1 className="text-xl text-primary font-bold mb-4 flex justify-center sm:justify-start">
          <BsFileCode />
          <span className="ml-2">LISENSI & SERTIFIKASI</span>
        </h1>
        <h1 className="text-3xl font-semibold text-white mb-2">
          <TypeAnimation
            key={activeIndex} // Menambahkan key agar merender ulang saat activeIndex berubah
            sequence={[currentPortfolio.judul, 3000]}
            wrapper="span"
            speed={5}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>

        <p className="text-lg text-white max-w-xl sm:text-md mt-2">
          {currentPortfolio.tempat}
        </p>

        <div className="flex items-center justify-center sm:justify-start  my-8">
          <span className="h-9 rounded-lg flex justify-center text-sm text-primary items-center ">
            {currentPortfolio.skill}
          </span>
        </div>
        <a
          href={currentPortfolio.link}
          className="w-full sm:w-1/2 h-9 rounded-full flex justify-center text-sm text-white items-center border border-white hover:scale-105 transition duration-200 mt-4 sm:mt-6 px-6 py-2 mx-auto sm:mx-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="ml-4 ">Sertifikat</span>
        </a>
      </div>

      {/* Tombol Next */}
      <div className="text-primary text-2xl mt-4 sm:mt-0">
        <button type="button" className="hover:scale-110" onClick={handleNext}>
          <BsArrowRightSquareFill />
        </button>
      </div>
    </div>
  );
}
