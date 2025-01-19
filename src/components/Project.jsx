import { useState } from "react";

function Project() {
  const projects = [
    {
      id: 1,
      judul: "Analisis Kestabilan Lereng",
      software: "Geotek Slides, Dips, Minex",
      link: "https://youtu.be/-TMzYX0PEOc?si=Hfg9RAVOh3ko4ntA",
    },
    {
      id: 2,
      judul:
        "Perencanaan Desain Tambang Bawah Tanah dan Analisis Kestabilan Geoteknik Tambang bawah tanah",
      software: "Phase 2, Ventsim",
      link: "",
    },
    {
      id: 3,
      judul: "Perencanaan Desain Penyaliran Tambang Batubara",
      software: "Microsoft Excel, Surpac",
      link: "",
    },
    {
      id: 4,
      judul: "Analisis Kelayakan dan Perencanaan Pertambangan Nikel",
      software: "Geovia Surpac, Geovia Whittle, Geovia Minescheed",
      link: "https://drive.google.com/drive/folders/1TOMCNlJQCuoQif0CRL23FjmT4jPxbNpp",
    },
    {
      id: 5,
      judul: "Perencanaan Lubang Peledakan",
      software: "ShotPlus , Minex, MineScape",
      link: "https://youtu.be/80Ha3IkqyU0?si=gYZoBKTCdPw0W_Ls",
    },
    {
      id: 6,
      judul: "Analisis Fragmentasi Peledakan",
      software: "Split Desktop",
      link: "https://www.youtube.com/watch?v=W7XE6Ll-m2k",
    },
    {
      id: 7,
      judul: "Estimasi Sumberdaya Mineral dan Batubara",
      software: "Sgems, R-Studio, Snowden, surpac, minex",
      link: "https://youtu.be/LNzLK1CD_7Q?si=gZLHyS1FD-Q2QZvj",
    },
    {
      id: 8,
      judul: "Mapping",
      software: "Qgis & Arcgis",
      link: "",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div>
      <div>
        <h1 className="text-4xl my-10 mx-4">Project</h1>
      </div>

      {/* Kontainer dengan tampilan satu proyek */}
      <div className="border rounded-lg p-4 mx-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">{currentProject.judul}</h1>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-primary font-bold">
              Software: {currentProject.software}
            </span>
            {currentProject.link && (
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 border border-primary rounded-xl text-primary"
              >
                Documentation
              </a>
            )}
          </div>
          <hr className="mt-4" />
        </div>

        {/* Tombol navigasi */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevProject}
            className="px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white"
          >
            &lt; Prev
          </button>
          <button
            onClick={nextProject}
            className="px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white"
          >
            Next &gt;
          </button>
        </div>
      </div>

      {/* Responsif di tampilan mobile */}
      <style jsx>{`
        @media (max-width: 640px) {
          .project-container {
            padding: 1rem;
          }
          .project-content {
            font-size: 1.2rem;
          }
          .nav-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Project;
