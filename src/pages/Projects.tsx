import { useState } from "react";

// ── Project folder images (shown by default / ALL view) ──
import img1 from "../assets/Project/1.svg";
import img2 from "../assets/Project/2.svg";
import img3 from "../assets/Project/3.svg";
import img4 from "../assets/Project/4.svg";
import img5 from "../assets/Project/5.svg";
import img6 from "../assets/Project/6.svg";
import img7 from "../assets/Project/7.svg";
import img8 from "../assets/Project/8.svg";
import img9 from "../assets/Project/9.svg";
import img10 from "../assets/Project/10.svg";
import img11 from "../assets/Project/11.svg";
import img12 from "../assets/Project/12.svg";

// ── Motion folder images (shown when Motion Design Identity is active) ──
import motion1 from "../assets/Motion/1.svg";
import motion2 from "../assets/Motion/2.svg";
import motion3 from "../assets/Motion/3.svg";
import motion4 from "../assets/Motion/4.svg";
import motion5 from "../assets/Motion/5.svg";
import motion6 from "../assets/Motion/6.svg";

// ── Animation folder images (shown when 2D Animation & Storytelling is active) ──
import anim1 from "../assets/Animation/1.svg";
import anim2 from "../assets/Animation/2.svg";
import anim3 from "../assets/Animation/3.svg";
import anim4 from "../assets/Animation/4.svg";
import anim5 from "../assets/Animation/5.svg";

// ── 3 filter tabs ──
const categories = [
  "Video Production & Editing Showcase",
  "Motion Design Identity",
  "2D Animation & Storytelling",
];

// ── Section metadata for 4 rows ──
const sectionMeta: Record<
  string,
  { title: string; label: string; num: string; badge: string; pill: string }
> = {
  "Video Production & Editing Showcase": {
    title: "Shine Skin Korean Skincare Cosmaetics",
    label: "Editing Showcase",
    num: "01",
    badge: "bg-[#0CA5C6] text-white",
    pill: "border-[#0CA5C6] text-[#0CA5C6]",
  },
  "Shine Skin Korean Skincare Cosmetics": {
    title: "Shine Skin Korean Skincare Cosmaetics",
    label: "Skincare Products",
    num: "02",
    badge: "bg-[#836D30] text-white",
    pill: "border-[#836D30] text-[#836D30]",
  },
  "Biellée Pollen Time Repair Range": {
    title: "Shine Skin Korean Skincare Cosmaetics",
    label: "Beauty Products",
    num: "03",
    badge: "bg-[#CD82B7] text-white",
    pill: "border-[#CD82B7] text-[#CD82B7]",
  },
  "2D Animation & Storytelling": {
    title: "Video Production & Editing Showcase ",
    label: "Videos & Projects",
    num: "04",
    badge: "bg-[#28a745] text-white",
    pill: "border-[#28a745] text-[#28a745]",
  },
};

// ── Shared card type ──
interface CardItem {
  id: number;
  image: string;
  name: string;
  brand: string;
  subtitle: string;
  label: string;
  category: string;
  link?: string; // optional external URL (e.g. Behance)
}

// ── Main project cards (default view — all 4 sections) ──
const projects: CardItem[] = [
  // Row 1: Video Production & Editing Showcase — img1–3 (3 images)
  { id: 1, image: img1, name: "Video Shoot & Green Screen Setup", brand: "TANJEELA AKHTER", subtitle: "Video Shoot Production", label: "Video", category: "Video Production & Editing Showcase" },
  { id: 2, image: img2, name: "Video Editing & Color Grading", brand: "TANJEELA AKHTER", subtitle: "Professional Video Editing", label: "Video", category: "Video Production & Editing Showcase" },
  { id: 3, image: img3, name: "Editing Showcase Reel", brand: "TANJEELA AKHTER", subtitle: "Editing Showcase", label: "Editing Showcase", category: "Video Production & Editing Showcase" },

  // Row 2: Shine Skin Korean Skincare Cosmetics — img4–6 (3 images)
  { id: 4, image: img4, name: "Shine Skin Korean Skincare", brand: "SHINE SKIN", subtitle: "Korean Skincare Cosmetics", label: "Skincare", category: "Shine Skin Korean Skincare Cosmetics" },
  { id: 5, image: img5, name: "Shine Skin Product Campaign", brand: "SHINE SKIN", subtitle: "Motion Design Identity", label: "Skincare", category: "Shine Skin Korean Skincare Cosmetics" },
  { id: 6, image: img6, name: "Shine Skin Brand Visual", brand: "SHINE SKIN", subtitle: "Brand Visual Design", label: "Motion", category: "Shine Skin Korean Skincare Cosmetics" },

  // Row 3: Biellée Pollen Time Repair Range — img7–9 (3 images)
  { id: 7, image: img7, name: "Biellee Pollen Time Repair", brand: "BIELLEE", subtitle: "Pollen Time Repair Range", label: "Beauty", category: "Biellée Pollen Time Repair Range" },
  { id: 8, image: img8, name: "Biellee Beauty Campaign", brand: "BIELLEE", subtitle: "Beauty Product Campaign", label: "Beauty", category: "Biellée Pollen Time Repair Range" },
  { id: 9, image: img9, name: "Biellee Brand Identity", brand: "BIELLEE", subtitle: "Motion Design Identity", label: "Motion", category: "Biellée Pollen Time Repair Range" },

  // Row 4: 2D Animation & Storytelling — img10–12 (3 images)
  { id: 10, image: img10, name: "2D Character Animation", brand: "TANJEELA AKHTER", subtitle: "2D Animation & Storytelling", label: "Animation", category: "2D Animation & Storytelling", link: "https://www.behance.net/gallery/101170469/Youtube-Video-Thumbnail-Design" },
  { id: 11, image: img11, name: "Animated Story Short", brand: "TANJEELA AKHTER", subtitle: "Character Design & Story", label: "Animation", category: "2D Animation & Storytelling", link: "https://www.behance.net/gallery/100942709/JNH-Sunscreen-breaking-the-myth" },
  { id: 12, image: img12, name: "2D Storytelling Reel", brand: "TANJEELA AKHTER", subtitle: "2D Storytelling", label: "Animation", category: "2D Animation & Storytelling", link: "https://www.behance.net/gallery/100961733/MACQUEEN-NEW-YORK-Waterproof-Pencil-Gel-liner" },
];

// ── Motion Design Identity specific cards (from assets/Motion/) ──
const motionCards: CardItem[] = [
  { id: 101, image: motion1, name: "Pregnancy's Care", brand: "TANJEELA AKHTER", subtitle: "Motion Graphic Design", label: "Motion", category: "Motion Design Identity", link: "https://www.behance.net/gallery/141488965/Pregnancys-care" },
  { id: 102, image: motion2, name: "Doctime Campaign", brand: "TANJEELA AKHTER", subtitle: "Motion Graphic Design", label: "Motion", category: "Motion Design Identity", link: "https://www.behance.net/gallery/141488713/Doctime-campaign" },
  { id: 103, image: motion3, name: "Happy Mother's Day 2021", brand: "TANJEELA AKHTER", subtitle: "Motion Graphic Design", label: "Motion", category: "Motion Design Identity", link: "https://www.behance.net/gallery/119307719/Happy-Mothers-Day-2021" },
  { id: 104, image: motion4, name: "Medsyy — Your Health", brand: "TANJEELA AKHTER", subtitle: "Motion Graphic Design", label: "Motion", category: "Motion Design Identity", link: "https://www.behance.net/gallery/119306227/Medsyy-Your-Health-Is-Our-Top-Priority" },
  { id: 105, image: motion5, name: "BanglaPapers App Promo", brand: "TANJEELA AKHTER", subtitle: "Motion Graphic Design", label: "Motion", category: "Motion Design Identity", link: "https://www.behance.net/gallery/56211599/BanglaPapers-App-Promo" },
  { id: 106, image: motion6, name: "Finding Fresh Food", brand: "TANJEELA AKHTER", subtitle: "Motion Graphic Design", label: "Motion", category: "Motion Design Identity", link: "https://www.behance.net/gallery/64146731/Finding-Fresh-Food" },
];

// ── 2D Animation & Storytelling specific cards (from assets/Animation/) ──
const animationCards: CardItem[] = [
  { id: 201, image: anim1, name: "2D Animation — 1", brand: "TANJEELA AKHTER", subtitle: "2D Animation & Storytelling", label: "Animation", category: "2D Animation & Storytelling" },
  { id: 202, image: anim2, name: "1971 War Of Bangladesh", brand: "TANJEELA AKHTER", subtitle: "2D Animation & Storytelling", label: "Animation", category: "2D Animation & Storytelling", link: "https://drive.google.com/file/d/1spHkgr_3qIPJ-TTDmPYIkPjOZN3WD2Hk/view" },
  { id: 203, image: anim3, name: "Animation Reel", brand: "TANJEELA AKHTER", subtitle: "2D Animation & Storytelling", label: "Animation", category: "2D Animation & Storytelling", link: "https://www.behance.net/gallery/35741987/1971-War-Of-Bangladesh" },
  { id: 204, image: anim4, name: "Animation Showcase", brand: "TANJEELA AKHTER", subtitle: "2D Animation & Storytelling", label: "Animation", category: "2D Animation & Storytelling", link: "https://www.youtube.com/watch?v=5m20nvligpw" },
  { id: 205, image: anim5, name: "MrQ in Daffodil", brand: "TANJEELA AKHTER", subtitle: "2D Animation & Storytelling", label: "Animation", category: "2D Animation & Storytelling", link: "https://www.behance.net/gallery/35740659/MrQ-in-Daffodil" },
];

export default function FeaturedProjects() {
  const [active, setActive] = useState<string | null>("Video Production & Editing Showcase");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Which special tab is active
  const isMotionActive = active === "Motion Design Identity";
  const isAnimationActive = active === "2D Animation & Storytelling";

  // Get unique categories for the default view
  const uniqueCategories = [...new Set(projects.map(p => p.category))];

  // Group projects by category for the default view
  const groupedProjects = uniqueCategories.map(category => ({
    category,
    items: projects.filter(p => p.category === category)
  }));

  return (
    <div className="w-full h-fit bg-gradient-to-br from-[#f4f6ff] via-[#f0f0ff] to-[#f9f9ff] py-8 sm:py-14 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-lg px-4 sm:px-8 md:px-10 py-8 sm:py-12">

        {/* Title with Playfair Display font */}
        <h2
          className="text-center text-2xl sm:text-[40px] font-semibold text-[#4b4f91] mb-5 sm:mb-6 tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Featured Projects
        </h2>

        {/* 3 category filter buttons */}
        <div className="w-full overflow-x-auto pb-2 mb-8 sm:mb-10">
          <div className="flex gap-2 sm:gap-3 sm:flex-wrap sm:justify-center min-w-max sm:min-w-0 px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(active === cat ? null : cat)}
                className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full border whitespace-nowrap transition-all duration-200 flex-shrink-0 ${active === cat
                    ? "bg-[#4b4f91] text-white border-[#4b4f91] shadow-md"
                    : "bg-white text-[#4b4f91] border-[#cfd3ff] hover:bg-[#eef0ff]"
                  }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── MOTION DESIGN IDENTITY view ── */}
        {isMotionActive ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
              {motionCards.map((card) => (
                <ProjectCard
                  key={card.id}
                  project={card}
                  onMaximize={setLightboxImage}
                />
              ))}
            </div>
          </div>

        ) : isAnimationActive ? (
          /* ── 2D ANIMATION & STORYTELLING view ── */
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
              {animationCards.map((card) => (
                <ProjectCard
                  key={card.id}
                  project={card}
                  onMaximize={setLightboxImage}
                />
              ))}
            </div>
          </div>

        ) : (
          /* ── DEFAULT: all 4 sections grouped ── */
          <div className="space-y-8 sm:space-y-10">
            {groupedProjects.map(({ category, items }) => {
              const meta = sectionMeta[category];
              return (
                <div key={category}>
                  {/* Section heading with badge and pill - with Playfair Display font */}
                  <div className="flex flex-wrap items-start sm:items-center justify-between gap-2 mb-4">
                    <h3
                      className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug max-w-[55%] sm:max-w-none"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {meta?.title ?? category}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`w-6 h-6 flex items-center justify-center rounded-sm text-[10px] font-bold ${meta?.badge}`}>
                        {meta?.num}
                      </span>
                      <span
                        className={`text-[10px] sm:text-xs border px-2 sm:px-3 py-0.5 rounded-sm font-medium whitespace-nowrap ${meta?.pill}`}
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {meta?.label}
                      </span>
                    </div>
                  </div>

                  {/* Image grid - 3 images per row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
                    {items.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onMaximize={setLightboxImage}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* ── Full-screen Lightbox (for cards without a link) ── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/25 rounded-full w-9 h-9 flex items-center justify-center transition-colors duration-200 z-10"
            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt="Maximized"
            className="max-w-[92vw] max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}

// ── Shared card with hover UI ──
function ProjectCard({
  project,
  onMaximize,
}: {
  project: CardItem;
  onMaximize?: (img: string) => void;
}) {
  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-100 h-44 md:h-48 lg:h-52 group shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer">

      {/* Project image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Hover: dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Hover: bottom bar with name + action icon — slides up */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-3 py-1.5 bg-[#7D79B4] backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span
          className="text-white text-[10px] font-semibold truncate pr-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.name}
        </span>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.link ? (
            /* Has a link — show external link icon only */
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-white hover:text-[#00bcd4] transition-colors duration-150"
              title="View project"
              aria-label="Open project link"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : onMaximize ? (
            /* No link — show maximize icon only */
            <button
              onClick={() => onMaximize(project.image)}
              className="text-white hover:text-yellow-300 transition-colors duration-150"
              title="Maximize image"
              aria-label="Maximize image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>

    </div>
  );
}