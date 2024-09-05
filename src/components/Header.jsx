import { useState } from "react";
import Tab from "./Tab";

const Header = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div>
      {/* Tabs */}
      <div className="w-[619px] h-[62px] rounded-[23px] ml-[20px] mt-[20px] flex items-center gap-[10px] bg-[#171717]">
        <Tab label="About Me" isActive={activeTab === "About Me"} onClick={() => setActiveTab("About Me")} />
        <Tab label="Experiences" isActive={activeTab === "Experiences"} onClick={() => setActiveTab("Experiences")} />
        <Tab label="Recommended" isActive={activeTab === "Recommended"} onClick={() => setActiveTab("Recommended")} />
      </div>

      {/* Content based on active tab */}
      <div className="w-[611px] text-[20px] font-[400] text-[#969696] h-[175px] ml-[25px] mt-[20px] flex flex-col gap-3">
        {activeTab === "About Me" && (
          <div className="flex-col flex gap-3">
            <p>Hello! I&apos;m Dave, your sales rep here from Salesforce. I&apos; ve been working at this awesome company for 3 years now.</p>
            <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
          </div>
        )}
        {activeTab === "Experiences" && (
          <p>I&apos;ve had various experiences in sales and marketing that have helped me grow my career at Salesforce.</p>
        )}
        {activeTab === "Recommended" && (
          <p>Here are some recommended items that I think might help you in your career journey.</p>
        )}
      </div>
    </div>
  );
};

export default Header;
