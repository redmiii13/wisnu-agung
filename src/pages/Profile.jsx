import React, { useState } from "react";
import Publikasi from "../components/Publikasi";
import Education from "../components/Education";
import Project from "../components/Project";
import Organization from "../components/Organization";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      id="home"
      className="section container mx-auto max-w-4xl min-h-screen flex flex-col lg:flex-row text-white justify-between"
    >
      {/* kiri */}
      <div className="w-full lg:w-[358px] p-4 mb-8 lg:mb-0">
        <div className="w-full">
          <h1 className="text-3xl lg:text-4xl font-bold py-4">Why hire me?</h1>
          <p className="py-4 text-sm lg:text-base">
            I am a Mining Engineering student eager to learn and apply my
            knowledge in the industry. I am a fast learner, a team player, and
            always strive to give my best.
          </p>

          <button
            onClick={() => handleTabChange("education")}
            className={`my-4 w-full h-10 bg-gray-800 hover:bg-primary hover:text-slate-800 rounded-lg flex justify-center items-center text-md ${
              activeTab === "education" ? "bg-primary text-slate-800" : ""
            }`}
          >
            Education
          </button>

          <button
            onClick={() => handleTabChange("organization")}
            className={`my-4 w-full h-10 bg-gray-800 hover:bg-primary hover:text-slate-800 rounded-lg flex justify-center items-center text-md ${
              activeTab === "about" ? "bg-primary text-slate-800" : ""
            }`}
          >
            Organization
          </button>
          <button
            onClick={() => handleTabChange("project")}
            className={`my-4 w-full h-10 bg-gray-800 hover:bg-primary hover:text-slate-800 rounded-lg flex justify-center items-center text-md ${
              activeTab === "skill" ? "bg-primary text-slate-800" : ""
            }`}
          >
            Project
          </button>
          <button
            onClick={() => handleTabChange("publikasi")}
            className={`my-4 w-full h-10 bg-gray-800 hover:bg-primary hover:text-slate-800 rounded-lg flex justify-center items-center text-md ${
              activeTab === "experience" ? "bg-primary text-slate-800" : ""
            }`}
          >
            Publication
          </button>
        </div>
      </div>

      {/* kanan */}
      <div className="w-full lg:w-[537px] h-full ml-0 lg:ml-4">
        {activeTab === "education" && <Education />}
        {activeTab === "project" && <Project />}
        {activeTab === "organization" && <Organization />}
        {activeTab === "publikasi" && <Publikasi />}
      </div>
    </div>
  );
}
