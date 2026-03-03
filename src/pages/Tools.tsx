import AeIcon from '../assets/Ae1.svg';
import PrIcon from '../assets/Pr2.svg';
import PsIcon from '../assets/Ps3.svg';
import AiIcon from '../assets/Ai4.svg';
import BrIcon from '../assets/Br5.svg';
import CanvaIcon from '../assets/canva6.svg';

const tools = [
  { id: 1, name: 'Adobe\nAfter Effect', image: AeIcon, alt: 'Adobe After Effect' },
  { id: 2, name: 'Adobe\nPremier Pro', image: PrIcon, alt: 'Adobe Premier Pro' },
  { id: 3, name: 'Adobe\nPhotoshop', image: PsIcon, alt: 'Adobe Photoshop' },
  { id: 4, name: 'Adobe\nIllustrator', image: AiIcon, alt: 'Adobe Illustrator' },
  { id: 5, name: 'Adobe Bridge', image: BrIcon, alt: 'Adobe Bridge' },
  { id: 6, name: 'Canva', image: CanvaIcon, alt: 'Canva' },
];

export default function Tools() {
  return (
    <div
    id='tools'
      className="h-fit w-full flex items-center justify-center px-4 py-10 sm:py-10 md:py-10 bg-[#475096]"
    >
      <div className="w-full max-w-5xl mx-auto">

        {/* ── Title ── */}
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center text-white mb-8 sm:mb-10 md:mb-14 font-['Playfair_Display',serif]"
        >
          Tools &amp; Platforms
        </h1>

        {/* ── Tools Grid ──
            Mobile  : 2 columns
            Tablet  : 3 columns  (sm ≥ 640px)
            Desktop : 6 columns  (md ≥ 768px)
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col items-center rounded-2xl transition-transform duration-300 hover:scale-105 cursor-pointer
                px-2 pt-4 pb-3
                bg-[#475096] border border-white/[0.22] shadow-[0_4px_24px_rgba(0,0,0,0.18)]
                w-full max-w-[160px] sm:max-w-[150px] lg:max-w-[138px]
                min-h-[140px] sm:min-h-[155px] lg:min-h-[175px]"
            >
              {/* Icon — fixed-height zone so all names start at same row */}
              <div className="flex items-center justify-center w-full h-[70px] sm:h-[80px] lg:h-[90px]">
                <img
                  src={tool.image}
                  alt={tool.alt}
                  className="object-contain drop-shadow-lg w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] lg:w-[80px] lg:h-[80px]"
                  draggable={false}
                />
              </div>

              {/* Name — starts at same row for every card */}
              <p
                className="text-center text-white/90 font-medium leading-snug mt-3 w-full whitespace-pre-line
                  text-[11px] sm:text-[12px] lg:text-[13px]
                  [font-family:'Playfair_Display',serif]"
              >
                {tool.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
