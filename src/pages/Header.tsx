import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("portfolio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "portfolio", label: "Portfolio" },
    { id: "tools", label: "Tools" },
    { id: "expertise", label: "Expertise" },
    { id: "reach-out", label: "Reach out" },
  ];

  const handleNavClick = (id: string) => {
    setSelectedNavItem(id);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // close mobile menu after click
  };

  return (
    <header className="fixed top-0 z-50 w-full py-2 lg:py-3 px-3 lg:px-4 transition-all duration-300 bg-transparent">
      <div
        className={`max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%] 
  mx-auto rounded-full border border-[#EDF1FD] transition-all duration-300 ${isScrolled
            ? "bg-[#EEF1FB]/60 backdrop-blur-sm shadow-lg"
            : "bg-[#EEF1FB]/70 backdrop-blur-sm shadow-md"
          }`}
      >
        <div className=" justify-between  rounded-full  py-3  w-full flex h-12 lg:h-14 xl:h-16 items-center px-2 lg:px-4 xl:px-6">

          {/* Logo / Brand */}
          <div className="flex items-center gap-0 text-[#3F4251] text-base lg:text-[20px] font-normal tracking-tight whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Design with{" "}
            <span className="ml-1.5 text-[#475096] font-normal lg:text-[20px]">Purpose</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-[hsl(230,15%,40%)]"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetContent side="left" className="bg-[hsl(0,0%,98%)] p-6">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[hsl(230,15%,40%)] text-lg">
                    Design with <span className="text-[hsl(240,45%,40%)] font-normal">Purpose</span>
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Navigation Items */}
                <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className={`text-left py-2 text-lg transition-colors ${
                          selectedNavItem === item.id
                            ? "text-[hsl(230,35%,35%)] font-semibold"
                            : "text-[#464646] font-normal hover:text-[hsl(230,35%,35%)]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-12 -translate-x-7">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className={`relative pb-1 text-sm lg:text-[20px] transition-colors ${
                    selectedNavItem === item.id
                      ? "text-[hsl(230,35%,35%)] font-semibold"
                      : "text-[#464646] font-normal hover:text-[hsl(230,35%,35%)]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
