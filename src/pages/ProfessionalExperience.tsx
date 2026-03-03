import { useEffect, useRef, useState } from "react";
import { motion, type Easing } from "framer-motion";
import backgroundImage from "@/assets/image 6271.svg"

const ease: Easing = "easeOut";

const experiences = [
  {
    id: 1,
    company: "Etsy",
    date: "Feb 2024 - Present",
    role: "Graphic Designer",
    description:
      "Leading end-to-end visual design for digital products and marketing campaigns, specializing in T-shirt design, motion graphics, and promotional content. Developed high-performing product visuals, landing pages, and UI elements using Figma and Adobe Creative Suite to enhance user engagement and brand visibility. Integrated AI tools like Midjourney to generate innovative design concepts and maintain fresh creative direction across collections.",
    skills: [
      "Brand Identity",
      "Digital Design",
      "Motion Graphics",
      "UI Design",
      "Product Mockups",
      "AI-Assisted Design",
    ],
    side: "left" as const,
  },
  {
    id: 2,
    company: "Five Tech Limited (UK)",
    date: "Feb 2024 - Present",
    role: "Volunteer – Video & Graphic Design Support",
    description:
      "Collaborated with the marketing and production team to develop creative concepts, motion graphics, and video content for product campaigns. Contributed to T-shirt design development and supported videography and post-production workflows.",
    skills: [
      "Motion Design",
      "Videography",
      "Campaign Visuals",
      "Creative Collaboration",
    ],
    side: "right" as const,
  },
  {
    id: 3,
    company: "Shikho (Youtube)",
    date: "Mar 2022 - Jun 2023",
    role: "Graphic Designer",
    description:
      "Designed engaging visual content for a digital learning platform, including animated lessons, marketing creatives, and mobile UI elements. Strengthened brand consistency across educational materials while simplifying complex concepts through illustration, motion design, and structured layouts.",
    skills: [
      "Educational Design",
      "Motion Graphics",
      "UI Design",
      "Infographics",
      "Campaign Design",
    ],
    side: "left" as const,
  },
  {
    id: 4,
    company: "Doctime",
    date: "Jun 2021 - Feb 2022",
    role: "Senior Executive – Creative",
    description:
      "Specialized in motion graphics and promotional video production for healthcare applications. Led concept visualization, storyboarding, and animation development while mentoring junior designers to maintain high creative standards.",
    skills: [
      "3D Animation",
      "Storyboarding",
      "App Promo Videos",
      "Creative Direction",
    ],
    side: "right" as const,
  },
  {
    id: 5,
    company: "Shine Skin",
    date: "Mar 2019 - May 2021",
    role: "Head of Design",
    description:
      "Led the creative team for a cosmetics brand, overseeing branding, marketing visuals, motion graphics, and video production. Established visual guidelines and ensured consistent brand identity across digital and promotional channels.",
    skills: [
      "Team Leadership",
      "Brand Development",
      "Motion Graphics",
      "Campaign Strategy",
    ],
    side: "center" as const,
  },
];

interface TimelineCardProps {
  company: string;
  date: string;
  role: string;
  description: string;
  skills: string[];
  side: "left" | "right" | "center";
  index: number;
}

const TimelineCard = ({
  company,
  date,
  role,
  description,
  skills,
  side,
  index,
}: TimelineCardProps) => {
  const delay = index * 0.3;

  const cardVariants = {
    hidden: { opacity: 0, x: side === "left" ? -30 : side === "right" ? 30 : 0, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease },
    },
  };

  const CardContent = () => (
    <div className="relative bg-card rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] overflow-visible border border-[#475096]">
      {/* Arrow – only for left/right, not for center */}
      {side === "left" && (
        <div className="absolute top-[130px] -right-[12px] w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[12px] border-l-[#475096]" />
      )}
      {side === "right" && (
        <div className="absolute top-[100px] -left-[12px] w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-[#475096]" />
      )}
      {side === "center" && (
        <div
          className="absolute left-1/2 -top-[12px] -translate-x-1/2 w-0 h-0
      border-l-[12px] border-l-transparent
      border-r-[12px] border-r-transparent
      border-b-[12px] border-b-[#475096]"
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between  bg-[#475096] px-5 py-2.5 rounded-t-xl"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        <span className="text-[#FFFFFF] font-bold text-[20px] tracking-wide">
          {company}
        </span>
        <span className="text-[#FFFFFF] text-[18px] font-medium">{date}</span>
      </div>
      {/* Body */}
      <div className="p-4">
        <h3 className="font-bold text-[#565F9B] text-[19px] mb-1 "
          style={{ fontFamily: "'Playfair Display', serif" }}
        >{role}</h3>
        <p className="text-[#464646] text-[13px] leading-relaxed mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          {description}
        </p>
        <p className="font-bold text-[#565F9B] text-[19px]  "
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Key Skills:
        </p>
        <p className="text-[#464646] text-xs  leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          {skills.join(", ")}.
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      className={`w-full ${side === "center" ? "mx-auto max-w-3xl mt-[40px]" : ""}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <CardContent />
    </motion.div>
  );
};

const ProfessionalExperience = () => {
  // ── Desktop refs & state ──────────────────────────────────────────────────
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dotPositions, setDotPositions] = useState<number[]>([]);

  // ── Mobile refs & state ───────────────────────────────────────────────────
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const [mobileLineHeight, setMobileLineHeight] = useState(0);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);
  const mobileDotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mobileDotPositions, setMobileDotPositions] = useState<number[]>([]);

  // ── Desktop: dot positions ────────────────────────────────────────────────
  useEffect(() => {
    const updateDotPositions = () => {
      if (!timelineRef.current) return;
      const timelineTop = timelineRef.current.getBoundingClientRect().top;

      const positions = dotRefs.current.map((dot) => {
        if (!dot) return Infinity;
        const dotRect = dot.getBoundingClientRect();
        return dotRect.top + dotRect.height / 2 - timelineTop;
      });
      setDotPositions(positions);
    };

    updateDotPositions();
    const timer = setTimeout(updateDotPositions, 100);
    window.addEventListener("resize", updateDotPositions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDotPositions);
    };
  }, []);

  // ── Desktop: scroll fill ──────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = window.innerHeight * 0.5 - rect.top;
      const progress = Math.min(Math.max(scrolled / rect.height, 0), 1);
      setLineHeight(progress * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Mobile: scroll fill ───────────────────────────────────────────────────
  useEffect(() => {
    const handleMobileScroll = () => {
      if (!mobileContainerRef.current) return;
      const rect = mobileContainerRef.current.getBoundingClientRect();
      const scrolled = window.innerHeight * 0.5 - rect.top;
      const progress = Math.min(Math.max(scrolled / rect.height, 0), 1);
      setMobileLineHeight(progress * 100);
    };
    window.addEventListener("scroll", handleMobileScroll, { passive: true });
    handleMobileScroll();
    return () => window.removeEventListener("scroll", handleMobileScroll);
  }, []);

  return (
    <div
      className="relative w-full h-fit p-[90px] pt-10  bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background image */}
      {/* <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="  w-full h-full object-cover z-0   "
      /> */}

      {/* Gradient overlay on top of bg image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 80% at center, #FFFFFF 0%, #E6E7F1 60%, #9397C2 100%)",
        }}
      />
      <div id='expertise' className="relative z-10 max-w-6xl hidden md:block mx-auto ">
        <h1
          className="text-center text-3xl md:text-[40px] font-semibold  mb-12 text-[#475096]"
          style={{ fontFamily: "'Playfair Display', serif" }}

        >
          PROFESSIONAL EXPERIENCE
        </h1>

        <div className="relative" ref={containerRef} >
          {/* Background timeline line (gray) */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-8 mt-[120px] w-1 lg:h-[830px] xl:h-[790px] bg-[#EBEEFF] -translate-x-1/2"
          />
          {/* Animated fill line (primary color) */}
          <div
            className="absolute left-1/2 top-8 mt-[120px] w-1 bg-[#475096] -translate-x-1/2 transition-[height] duration-100 ease-linear"
            style={{ height: `${(lineHeight / 100) * 1010}px` }}
          />

          {/* Timeline rows using grid */}
          <div className="relative flex flex-col gap-1">
            {experiences.map((exp, index) => {
              const currentFillHeight = (lineHeight / 100) * 1060;
              const dotPixelPosition = dotPositions[index] ?? Infinity;
              const isActive = currentFillHeight >= dotPixelPosition;
              // Each row is a grid with 3 columns: left (1fr), middle (auto), right (1fr)
              return (
                <div key={index} className="grid grid-cols-[1fr_auto_1fr] gap-8 items-start -mb-[60px]">
                  {/* Left column: card if side=left or side=center? For center we want the card centered, so we'll handle separately */}
                  {exp.side === "left" && (
                    <>
                      <div className="col-start-1">
                        <TimelineCard {...exp} index={index} />
                      </div>
                      <div className="col-start-2 relative flex justify-center mt-[136px]">
                        {/* Dot */}
                        <div
                          ref={(el) => { dotRefs.current[index] = el; }}
                          className={`w-5 h-5 rounded-full  transition-colors duration-300 ${isActive
                            ? "bg-[#475096] "
                            : "bg-[#EBEEFF] "
                            }`}
                        />
                      </div>
                      <div className="col-start-3" /> {/* empty */}
                    </>
                  )}

                  {exp.side === "right" && (
                    <>
                      <div className="col-start-1" /> {/* empty */}
                      <div className="col-start-2 relative flex justify-center mt-[100px]">
                        <div
                          ref={(el) => { dotRefs.current[index] = el; }}
                          className={`w-5 h-5 rounded-full  transition-colors duration-300 ${isActive
                            ? "bg-[#475096] "
                            : "bg-[#EBEEFF] "
                            }`}
                        />
                      </div>
                      <div className="col-start-3">
                        <TimelineCard {...exp} index={index} />
                      </div>
                    </>
                  )}

                  {exp.side === "center" && (
                    <>
                      <div className="col-start-1 " /> {/* empty */}
                      <div className="col-start-2 relative flex flex-col items-center">
                        {/* Dot above the card */}
                        <div
                          ref={(el) => { dotRefs.current[index] = el; }}
                          className={`w-5 h-5 rounded-full  transition-colors duration-300  mt-[90px] ${isActive
                            ? "bg-[#475096] "
                            : "bg-[#EBEEFF] "
                            }`}
                        />
                        {/* Centered card */}
                        <div className="w-[45vw] max-w-lg">
                          <TimelineCard {...exp} index={index} />
                        </div>
                      </div>
                      <div className="col-start-3" /> {/* empty */}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative z-10 px-4 pt-4 pb-10">
        <h1
          className="text-center text-2xl font-semibold mb-10 text-[#475096]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          PROFESSIONAL EXPERIENCE
        </h1>

        <div className="relative" ref={mobileContainerRef}>
          {/* Background timeline line */}
          <div
            ref={mobileTimelineRef}
            className="absolute -left-[50px] top-0 w-0.5 h-full bg-[#EBEEFF]"
          />
          {/* Animated fill line */}
          <div
            className="absolute -left-[50px] top-0 w-0.5 bg-[#475096] transition-[height] duration-100 ease-linear"
            style={{ height: `${mobileLineHeight}%` }}
          />

          <div className="flex flex-col gap-8 pl-12">
            {experiences.map((exp, index) => {
              const mobileTimelineHeight = mobileTimelineRef.current ? mobileTimelineRef.current.offsetHeight : 0;
              const mobileFillHeight = (mobileLineHeight / 100) * mobileTimelineHeight;
              const mobileDotPos = mobileDotPositions[index] ?? Infinity;
              const isActive = mobileFillHeight >= mobileDotPos;

              return (
                <motion.div
                  key={index}
                  className="relative max-w-3xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease }}
                >
                  {/* Dot on the timeline */}
                  <div
                    ref={(el) => { mobileDotRefs.current[index] = el; }}
                    className={`absolute -left-[105px] top-[18px] w-4 h-4 rounded-full border-2 border-[#475096] transition-colors duration-300 ${isActive ? "bg-[#475096]" : "bg-[#EBEEFF]"
                      }`}
                  />

                  {/* Card */}
<div className="bg-white w-[150px] rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] border border-[#475096] overflow-hidden">                    {/* Header */}
                    <div
                      className="bg-[#475096] px-4 py-2.5 flex flex-col gap-0.5"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      <span className="text-white font-bold text-base leading-tight">
                        {exp.company}
                      </span>
                      <span className="text-white/80 text-xs font-medium">
                        {exp.date}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-4 ">
                      <h3
                        className="font-bold text-[#565F9B] text-base mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="text-[#464646] text-xs leading-relaxed mb-3"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {exp.description}
                      </p>
                      <p
                        className="font-bold text-[#565F9B] text-sm mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Key Skills:
                      </p>
                      <p
                        className="text-[#464646] text-xs leading-relaxed"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {exp.skills.join(", ")}.
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
