import Ground from "@/assets/Group (1).svg";
import BackGround from "@/assets/Group (1).png";
// import backgroundImage from "@/assets/image 6271.svg"
import number from "@/assets/number.svg"
import location from "@/assets/location.svg"
import email from "@/assets/message.svg"

const LetWorkTogether = () => {
  return (
    <div id='reach-out' 
    className="h-fit flex flex-col">
      {/* Bottom section with contact info */}
      <div className="relative w-full py-10 overflow-hidden bg-[#475096]">
     
        {/* Background Image */}
        <img
            src={BackGround}
            alt="Background"
            className="absolute inset-0  w-full h-[320px] object-cover opacity-10"
        />
        <div className="relative z-10"
        style={{ fontFamily: "'Playfair Display', serif" }}
        >
        <p
        className="text-primary-foreground text-2xl md:text-[36px] font-bold text-center mb-8"
        >
        Crafting visual rhythm through
        <span className="block mt-4">
            Motion, Design, and Story.
        </span>
        </p>

       
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl shadow-lg px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <a href="tel:+447917386265" className="flex items-center gap-2 text-[18px] text-[#464646] hover:opacity-80 transition">
              <img src={number} alt="Phone Number" className="w-7 h-7" />
              +44 7917 386265
            </a>
            <a href="mailto:pinky.tanjeela@gmail.com" className="flex items-center gap-2 text-[16px] text-[#464646] underline  hover:opacity-80 transition">
              <img src={email} alt="Email" className="w-7 h-7" />
              pinky.tanjeela@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/tanjeela-akhter-762733120/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[16px] text-[#464646] underline hover:opacity-80 transition">
              <img src={location} alt="Location" className="w-7 h-7" />
              https://www.linkedin.com/in <br/> /tanjeela-akhter-762733120/
            </a>
          </div>
        </div>
        </div>
      </div>

      {/* Footer */}
      <div className=" h-fit bg-[#EDEEF5] bg-secondary  p-10 text-center text-[17px] bg-cover bg-center bg-no-repeat"
       style={{
    backgroundImage: `url(${Ground})`,
  }}>
       <div className="text-[#7A7F9B]"
        style={{ fontFamily: "'Playfair Display', serif" }}>
         © Tanjeela Akhter · Intent in Every Frame.
       </div>
       <div className="text-[#7A7F9B] mt-4"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        Video Editor · Motion Artist · Graphic Designer
       </div>
      </div>
    </div>
  );
};

export default LetWorkTogether;
