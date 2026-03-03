import heroImage from "../assets/HeroSectionImage.svg";
import bgImage from "../assets/image 6271.svg";
import starIcon from "../assets/LeftSideHerosection/Star 1.svg";
import emailIcon from "../assets/LeftSideHerosection/open-envelope-with-paper-sheet-email-icon-with-symbol-3d-vector-icon-cartoon-minimal-style 1.svg";
import linkedinIcon from "../assets/LeftSideHerosection/modern-3d-linkedin-social-media-icon 1.svg";
import behanceIcon from "../assets/LeftSideHerosection/3d-behance-icon 1.svg";

import vectorMain from "../assets/RightSideHerosection/Vector.svg";
import vector1 from "../assets/RightSideHerosection/Vector (1).svg";
import vector3 from "../assets/RightSideHerosection/Vector (3).svg";
import vector4 from "../assets/RightSideHerosection/Vector (4).svg";
import vector5 from "../assets/RightSideHerosection/Vector (5).svg";
import frameIcon from "../assets/RightSideHerosection/Frame.svg";
import curvatureTool from "../assets/RightSideHerosection/curvature-tool 1.svg";

export default function HeroSection() {
  return (
    <section
      id='portfolio'
      className="relative h-fit w-full flex items-center px-12 py-10 pt-[100px] overflow-hidden"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Background image */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient overlay on top of bg image */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(40.86% 164.12% at 48.07% 60.05%, rgba(255,255,255,0.28) 0%, rgba(71,80,150,0.168) 100%)",
        }}
      />
      {/* DESKTOP VIEW */}
      <div
        className="relative z-[2] max-w-[1200px] mx-auto w-full
        hidden lg:grid grid-cols-[34%_34%_32%] items-center"
      >
        {/* LEFT */}
        <div className="mt-2">
          {/* Badge */}
          <div className="pl-24 pb-6">
            <div className="pl-20">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5
                border border-[#475096] rounded-full
                bg-[#E9EAF2] shadow-sm mb-2"
              >
                <img src={starIcon} alt="star" className="w-4 h-4" />
                <span className="font-inter text-[13px] text-[#475096] font-medium">
                  Graphic Designer
                </span>
              </div>

              {/* Name */}
              <h1
                className="font-playfair text-[30px] font-semibold
                text-[#475096] leading-tight mb-12"
              >
                Tanjeela Akhter
              </h1>
            </div>
          </div>

          {/* Skills - 2 Rows with 3 skills each */}
          <div className="relative z-20 translate-x-11 translate-y-10">
            {/* Row 1 - 3 skills */}
            <div className="flex gap-4 mb-4">
              {/* Skill 1: Motion Graphic Designer */}
              <div className="inline-flex flex-col items-start bg-[#EBECF4] text-sm
                border border-[#565F9B]
                rounded-lg
                xl:p-4 lg:p-3
                w-fit gap-2">
                <img src={vector4} alt="skill icon" className="w-4 h-4" />
                <div className="text-[#475096] leading-tight">
                  <p>Motion</p>
                  <p className="whitespace-nowrap">Graphic Designer</p>
                </div>
              </div>

              {/* Skill 2: 2D Animation */}
              <div className="inline-flex flex-col items-start bg-[#EBEBF3] text-xs
                border border-[#565F9B]
                rounded-lg
                p-2
                w-fit gap-2">
                <img src={vector1} alt="skill icon" className="w-4 h-4" />
                <div className="text-[#475096] leading-tight whitespace-nowrap">
                  <p>2D Animation</p>
                </div>
              </div>

              {/* Skill 3: Manual/Digital Artwork */}
              <div
                className="
                inline-flex flex-col gap-2
                bg-[#EBEBF3]/50
                backdrop-blur-xs
                text-sm
                border border-[#475096]
                rounded-lg
                p-2
                min-fit
            "
              >
                <img src={vectorMain} alt="skill icon" className="w-4 h-4" />

                <div className="text-[#475096] leading-tight whitespace-nowrap">
                  <p>Manual / Digital</p>
                  <p>Artwork</p>
                </div>
              </div>
            </div>

            {/* Row 2 - 3 skills */}
            <div className="flex gap-4 ml-2.5">
              {/* Skill 4: Character Design */}
              <div className="inline-flex flex-col items-start bg-[#EBEBF3] text-sm
                border border-[#565F9B]
                rounded-lg
                p-2
                w-fit gap-2">
                <img src={vector3} alt="skill icon" className="w-4 h-4" />
                <div className="text-[#475096] leading-tight whitespace-nowrap pr-4">
                  <p>Character</p>
                  <p>Design</p>
                </div>
              </div>

              {/* Skill 5: Video Editing & Videography */}
              <div className="inline-flex flex-col items-start bg-[#EBEBF3] text-sm
                border border-[#565F9B]
                rounded-lg
                p-2
                w-fit gap-2">
                <img src={vector5} alt="skill icon" className="w-4 h-4" />
                <div className="text-[#475096] leading-tight whitespace-nowrap">
                  <p className="whitespace-nowrap">Video Editing &</p>
                  <p>Videography</p>
                </div>
              </div>

              {/* Skill 6: Photo Editing */}
              <div className="inline-flex flex-col items-start bg-[#EBEBF3] text-sm
                border border-[#565F9B]
                rounded-lg
                p-2
                w-fit gap-2">
                <img src={frameIcon} alt="skill icon" className="w-5 h-5" />
                <div className="text-[#475096] leading-tight whitespace-nowrap">
                  <p>Photo Editing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="relative flex justify-center">
          <img
            src={heroImage}
            alt="Tanjeela"
            className=" max-w-230 relative z-10 max-h-[680px] object-contain"
          />
        </div>


        {/* RIGHT */}
        <div className="relative z-20 flex flex-col justify-between h-full opacity-85">
          {/* Experience */}
          <div className="-translate-x-20 mr-40 relative self-start mb-10 font-['Playfair_Display',serif]">
            <div
              className="bg-[#E6E7F0]
              border border-[#565F9B]
              rounded-[18px] px-6 py-2 text-center"
            >
              <h3
                className="font-playfair text-[28px]
                text-[#475096] leading-none"
              >
                6+ Yrs
              </h3>
              <p
                className="font-playfair text-[18px]
                text-[#464646] mt-1"
              >
                Experience
              </p>
            </div>

            <div className="absolute -top-3 -left-3 rounded-full p-1.5 shadow-sm">
              <img src={curvatureTool} alt="tool" className="w-8 h-8" />
            </div>
          </div>

          {/* About Card */}
          <div
            className="border border-[#565F9B]
            rounded-2xl py-2 px-6 bg-[#E6E7F0] -translate-x-4"
          >
            <h2
              className="font-playfair text-[20px]
              text-[#475096] mb-2"
            >
              About Me
            </h2>

            <p
              className="font-Playfair Display text-[16px]
              text-[#464646] leading-tight"
            >
              I am <strong>Tanjeela Akhter</strong> <br />
              <div className="text-[14px] font-Playfair_Display">
                <span className="block"> specialize in video production, video editing, and</span>
                <span className="block">motion graphics, with a strong focus on creating</span>
                <span className="block">engaging digital content. While these are my core</span>
                <span className="block">strengths, I’m highly capable across all aspects of</span>
                <span className="block"> media creation.</span>
              </div>
            </p>
          </div>

          {/* Social Icons */}
          {/* <div className="flex gap-4 justify-end mt-10">

            <img src={emailIcon} alt="email" className="w-8 h-8" />
              <a href="https://www.linkedin.com/in/tanjeela-akhter-762733120/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[16px] text-[#464646] underline hover:opacity-80 transition">
              <img src={linkedinIcon} alt="Location" className="w-8 h-8" />
              https://www.linkedin.com/in <br/> /tanjeela-akhter-762733120/
            </a>
            <img src={linkedinIcon} alt="linkedin" className="w-8 h-8" />
            <img src={behanceIcon} alt="behance" className="w-8 h-8" />
          </div> */}
          {/* Social Icons */}
<div className="flex gap-6 justify-end items-center mt-10">

  {/* Email Icon */}
      <a
      href="mailto:pinky.tanjeela@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition"
    >
  <img
    src={emailIcon}
    alt="email"
    className="w-8 h-8"
  />
  </a>

  {/* LinkedIn Section */}
  <div className="flex items-center gap-2 text-[16px] text-[#464646]">
    
    {/* Clickable LinkedIn Image */}
    <a
      href="https://www.linkedin.com/in/tanjeela-akhter-762733120/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition"
    >
      <img
        src={linkedinIcon}
        alt="LinkedIn"
        className="w-8 h-8 cursor-pointer"
      />
    </a>



  </div>

  {/* Behance Icon */}
      <a
      href="https://www.behance.net/Tanjeela"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition"
    >
  <img
    src={behanceIcon}
    alt="behance"
    className="w-8 h-8"
  />
  </a>
</div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="relative z-[2] w-full flex flex-col items-center justify-center lg:hidden gap-10 pt-10 pb-20">

        {/* Left Side Content (Name & Skills) */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5
              border border-[#475096] rounded-full
              bg-[#E9EAF2] shadow-sm mb-4"
            >
              <img src={starIcon} alt="star" className="w-4 h-4" />
              <span className="font-inter text-[13px] text-[#475096] font-medium">
                Graphic Designer
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-playfair text-[32px] sm:text-[40px] font-semibold
              text-[#475096] leading-tight mb-8"
            >
              Tanjeela Akhter
            </h1>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4 w-full px-4 max-w-[320px]">
            {/* Row 1 */}
            <div className="flex gap-4 justify-center whitespace-nowrap">
              <div className="flex-1 flex flex-col items-center justify-center bg-[#EBECF4] text-xs
                border border-[#565F9B]
                rounded-lg p-3 gap-2 text-center h-[90px]">
                <img src={vector4} alt="skill" className="w-5 h-5" />
                <div className="text-[#475096] leading-tight flex flex-col justify-center">
                  <span>Motion</span>
                  <span>Graphic Designer</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center bg-[#EBEBF3] text-xs
                border border-[#565F9B]
                rounded-lg p-3 gap-2 text-center h-[90px]">
                <img src={vector1} alt="skill" className="w-5 h-5" />
                <div className="text-[#475096] leading-tight flex flex-col justify-center">
                  <span>2D Animation</span>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-4 justify-center whitespace-nowrap">
              <div className="flex-1 flex flex-col items-center justify-center bg-[#EBEBF3]/50 backdrop-blur-xs text-xs
                border border-[#475096]
                rounded-lg p-3 gap-2 text-center h-[90px]">
                <img src={vectorMain} alt="skill" className="w-5 h-5" />
                <div className="text-[#475096] leading-tight flex flex-col justify-center">
                  <span>Manual / Digital</span>
                  <span>Artwork</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center bg-[#EBEBF3] text-xs
                border border-[#565F9B]
                rounded-lg p-3 gap-2 text-center h-[90px]">
                <img src={vector3} alt="skill" className="w-5 h-5" />
                <div className="text-[#475096] leading-tight flex flex-col justify-center">
                  <span>Character</span>
                  <span>Design</span>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-4 justify-center whitespace-nowrap">
              <div className="flex-1 flex flex-col items-center justify-center bg-[#EBEBF3] text-xs
                border border-[#565F9B]
                rounded-lg p-3 gap-2 text-center h-[90px]">
                <img src={vector5} alt="skill" className="w-5 h-5" />
                <div className="text-[#475096] leading-tight flex flex-col justify-center">
                  <span>Video Editing &</span>
                  <span>Videography</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center bg-[#EBEBF3] text-xs
                border border-[#565F9B]
                rounded-lg p-3 gap-2 text-center h-[90px]">
                <img src={frameIcon} alt="skill" className="w-5 h-5" />
                <div className="text-[#475096] leading-tight flex flex-col justify-center">
                  <span>Photo Editing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Image */}
        <div className="relative flex justify-center w-full px-6 mt-4">
          <img
            src={heroImage}
            alt="Tanjeela"
            className="w-full max-w-[320px] object-contain relative z-10"
          />
        </div>

        {/* Right Side Content (Experience, About, Socials) */}
        <div className="flex flex-col items-center w-full px-4 gap-8">
          {/* Experience */}
          <div className="relative mt-4">
            <div
              className="bg-[#E6E7F0]
              border border-[#565F9B]
              rounded-[18px] px-8 py-4 text-center"
            >
              <h3
                className="font-playfair text-[32px]
                text-[#475096] leading-none"
              >
                6+ Yrs
              </h3>
              <p
                className="font-playfair text-[20px]
                text-[#464646] mt-2"
              >
                Experience
              </p>
            </div>
            <div className="absolute -top-4 -left-4 rounded-full p-2 shadow-sm bg-white/50 backdrop-blur-md">
              <img src={curvatureTool} alt="tool" className="w-8 h-8" />
            </div>
          </div>

          {/* About Card */}
          <div
            className="border border-[#565F9B]
            rounded-2xl py-5 px-6 bg-[#E6E7F0] text-center max-w-[350px]"
          >
            <h2
              className="font-playfair text-[24px]
              text-[#475096] mb-4"
            >
              About Me
            </h2>
            <div
              className="font-playfair text-[15px]
              text-[#464646] leading-relaxed flex flex-col gap-2"
            >
              <p>I am <strong>Tanjeela Akhter</strong></p>
              <p>
                specialize in video production, video editing, and motion graphics, with a strong focus on creating engaging digital content. While these are my core strengths, I’m highly capable across all aspects of media creation.
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center mt-4">
            <img src={emailIcon} alt="email" className="w-10 h-10 hover:scale-110 transition-transform" />
            <img src={linkedinIcon} alt="linkedin" className="w-10 h-10 hover:scale-110 transition-transform" />
            <img src={behanceIcon} alt="behance" className="w-10 h-10 hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

    </section>
  );
}